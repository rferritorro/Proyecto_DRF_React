
from pyexpat import model
from rest_framework import serializers
from .models import Station
from django.core.serializers import serialize

class StationSerializer(serializers.ModelSerializer):
    class Meta:
            model = Station
            fields = ('__all__')
            #fields = ('id', 'name', 'lat', 'long')
    
    def to_station(instance):
        return {
            'id': instance.id,
            'name': instance.name,
            'lat': instance.lat,
            'long': instance.long,
            'img': instance.img
        }
    def CreateStation(context):
        station = Station.objects.create(
            name = context["name"],
            long = context["long"],
            lat = context["lat"],
            img = context["img"]
        )
        return station