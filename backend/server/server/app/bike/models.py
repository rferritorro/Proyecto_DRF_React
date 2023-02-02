from django.db import models
from server.app.core.models import TimestampedModel
from server.app.slots.models import Slots
class Bike(models.Model):
    class Meta:
        managed = False
        db_table = "bike"
    state = models.IntegerField('state',default=0)
    slot = models.ForeignKey(Slots,related_name="slot_id", on_delete=models.CASCADE,null = True)

    def __str__(self):
        return str(self.id)