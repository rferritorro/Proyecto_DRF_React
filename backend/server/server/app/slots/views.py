from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Slots
from .serializers import SlotSerializer

class SlotView(viewsets.GenericViewSet):
    def GetSlots(self, request):
        sql = 'SELECT * FROM slots'
        qs = Slots.objects.raw(sql)
        qs_json = SlotSerializer(qs, many=True).data
        return Response(qs_json, content_type='application/json')
    # def CreateStation(self, request):
    #     serializer_data = request.data
    #     StationSerializer.CreateStation(data=serializer_data)
    #     # serializer = self.serializer_class(
    #     #     data = serializer_data
    #     # )
    #     return Response({"ADDED NEW STATION SUCCESFULL"}, status=status.HTTP_201_CREATED)
