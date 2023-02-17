import jwt
from django.conf import settings
from pyexpat import model
from rest_framework import serializers
from .models import Renting
from ..user.models import User
from ..station.models import Station
from ..slots.models import Slots
from ..bike.models import Bike
from django.core.serializers import serialize
from ..user.serializers import UserSerializer
from ..station.serializers import StationSerializer
from ..slots.serializers import SlotSerializer
from ..bike.serializers import BikeSerializer

class RentingSerializer(serializers.ModelSerializer):
    class Meta:
            model = Renting
            fields = ('__all__')
            #fields = ('id', 'user_id', 'station_id', 'slot_id', 'bike_id', 'date')
    def to_renting(instance):
        return {
            "id": instance.id,
            "user_id":instance.user_id,
            "station_id":instance.station_id,
            "slot_id":instance.slot_id,
            "bike_id":instance.bike_id,
            "date":instance.date,                                    
        }
    
    def allStations():
        renting = Renting.objects.all()
        serializer = []

        for renting in renting.iterator():
            new_rent = RentingSerializer.to_renting(renting)
            user = UserSerializer.getUser(context={'id': new_rent["user_id"]} )
            station = StationSerializer.getOneStation(id = new_rent["station_id"])
            slot = SlotSerializer.getSlot(id= new_rent["slot_id"])
            bike = BikeSerializer.getBike(id= new_rent["bike_id"])
            new_rent["user_id"] = user
            new_rent["station_id"] = station
            new_rent["slot_id"] = slot
            new_rent["bike_id"] = bike
            serializer.append(new_rent)
        return serializer

    def createRenting(context):
        user_decode = jwt.decode(context['user'], settings.SECRET_KEY)
        user_id = User.objects.get(id = user_decode["id"])
        station_id = Station.objects.get(id = context['station'])
        slot_id = Slots.objects.get(id = context["slot"])
        bike_id = Bike.objects.get(id = context["bike"])
        bike_token=False

        if Renting.objects.filter(bike = context["bike"]).exists():
            raise serializers.ValidationError("Bike '{}' has been riding".format(context['bike']))
        renting = Renting.objects.create(
            user = user_id,
            station = station_id,
            slot = slot_id,
            bike = bike_id,
            date = context["date"]
        )
        serialized_renting = RentingSerializer.to_renting(renting)
        if not serialized_renting:
            raise serializers.ValidationError("It ocurred an error in reserving")
        else: 
            bike_token = jwt.encode({'user_id': user_decode["id"],'bike_id': context["bike"]}, settings.SECRET_KEY, algorithm='HS256')
        return bike_token
    
    def removeRenting(context):
        data_token = jwt.decode(context["token_bike"], settings.SECRET_KEY)
        if not Renting.objects.filter(bike = data_token["bike_id"]).exists():
            return False
        try:
            Slots.objects.filter(id=context["slot_id"]).update(bike_id=data_token["bike_id"])
        except Exception as e:
            raise e
        
        deleted_rent = Renting.objects.filter(bike_id=data_token["bike_id"]).delete()
        if not deleted_rent:
            return False
        return True
