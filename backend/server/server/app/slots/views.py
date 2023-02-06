from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializers import SlotSerializer

class SlotView(viewsets.GenericViewSet):
    def AllSlots(self, request):
        serializer = SlotSerializer.AllSlots()
        return Response(serializer, status=status.HTTP_200_OK)
    # def CreateStation(self, request):
    #     serializer_data = request.data
    #     StationSerializer.CreateStation(data=serializer_data)
    #     # serializer = self.serializer_class(
    #     #     data = serializer_data
    #     # )
    #     return Response({"ADDED NEW STATION SUCCESFULL"}, status=status.HTTP_201_CREATED)
