from django.urls import path
from .views import SlotView

urlpatterns = [
    path('', SlotView.as_view({'get': 'AllSlots'})),
    path('/station/<int:id>', SlotView.as_view({'get': 'GetSlotByStation'})),
    path('<int:id>',SlotView.as_view({'post': 'UpdateSlot'}))
    #path('/add', SlotView.as_view({'post': 'CreateSlot'})),
]