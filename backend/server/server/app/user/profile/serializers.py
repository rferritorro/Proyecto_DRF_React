from pyexpat import model
from rest_framework import serializers
from .models import User
import json
from django.core.serializers import serialize

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id,profile_id,username,password')

    def to_user(data):
        return {
            'id': data.id,
            'profile_id': data.profile_id,
            'username': data.username,
            'password': data.password
        }
    
    def create(self):
        user = User.objects.create(
            profile_id = self.context['profile_id'],
            username = self.context['username'],
            password = self.context['password'],
        )

        return 