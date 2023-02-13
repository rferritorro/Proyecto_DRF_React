from django.urls import path
from .views import ProfileView

urlpatterns = [
    path('/<int:id>', ProfileView.as_view({'get': 'GetProfile'})),
]