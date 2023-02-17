from rest_framework.response import Response
from rest_framework.exceptions import NotFound
from rest_framework import viewsets, status
from .models import Station
from .serializers import StationSerializer

class StationView(viewsets.GenericViewSet):
    def GetStation(self, request):
        queryset = Station.objects.all()
        serializer = StationSerializer(queryset,many=True).data
        return Response(serializer,status=status.HTTP_200_OK)

    def GetStationByID(self, request, *args , **kwargs):
        station = StationSerializer.getOneStation(id= kwargs["id"])
        return Response(station,status=status.HTTP_200_OK)

    def CreateStation(self, request):
        serializer_data = request.data
        StationSerializer.CreateStation(context=serializer_data)
        return Response({"ADDED NEW STATION SUCCESFULL"}, status=status.HTTP_201_CREATED)

    def UpdateStation(self, request, id):
        serializer_data = request.data
        update = StationSerializer.UpdateStation(context=serializer_data, id= id)
        return Response(update, status=status.HTTP_201_CREATED)

    def DeleteStation(self, request, id):
        try:
            station = Station.objects.get(id=id)
        except Station.DoesNotExist:
            raise NotFound('A station with this id does not exist.')

        station.delete()
        return Response({"STATION DELETED"}, status=status.HTTP_204_NO_CONTENT)
