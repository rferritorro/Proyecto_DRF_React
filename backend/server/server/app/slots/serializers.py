
from pyexpat import model
from rest_framework import serializers
from .models import Slots
from django.core.serializers import serialize

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
            model = Slots
            fields = ('__all__')
    
    def to_Station(instance):
        return {
            'id': instance.id,
            'station_id': instance.station_id,
            'bikes': instance.bikes,
        }