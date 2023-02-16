from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Renting
from .serializers import RentingSerializer

class RentingView(viewsets.GenericViewSet):
    def AllRenting(self, request):
        renting = Renting.objects.all()
        serializer = RentingSerializer(renting, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def AddRenting(self, request):
        serializer_context = {
            'user': request.data["user_id"],
            'station': request.data["station_id"],
            'slot': request.data['slot_id'],
            'bike': request.data['bike_id'],
            'date': request.data['date']
        }
        serializer = RentingSerializer.createRenting(context=serializer_context)
        if serializer:
            return Response(serializer, status=status.HTTP_200_OK)
        return Response(False, status=status.HTTP_200_OK)
    
    def RemoveRenting(self,request):
        serializer_context = {
            'token_bike': request.data["token_bike"],
            'slot_id': request.data['slot_id'],
        }
        serializer = RentingSerializer.removeRenting(context=serializer_context)
        return Response(serializer, status=status.HTTP_200_OK)

