
# from ..models import Profile
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import UserSerializer

class UserView(viewsets.GenericViewSet):

    def create(self, request):
        serializer_context = {
            'profile': request.data["profile_id"],
            'username': request["username"],
            'password': request["password"]
        }

        serializer_data = request.data
        # return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer_context)
            # serializer = UserSerializer.getProfile(context=serializer_context)

            # return Response(serializer, status=status.HTTP_200_OK)