from pyexpat import model
from rest_framework import serializers
from rest_framework.exceptions import NotFound
from .models import User
from ..profile.models import Profile
import json
from django.shortcuts import get_object_or_404
from django.core.serializers import serialize
from django.contrib.auth.hashers import check_password
from ..profile.serializers import ProfileSerializer
from django.core.serializers import serialize
from django.contrib.auth.hashers import make_password

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
        # Create first profile to redirect with user
        user_exist=User.objects.filter(username=context['username']).exists()
        if user_exist:
            raise serializers.ValidationError("User '{}' has already existed".format(context['username']))
        else:
            # email create here
            new_profile = Profile.objects.create(
                avatar = context['avatar']
            )
            ProfileSerializer.to_profile(new_profile)
            profile = Profile.objects.get(id = new_profile.id)
            user = User.objects.create(
                username = context['username'],
                password = make_password(context['password']),
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