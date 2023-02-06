from django.apps import AppConfig

class SlotsAppConfig(AppConfig):
    name = 'server.app.slots'
    verbose_name = 'Slots'

default_app_config = 'server.app.slots.SlotsAppConfig'