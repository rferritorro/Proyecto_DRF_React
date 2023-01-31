from django.apps import AppConfig


class UserAppConfig(AppConfig):
    name = 'server.app.user'
    label = 'user'
    verbose_name = 'User'

default_app_config = 'server.app.user.UserAppConfig'