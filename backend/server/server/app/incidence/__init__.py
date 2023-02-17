from django.apps import AppConfig


class IncidenceAppConfig(AppConfig):
    name = 'server.app.incidence'
    verbose_name = 'Incidence'

default_app_config = 'server.app.incidence.IncidenceAppConfig'