from pyexpat import model
from rest_framework import serializers
from rest_framework.exceptions import NotFound
from .models import User
from ..profile.models import Profile
import json
from django.shortcuts import get_object_or_404
from django.core.serializers import serialize
from django.contrib.auth.hashers import check_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id, username, profile_id, password')

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
    
    def loginSerializer(context):
        password = context['password']
        user = get_object_or_404(User, username=context['username'])
        
        if not check_password(context['password'], user.password):
            return "Username or Password there aren't correct"

        return {
            'user' : {
                'username': user.username,
                'password': user.password,
            },
            'token': user.token
        }