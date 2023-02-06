from django.urls import path
from .views import RentingView

urlpatterns = [
    path('', RentingView.as_view({'get': 'AllRenting'})),
]