from django.apps import AppConfig


class HistoryAppConfig(AppConfig):
    name = 'server.app.history'
    verbose_name = 'History'

default_app_config = 'server.app.history.HistoryAppConfig'