
# from ..models import Profile
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import UserSerializer

class UserView(viewsets.GenericViewSet):

    def create(self, request):
        serializer_context = {
            'profile_id': request.data["profile_id"],
            'username': request.data["username"],
            'password': request.data["password"]
        }
        serializer = UserSerializer.create(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)
