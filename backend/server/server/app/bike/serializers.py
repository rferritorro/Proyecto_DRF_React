
from pyexpat import model
from rest_framework import serializers
from .models import Bike
from django.core.serializers import serialize

class BikeSerializer(serializers.ModelSerializer):
    class Meta:
            model = Bike
            fields = ('__all__')
            #fields = ('id', 'name', 'lat', 'long')
    def to_bikes(instance):
        return {
            "id": instance.id,
            "state":instance.state,
            "slot":instance.slot_id
        }
    def AllBikes():
        bikes = Bike.objects.all()
        serialized_bikes = []

        for bike in bikes.iterator():
            new_bike = BikeSerializer.to_bikes(bike)
            serialized_bikes.append(new_bike)

        return serialized_bikes