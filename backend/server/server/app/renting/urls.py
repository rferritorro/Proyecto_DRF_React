from django.urls import path
from .views import RentingView

urlpatterns = [
    path('', RentingView.as_view({'get': 'AllRenting'})),
    path('add', RentingView.as_view({'post': 'AddRenting'})),
    path('leave', RentingView.as_view({'post': 'RemoveRenting'})),
]