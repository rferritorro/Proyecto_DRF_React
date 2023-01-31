from django.urls import path
from .views import StationView

urlpatterns = [
    path('stations', StationView.as_view({'get': 'GetStation'})),
]