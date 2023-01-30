from django.db import models
# from server.app.core.models import TimestampedModel

class Profile(models.Model):

    avatar = models.CharField(max_length=300)

    def __str__(self):
        return str(self.id)