from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Station
from .serializers import StationSerializer

class StationView(viewsets.GenericViewSet):
    def GetStation(self, request):
        sql = 'SELECT station.id, station.name, station.lat, station.long, station.img, slots.bikes FROM station LEFT JOIN slots ON slots.station_id = station.id ORDER BY id ASC'
        qs = Station.objects.raw(sql)
        qs_json = StationSerializer(qs, many=True).data
        return Response(qs_json, content_type='application/json')
    def GetStationByID(self, request, id):
        sql = 'SELECT station.id, station.name, station.lat, station.long, station.img, slots.bikes FROM station LEFT JOIN slots ON slots.station_id = station.id WHERE station.id='+ id +' ORDER BY id ASC'
        qs = Station.objects.raw(sql)
        qs_json = StationSerializer(qs, many=True).data
        return Response(qs_json, content_type='application/json')
    def CreateStation(self, request):
        serializer_data = request.data
        StationSerializer.CreateStation(data=serializer_data)
        # serializer = self.serializer_class(
        #     data = serializer_data
        # )
        return Response({"ADDED NEW STATION SUCCESFULL"}, status=status.HTTP_201_CREATED)
    def UpdateStation(self, request):
        serializer_data = request.data
        StationSerializer.UpdateStation(data=serializer_data)
        # serializer = self.serializer_class(
        #     data = serializer_data
        # )
        return Response({"STATION UPDATED SUCCESFULL"}, status=status.HTTP_201_CREATED)
    def DeleteStation(self, request, id):
        try:
            station = Station.objects.get(id=id)
        except Station.DoesNotExist:
            raise NotFound('A station with this id does not exist.')

        station.delete()
        return Response({"STATION DELETED"}, status=status.HTTP_204_NO_CONTENT)
