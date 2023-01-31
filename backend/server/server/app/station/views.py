from rest_framework.response import Response
from rest_framework import viewsets
from .models import Station
from .serializers import StationSerializer

class StationView(viewsets.GenericViewSet):
    def GetStation(self):
        sql = 'SELECT station.id, station.name, station.lat, station.long, slots.bikes FROM station LEFT JOIN slots ON slots.station_id = station.id ORDER BY id ASC'
        qs = Station.objects.raw(sql)
        qs_json = StationSerializer(qs, many=True).data
        return Response(qs_json, content_type='application/json')