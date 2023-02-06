
from pyexpat import model
from rest_framework import serializers
from .models import Renting
from django.core.serializers import serialize

class RentingSerializer(serializers.ModelSerializer):
    class Meta:
            model = Renting
            fields = ('__all__')
            #fields = ('id', 'name', 'lat', 'long')
    def to_renting(instance):
        return {
            "id": instance.id,
            "user_id":instance.user,
            "station_id":instance.station,
            "slot_id":instance.slot,
            "bike_id":instance.bike,
            "date":instance.date,                                    
        }