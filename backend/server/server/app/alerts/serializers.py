
from pyexpat import model
from rest_framework import serializers
from .models import Alerts
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
        }
