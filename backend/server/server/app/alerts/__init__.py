from django.apps import AppConfig

class AlertsAppConfig(AppConfig):
    name = 'server.app.alerts'
    verbose_name = 'Alerts'

default_app_config = 'server.app.alerts.AlertsAppConfig'