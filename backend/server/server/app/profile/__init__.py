from django.apps import AppConfig


class ProfileAppConfig(AppConfig):
    name = 'server.app.profile'
    verbose_name = 'Profile'

default_app_config = 'server.app.profile.ProfileAppConfig'