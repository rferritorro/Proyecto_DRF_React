from pyexpat import model
from rest_framework import serializers
from .models import User
from ..profile.models import Profile
import json
from django.core.serializers import serialize

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id,profile_id,username,password')

    def to_user(data):
        return {
            'profile_id': data.profile_id,
            'username': data.username,
            'password': data.password
        }
    
    def create(context):
        profile = Profile.objects.get(id = context['profile_id'])
        user = User.objects.create(
            username = context['username'],
            password = context['password'],
            profile = profile
        )
        serialized_user = UserSerializer.to_user(user)
        return serialized_user