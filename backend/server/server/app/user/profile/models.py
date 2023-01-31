from django.db import models
from server.app.profile.models import Profile
# from server.app.core.models import TimestampedModel

class User(models.Model):

    profile_id =  models.ForeignKey('restaurants.Table', on_delete=models.DO_NOTHING)
    username = models.CharField('Username',max_length=15)
    password = models.CharField('Password')

    def __str__(self):
        return str(self.id)