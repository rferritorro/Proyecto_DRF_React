from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Bike
from .serializers import BikeSerializer

class BikeView(viewsets.GenericViewSet):
    def AllBikes(self, request):
        serializer = BikeSerializer.AllBikes()
        return Response(serializer, status=status.HTTP_200_OK)

    # def CreateStation(self, request):
    #     serializer_data = request.data
    #     StationSerializer.CreateStation(data=serializer_data)
    #     # serializer = self.serializer_class(
    #     #     data = serializer_data
    #     # )
    #     return Response({"ADDED NEW STATION SUCCESFULL"}, status=status.HTTP_201_CREATED)
    # def UpdateStation(self, request):
    #     serializer_data = request.data
    #     StationSerializer.UpdateStation(data=serializer_data)
    #     # serializer = self.serializer_class(
    #     #     data = serializer_data
    #     # )
    #     return Response({"STATION UPDATED SUCCESFULL"}, status=status.HTTP_201_CREATED)
