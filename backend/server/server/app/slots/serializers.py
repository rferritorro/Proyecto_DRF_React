
from pyexpat import model
from rest_framework import serializers
from .models import Slots
from django.core.serializers import serialize
from ..station.serializers import StationSerializer

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
            model = Slots
            fields = ('__all__')
    
    def to_slots(instance):
        return {
            'id': instance.id,
            'station_id': instance.station_id,
            'bike_id': instance.bike_id,
            'state': instance.state
        }

    def getSlot(id):
        slots = Slots.objects.get(id = id)
        serialized_slots = SlotSerializer.to_slots(slots)
        
        return serialized_slots
    
    def AllSlots():
        slots = Slots.objects.all()
        serialized_slots = []

        for slot in slots.iterator():
            new_bike = SlotSerializer.to_slots(slot)
            station = StationSerializer.getOneStation(id = new_bike["station_id"])
            new_bike["station_id"] = station
            serialized_slots.append(new_bike)

        return serialized_slots
    
    def GetSlotByStation(context):
        queryset = Slots.objects.filter(station_id = context["station_id"])
        serialized_slots = []
        
        for slot in queryset.iterator():
            new_slot = SlotSerializer.to_slots(slot)
            serialized_slots.append(new_slot)

        return serialized_slots