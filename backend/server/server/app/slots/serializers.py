
from pyexpat import model
from rest_framework import serializers
from .models import Slots
from django.core.serializers import serialize

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
            model = Slots
            fields = ('__all__')
    
    def to_slots(instance):
        return {
            'id': instance.id,
            'station_id': instance.station_id,
            'bike_id': instance.bike_id,
        }

    def AllSlots():
        slots = Slots.objects.all()
        serialized_bikes = []

        for slot in slots.iterator():
            new_bike = SlotSerializer.to_slots(slot)
            serialized_bikes.append(new_bike)

        return serialized_bikes