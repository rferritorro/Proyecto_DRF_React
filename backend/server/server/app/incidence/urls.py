from django.urls import path
from .views import IncidenceView

urlpatterns = [
    path('/', IncidenceView.as_view({'get': 'GetAllIncidences'})),
    path('/putAnswer/<int:id>', IncidenceView.as_view({'put': 'PutAnswer'})),
]