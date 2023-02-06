from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Renting
from .serializers import RentingSerializer

class RentingView(viewsets.GenericViewSet):
    def AllRenting(self, request):
        serializer = RentingSerializer.AllRenting()
        print(serializer)
        return Response(serializer,status=status.HTTP_200_OK)
