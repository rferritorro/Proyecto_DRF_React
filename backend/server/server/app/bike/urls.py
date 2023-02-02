from django.urls import path
from .views import BikeView

urlpatterns = [
    path('', BikeView.as_view({'get': 'AllBikes'})),
    # path('_add', BikeView.as_view({'post': 'CreateStation'})),
]