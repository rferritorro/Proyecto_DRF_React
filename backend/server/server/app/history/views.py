
# from ..models import Profile
from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import HistorySerializer

class HistoryView(viewsets.GenericViewSet):

    def GetHistoryByUser(self, request):
        serializer_context = {
            'token': request.data["token_user"]
        }

        serializer = HistorySerializer.GetHistoryByUser(context=serializer_context)

        return Response(serializer, status=status.HTTP_200_OK)