from django.urls import path
from .views import StationView

urlpatterns = [
    path('', StationView.as_view({'get': 'GetStation'})),
]