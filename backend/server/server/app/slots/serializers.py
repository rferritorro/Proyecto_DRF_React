
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
            'state': instance.state
        }

    def AllSlots():
        slots = Slots.objects.all()
        serialized_slots = []

        for slot in slots.iterator():
            new_slot = SlotSerializer.to_slots(slot)
            serialized_slots.append(new_slot)

        return serialized_slots
    
    def GetSlotByStation(context):
        queryset = Slots.objects.filter(station_id = context["station_id"])
        print(queryset)
        serialized_slots = []
        
        for slot in queryset.iterator():
            new_slot = SlotSerializer.to_slots(slot)
            serialized_slots.append(new_slot)

        return serialized_slots