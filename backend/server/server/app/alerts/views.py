from rest_framework.response import Response
from rest_framework import viewsets, status
from .serializers import AlertSerializer


class AlertView(viewsets.GenericViewSet):
    def AllAlert(self, request):
        alerts = AlertSerializer.AllAlert()
        return Response(alerts, status=status.HTTP_200_OK)

    def AlertUser(self, request, id):
        alerts = AlertSerializer.GetAlertByUser(id= id)
        return Response(alerts, status=status.HTTP_200_OK)

    def AddAlert(self, request, id):
        alerts = AlertSerializer.PostNewAlert(context = request.data, id= id)
        return Response(alerts, status=status.HTTP_200_OK)
