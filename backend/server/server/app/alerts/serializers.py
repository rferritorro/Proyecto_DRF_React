
from pyexpat import model
from rest_framework import serializers
from .models import Alerts
from ..user.serializers import UserSerializer
from ..incidence.serializers import IncidenceSerializer
from ..renting.serializers import RentingSerializer
from django.core.serializers import serialize

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
            model = Alerts
            fields = ('__all__')
    
    def to_alerts(instance):
        return {
            'id': instance.id,
            'user_id': instance.user_id,
            'type': instance.type,
            'body': instance.body,
            'incidence_id': instance.incidence_id,
            'rent_id': instance.rent_id,
            'date': instance.date
        }

    def AllAlert():
        alert = Alerts.objects.all()
        serializer = []

        for alert in alert.iterator():
            serializer_alert = AlertSerializer.to_alerts(alert)
            user = UserSerializer.getUser(context={'id': serializer_alert["user_id"]} )
            serializer_alert["user_id"] = user
            serializer.append(serializer_alert)

        return serializer

    def GetAlertByUser(id):
        alert = Alerts.objects.filter(user_id = id).order_by('-id')
        serializer = []

        for alert in alert.iterator():
            serializer_alert = AlertSerializer.to_alerts(alert)
            user = UserSerializer.getUser(context={'id': serializer_alert["user_id"]} )
            serializer_alert["user_id"] = user
            incidence_id = serializer_alert["incidence_id"]
            renting_id = serializer_alert["rent_id"]
            if incidence_id:
                incidence = IncidenceSerializer.getIncidencesId(id=incidence_id)
                serializer_alert["incidence_id"] = incidence
            if renting_id:
                renting = RentingSerializer.getRentingId(id=renting_id)
                serializer_alert["rent_id"] = renting
            serializer.append(serializer_alert)

        return serializer

    def PostNewAlert(context, id):
        alert = Alerts.objects.create(
            user_id = id,
            type = context["type"],
            body = context["body"],
            incidence_id = context["incidence_id"],
            rent_id = context["rent_id"],
            date = context["date"]
        )
        alert_serializer = AlertSerializer.to_alerts(alert)
        return alert_serializer
