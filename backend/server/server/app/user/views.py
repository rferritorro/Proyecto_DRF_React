
# from ..models import Profile
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import UserSerializer
from ..profile.serializers import ProfileSerializer


class UserView(viewsets.GenericViewSet):

    def create(self, request):
        serializer_context = {
            'avatar': request.data["avatar"],
            'email': request.data["email"],
            'username': request.data["username"],
            'password': request.data["password"]
        }
        serializer = UserSerializer.create(context=serializer_context)
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer["profile_id"]})
        serializer["profile_id"] = serializer_profile
        return Response(serializer, status=status.HTTP_200_OK)

    def getUser(self, request, *args , **kwargs):

        serializer_user = UserSerializer.getUser(context={'id': kwargs["id"]})
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer_user["profile_id"]})
        serializer_user["profile_id"] = serializer_profile

        return Response(serializer_user, status=status.HTTP_200_OK)

    def putUser(self, request, *args , **kwargs):
        serializer_user = UserSerializer.putUser(data=request.data, context=kwargs["id"])

        return Response(serializer_user, status=status.HTTP_200_OK) 

    def login(self, request):
        serializer_login = {
            'username': request.data["username"],
            'password': request.data["password"]
        }
        serializer = UserSerializer.loginSerializer(context=serializer_login)
        serializer_profile = ProfileSerializer.getProfile(context={'id': serializer["profile_id"]})
        serializer["profile_id"] = serializer_profile

        return Response(serializer, status=status.HTTP_200_OK)

    def isAdmin(self, request, *args, **kwargs):
        serializer_context = {
            'id': kwargs["id"]
        }

        serializer = UserSerializer.getAdmin(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)