from django.db import models
from server.app.slots.models import Slots
from server.app.user.models import User
from server.app.bike.models import Bike
# from server.app.core.models import TimestampedModel

class History(models.Model):
    class Meta:
        managed = False
        db_table = "history"
    
    user = models.ForeignKey(User,related_name="history_user_id",on_delete=models.DO_NOTHING)
    slot_rent = models.ForeignKey(Slots,related_name="slot_id_rent",on_delete=models.DO_NOTHING)
    slot_left = models.ForeignKey(Slots,related_name="slot_id_left",on_delete=models.DO_NOTHING,blank=True)
    bike = models.ForeignKey(Bike,related_name="bike",on_delete=models.DO_NOTHING)
    state = models.BooleanField()

    def __str__(self):
        return str(self.id)