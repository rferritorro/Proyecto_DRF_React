from django.db import models
from server.app.station.models import Station
from server.app.bike.models import Bike
# from server.app.core.models import TimestampedModel

class Slots(models.Model):
    class Meta:
        managed = False
        db_table = "slots"
    station = models.ForeignKey(Station,related_name="station_id", on_delete=models.CASCADE,null = True)
    bike = models.OneToOneField(Bike,on_delete=models.CASCADE,null = True,blank=True)
    state = models.IntegerField('state',default=0)

    def __str__(self):
        return str(self.id)