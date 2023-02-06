from django.apps import AppConfig


class RentingAppConfig(AppConfig):
    name = 'server.app.renting'
    verbose_name = 'Renting'

default_app_config = 'server.app.renting.RentingAppConfig'