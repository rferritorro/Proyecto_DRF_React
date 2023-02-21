from pyexpat import model
from rest_framework import serializers
from .models import Incidence
import json
from rest_framework.exceptions import NotFound
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

    def getIncidencesId(id):
        incidence = Incidence.objects.get(id=id)
        incidence_serializer = IncidenceSerializer.to_incidence(incidence)
        return incidence_serializer

    def GetIncidenceProfile(id):
        incidence = Incidence.objects.filter(user_id=id)
        serializer = []

        for incidence in incidence.iterator():
            serializer_incidence = IncidenceSerializer.to_incidence(incidence)
            user = UserSerializer.getUser(context={'id': serializer_incidence["user_id"]} )
            serializer_incidence["user_id"] = user
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
        incidence_serializer = IncidenceSerializer.getIncidencesId(id=id)
        return incidence_serializer
    
    def deleteIncidence(id):
        try:
            incidence = Incidence.objects.get(id=id)
        except incidence.DoesNotExist:
            raise NotFound('Incidence not exist')

        incidence.delete()
        return "Correcto"