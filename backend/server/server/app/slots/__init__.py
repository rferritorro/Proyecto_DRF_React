from django.apps import AppConfig


class SlotAppConfig(AppConfig):
    name = 'server.app.slots'
    label = 'slot'
    verbose_name = 'Slot'

default_app_config = 'server.app.slots.SlotAppConfig'