from django.urls import path
from .views import IncidenceView

urlpatterns = [
    path('/', IncidenceView.as_view({'get': 'GetAllIncidences'})),
    path('/getProfile/<int:id>', IncidenceView.as_view({'get': 'GetIncidenceProfile'})),
    path('/add', IncidenceView.as_view({'post': 'PostIncidences'})),
    path('/putAnswer/<int:id>', IncidenceView.as_view({'put': 'PutAnswer'})),
    path('/delete/<int:id>', IncidenceView.as_view({'delete': 'DeleteIncidence'})),

]