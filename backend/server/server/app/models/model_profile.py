from django.db import models
from server.app.core.models import TimestampedModel

class Profile(TimestampedModel,models.Model):

    avatar = models.CharField(max_length=300)

    def get_id(self):
        return str(self.id)