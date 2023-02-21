import jwt
from django.conf import settings
from pyexpat import model
from rest_framework import serializers
from ..station.serializers import StationSerializer
from ..slots.serializers import SlotSerializer
from ..bike.serializers import BikeSerializer
from ..user.models import User
from ..slots.models import Slots
from ..bike.models import Bike
from .models import History
import json
import datetime
from django.core.serializers import serialize

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('user_id', 'slot_id_rent','slot_id_left','bike_id','state','date_reserved')

    def to_history(data):
        return {
            'user_id': data.user_id,
            'slot_id_rent': data.slot_rent_id,
            'slot_id_left': data.slot_left_id,
            'bike_id': data.bike_id,
            'state': data.state,
            'date_reserved': data.date_reserved                                
        }
    
    def GetHistoryByUser(context):
        user_decode = jwt.decode(context['token'],settings.SECRET_KEY)
        history = History.objects.all().filter(user_id=user_decode["id"]).order_by('date_reserved').reverse()
        serializer = []
        for records in history.iterator():
            record = HistorySerializer.to_history(records)
            record["slot_id_rent"] = SlotSerializer.getSlot(id = record["slot_id_rent"])
            record["slot_id_rent"]["station_id"] = StationSerializer.getOneStation(id = record["slot_id_rent"]["station_id"])
            if record["slot_id_left"]:
                record["slot_id_left"] = SlotSerializer.getSlot(id = record["slot_id_left"])
                record["slot_id_left"]["station_id"] = StationSerializer.getOneStation(id = record["slot_id_left"]["station_id"])
            else:
                record["slot_id_left"] = False
            record["bike_id"] =BikeSerializer.getBike(id = record["bike_id"])
            serializer.append(record)
        return serializer

    def Addrecord(context):
        history = History.objects.create(
            user_id = context["user_id"].id,
            slot_rent_id = context["slot_id"].id,
            slot_left_id = "",
            bike_id = context["bike_id"].id,
            state = True,
            date_reserved = datetime.date.today()
        )
        serialized_history = HistorySerializer.to_history(history)
        checker = False
        if not serialized_history:
            raise serializers.ValidationError("It ocurred an error in histoty")
        else: 
            checker = True
        return checker
    
    def Updaterecord(context):
        try:    
            History.objects.filter(user_id=context["user_id"],state=True).update(slot_left_id=context["slot_id"],state=False)
        except Exception as e:
            return e
        return True
        