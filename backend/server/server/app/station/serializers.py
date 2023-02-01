
from pyexpat import model
from rest_framework import serializers
from .models import Station
from django.core.serializers import serialize

class StationSerializer(serializers.ModelSerializer):
    class Meta:
            model = Station
            fields = ('__all__')
            #fields = ('id', 'name', 'lat', 'long')
    
    def to_Station(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img
        }
    def CreateStation(data):
        station = Station.objects.create(
           
            name = data["name"],
            long = data["long"],
            lat = data["lat"],
            img = data["img"]
        )
        return station
    def UpdateStation(data):
        station = Station.objects.update(
            id = data["id"],
            name = data["name"],
            long = data["long"],
            lat = data["lat"],
            img = data["img"]
        )
        return station