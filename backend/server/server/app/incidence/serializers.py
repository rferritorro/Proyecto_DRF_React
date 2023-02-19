from pyexpat import model
from rest_framework import serializers
from .models import Incidence
import json
from ..user.serializers import UserSerializer

class IncidenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incidence
        fields = ('__all__')

    def to_incidence(instance):
        return {
            'id': instance.id,
            'user_id': instance.user_id,
            'description': instance.description,
            'answer': instance.answer,
            'state': instance.state
        }
    
    def getIncidences():
        incidence = Incidence.objects.all()
        serializer = []

        for incidence in incidence.iterator():
            serializer_incidence = IncidenceSerializer.to_incidence(incidence)
            user = UserSerializer.getUser(context={'id': serializer_incidence["user_id"]} )
            serializer_incidence["user_id"] = user
            serializer.append(serializer_incidence)

        return serializer

    def GetIncidenceProfile(id):
        incidence = Incidence.objects.filter(user_id=id)
        serializer = []

        for incidence in incidence.iterator():
            serializer_incidence = IncidenceSerializer.to_incidence(incidence)
            serializer.append(serializer_incidence)

        return serializer

    def PostIncidences(context):
        incidence = Incidence.objects.create(
            user_id = context["user_id"],
            description = context["description"],
            answer = context["answer"],
            state = context["state"]
        )
        incidence_serializer = IncidenceSerializer.to_incidence(incidence)
        return incidence_serializer
    
    def putAnswer(data, id):
        Incidence.objects.bulk_update([Incidence(id=id, answer=data["answer"], state=data["state"])], fields=["answer", "state"])
        return "Correcto"