"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('server/profile', include('server.app.profile.urls')),
    path('server/user', include('server.app.user.urls')),
    path('server/station', include('server.app.station.urls')),
    path('server/slots', include('server.app.slots.urls')),
    path('server/bike', include('server.app.bike.urls')),
    path('server/renting', include('server.app.renting.urls')),
    path('server/history', include('server.app.history.urls')),
    path('server/alerts', include('server.app.alerts.urls')),
    path('server/incidence', include('server.app.incidence.urls'))
]
