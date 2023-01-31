from pyexpat import model
from rest_framework import serializers
from ..user.models import Profile
import json
from django.core.serializers import serialize

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('id','avatar')

    def to_profile(data):
        return {
            'id': data.id,
            'avatar': data.avatar,
        }
    
    def getProfile(context):
        queryset = Profile.objects.filter(id = context['id']) or False
        if not queryset:
            raise serializers.ValidationError('Profile doesnt found')
        serialized_profile = []

        for profile in queryset.iterator():
            ser_profile = ProfileSerializer.to_profile(profile)
            serialized_profile.append(ser_profile)

        return serialized_profile