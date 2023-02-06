from rest_framework.response import Response
from rest_framework import viewsets, status
from .models import Renting
from .serializers import RentingSerializer

class RentingView(viewsets.GenericViewSet):
    def AllRenting(self, request):
        renting = Renting.objects.all()
        serializer = RentingSerializer(renting, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
