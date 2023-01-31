from django.db import models
from server.app.core.models import TimestampedModel

class Station(models.Model):
    class Meta:
        managed = False
        db_table = "station"
    name = models.CharField('name',max_length=100)
    lat = models.DecimalField('lat', max_digits=15, decimal_places=10)
    long = models.DecimalField('long', max_digits=15, decimal_places=10)
    bikes = models.IntegerField('bikes')

    def __str__(self):
        return str(self.id)