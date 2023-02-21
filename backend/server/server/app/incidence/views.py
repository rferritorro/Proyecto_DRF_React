from rest_framework.response import Response
from rest_framework import status, viewsets
from .serializers import IncidenceSerializer


class IncidenceView(viewsets.GenericViewSet):

    def GetAllIncidences(self, request):
        serializer = IncidenceSerializer.getIncidences()
        return Response(serializer, status=status.HTTP_200_OK)

    def GetIncidenceProfile(self, request, id):
        serializer = IncidenceSerializer.GetIncidenceProfile(id=id)
        return Response(serializer, status=status.HTTP_200_OK)

    def PostIncidences(self, request):
        serializer = IncidenceSerializer.PostIncidences(context=request.data)
        return Response(serializer, status=status.HTTP_200_OK)

    def PutAnswer(self, request, id):
        serializer = IncidenceSerializer.putAnswer(data=request.data, id=id)
        return Response(serializer,status=status.HTTP_200_OK)

    def DeleteIncidence(self, request, id):
        serializer = IncidenceSerializer.deleteIncidence(id=id)
        return Response(serializer,status=status.HTTP_200_OK)