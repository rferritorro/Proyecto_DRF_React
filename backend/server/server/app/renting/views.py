from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Renting

from .serializers import RentingSerializer

class RentingView(viewsets.GenericViewSet):
    def AllRenting(self, request):
        renting = RentingSerializer.allStations()
        return Response(renting, status=status.HTTP_200_OK)
