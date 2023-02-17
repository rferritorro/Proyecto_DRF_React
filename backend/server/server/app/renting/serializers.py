
from pyexpat import model
from rest_framework import serializers
from .models import Renting
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
