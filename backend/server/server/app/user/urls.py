from django.urls import path
from .views import UserView

urlpatterns = [
    path('add', UserView.as_view({'post': 'create'})),
    path('login', UserView.as_view({'post': 'login'})),
    path('/admin/<int:id>', UserView.as_view({'get': 'isAdmin'})),
    path('/update/<int:id>', UserView.as_view({'put': 'putUser'})),
    path('/<int:id>', UserView.as_view({'get': 'getUser'})),
]