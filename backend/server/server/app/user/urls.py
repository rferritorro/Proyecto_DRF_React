from django.urls import path
from .views import UserView

urlpatterns = [
    path('_login', UserView.as_view({'post': 'create'})),
]