import jwt
from django.conf import settings
from pyexpat import model
from rest_framework import serializers
from ..user.serializers import UserSerializer
from ..user.models import User
from ..slots.models import Slots
from ..bike.models import Bike
from .models import History
import json
from django.core.serializers import serialize

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('user_id', 'slot_id_rent','slot_id_left','bike_id','state')

    def to_history(data):
        return {
            'user_id': data.user_id,
            'slot_id_rent': data.slot_rent_id,
            'slot_id_left': data.slot_left_id,
            'bike_id': data.bike_id,
            'state': data.state
        }
    
    def GetHistoryByUser(context):
        user_decode = jwt.decode(context['token'], settings.SECRET_KEY)
        history = History.objects.all().filter(user_id=user_decode["id"])
        serializer = []

        for records in history.iterator():
            record = HistorySerializer.to_history(records)
            serializer.append(record)

        return serializer

    def Addrecord(context):
        user_decode = jwt.decode(context['user'], settings.SECRET_KEY)
        user_id = User.objects.get(id = user_decode["id"])
        slot_id = Slots.objects.get(id = context["slot_id"])
        bike_id = Bike.objects.get(id = context["bike_id"])

        history = History.objects.create(
            user_id = user_id,
            slot_rent_id = slot_id,
            slot_left_id = "",
            bike_id = bike_id,
            state = True
        )
        serialized_history = HistorySerializer.to_history(history)
        checker = False
        if not serialized_history:
            raise serializers.ValidationError("It ocurred an error in histoty")
        else: 
            checker = True
        return checker
    
    def Updaterecord(context):
        user_decode = jwt.decode(context['user'], settings.SECRET_KEY)
        user = User.objects.get(id = user_decode["id"])
        slot = Slots.objects.get(id = context["slot_id"])

        try:
            History.objects.filter(user_id=user,state=True).update(slot_id_left=slot)
        except Exception as e:
            return False
        return True
        