from django.db import models
from server.app.core.models import TimestampedModel

class Slots(models.Model):

    station_id = models.IntegerField('station_id')
    #bikes = models.IntegerField('bikes.slots', blank=True)

    def __str__(self):
        return str(self.id)