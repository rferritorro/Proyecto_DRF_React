from rest_framework.response import Response
from rest_framework import viewsets
from ..models.model_station import Station
from ..serializes.serialize_station import StationSerializer

class StationView(viewsets.GenericViewSet):
    def GetStation(self,request):
        sql = 'SELECT station.id, station.name, station.lat, station.long, station.img, slots.bikes FROM station_station station LEFT JOIN slots_slots slots ON slots.station_id = station.id ORDER BY id ASC'
        qs = Station.objects.raw(sql)
        qs_json = StationSerializer(qs, many=True).data
        return Response(qs_json, content_type='application/json')
       