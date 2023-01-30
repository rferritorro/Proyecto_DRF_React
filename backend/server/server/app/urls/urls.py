from django.urls import path
from ..view.view_profile import ProfileView

urlpatterns = [
    path('profile/<int:id>', ProfileView.as_view({'get': 'GetProfile'})),
]