from django.db import models
from server.app.profile.models import Profile
# from server.app.core.models import TimestampedModel

class User(models.Model):
    class Meta:
        managed = False
        db_table = "_user"
    profile_id =  models.ForeignKey('profile.Profile', on_delete=models.DO_NOTHING)
    username = models.CharField('Username',max_length=15)
    password = models.CharField('Password',max_length=150)

    def __str__(self):
        return str(self.id)