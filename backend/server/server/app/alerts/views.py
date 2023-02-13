from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializers import AlertSerializer
from .models import Alerts


class AlertView(viewsets.GenericViewSet):
    def AllAlert(self, request):
        alerts = Alerts.objects.all()
        serializer = AlertSerializer(alerts, many=True).data
        return Response(serializer, status=status.HTTP_200_OK)
