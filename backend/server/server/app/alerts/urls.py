from django.urls import path
from .views import AlertView

urlpatterns = [
    path('', AlertView.as_view({'get': 'AllAlert'})),
    path('_AlertUser/<int:id>', AlertView.as_view({'get': 'AlertUser'})),
    path('_AddAlert/<int:id>', AlertView.as_view({'post': 'AddAlert'})),
]