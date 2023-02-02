from django.apps import AppConfig


class BikeAppConfig(AppConfig):
    name = 'server.app.bike'
    verbose_name = 'Bike'

default_app_config = 'server.app.bike.BikeAppConfig'