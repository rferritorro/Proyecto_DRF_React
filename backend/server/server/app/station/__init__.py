from django.apps import AppConfig


class StationAppConfig(AppConfig):
    name = 'server.app.station'
    label = 'station'
    verbose_name = 'Station'

default_app_config = 'server.app.user.StationAppConfig'