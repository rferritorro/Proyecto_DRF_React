from django.db import models
from server.app.user.models import User
from server.app.station.models import Station
from server.app.slots.models import Slots
from server.app.bike.models import Bike



class Renting(models.Model):
    class Meta:
        managed = False
        db_table = "renting"
    user =  models.ForeignKey(User,related_name="rent_user_id",on_delete=models.DO_NOTHING)
    station =  models.ForeignKey(Station,related_name="rent_station_id",on_delete=models.DO_NOTHING)
    slot =  models.ForeignKey(Slots,related_name="rent_slot_id",on_delete=models.DO_NOTHING)
    bike =  models.ForeignKey(Bike,related_name="rent_bike_id",on_delete=models.DO_NOTHING)
    date = models.DateField()
    
    def __str__(self):
        return str(self.id)