from django.urls import path
from .views import SlotView

urlpatterns = [
    path('', SlotView.as_view({'get': 'GetSlots'})),
    #path('/add', SlotView.as_view({'post': 'CreateSlot'})),
]