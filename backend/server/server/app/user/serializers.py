from pyexpat import model
from rest_framework import serializers
from rest_framework.exceptions import NotFound
from .models import User
from ..profile.models import Profile
import json
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.core.serializers import serialize
from ..profile.serializers import ProfileSerializer
from django.core.serializers import serialize
from django.contrib.auth.hashers import make_password, check_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id, username, profile_id, password, email, admin')

    def to_user(data):
        return {
            'id': data.id,
            'profile_id': data.profile_id,
            'username': data.username,
            'password': data.password,
            'token': data.token,
            'ref_token': data.ref_token,
            'isAdmin': data.admin
        }
    
    def create(context):   
        # Create first profile to redirect with user
        user_exist=User.objects.filter(username=context['username']).exists()
        if user_exist:
            raise serializers.ValidationError("User '{}' has already existed".format(context['username']))
        else:
            # email create here
            new_profile = Profile.objects.create(
                avatar = context['avatar'],
                email = context['email']
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

    def getUser(context):
        user = User.objects.get(id = context["id"])
        serialized_user = UserSerializer.to_user(user)
        return serialized_user
    
    def putUser(data, context):
        User.objects.bulk_update([User(id=context, username=data["username"], password=make_password(data["password"]))],fields=["username", "password"])
        Profile.objects.bulk_update([Profile(id=data["profile_id"], email=data["email"], avatar=data["avatar"])],fields=["email", "avatar"])
        return "Correct"
        
    def loginSerializer(context):
        password = context['password']
        user = get_object_or_404(User, username=context['username'])
        
        if not check_password(password, user.password):
            raise Http404

        serialized_user = UserSerializer.to_user(user)
        return serialized_user

    def getAdmin(context):
        adminId = User.objects.get(id=context['id'])
        serialized_user = UserSerializer.to_user(adminId)
        if not serialized_user["isAdmin"]:
            raise serializers.ValidationError('UserAdmin is not foud')
        return serialized_user