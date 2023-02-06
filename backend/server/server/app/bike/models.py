from django.db import models
from server.app.core.models import TimestampedModel
class Bike(models.Model):
    class Meta:
        managed = False
        db_table = "bike"
    state = models.IntegerField('state',default=0)

    def __str__(self):
        return str(self.id)