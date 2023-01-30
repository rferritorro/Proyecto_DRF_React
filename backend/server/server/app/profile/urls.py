from django.urls import path
from .views import ProfileView

urlpatterns = [
    path('profiles/<int:id>', ProfileView.as_view({'get': 'GetProfile'})),
]