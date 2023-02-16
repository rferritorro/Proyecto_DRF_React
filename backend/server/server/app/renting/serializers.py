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

class RentingSerializer(serializers.ModelSerializer):
    class Meta:
            model = Renting
            fields = ('__all__')
            #fields = ('id', 'name', 'lat', 'long')
    def to_renting(instance):
        return {
            "user_id":instance.user,
            "station_id":instance.station,
            "slot_id":instance.slot,
            "bike_id":instance.bike,
            "date":instance.date,                                    
        }

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