from django.apps import AppConfig


class StationAppConfig(AppConfig):
    name = 'server.app.station'
    verbose_name = 'Station'

default_app_config = 'server.app.station.StationAppConfig'