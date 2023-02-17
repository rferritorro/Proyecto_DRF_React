from django.urls import path
from .views import StationView

urlpatterns = [
    path('', StationView.as_view({'get': 'GetStation'})),
    path('/<str:id>', StationView.as_view({'get': 'GetStationByID'})),
    path('_add', StationView.as_view({'post': 'CreateStation'})),
    path('_put/<int:id>', StationView.as_view({'put': 'UpdateStation'})),
    path('_delete/<int:id>', StationView.as_view({'delete': 'DeleteStation'})),
]