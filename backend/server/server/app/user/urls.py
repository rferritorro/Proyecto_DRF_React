from django.urls import path
from .views import UserView

urlpatterns = [
    path('add', UserView.as_view({'post': 'create'})),
]