from django.urls import path
from ..view.view_profile import ProfileView
from ..view.view_stations import StationView

urlpatterns = [
    path('profile/<int:id>', ProfileView.as_view({'get': 'GetProfile'})),
    path('stations', StationView.as_view({'get': 'GetStation'})),
]