from django.db import models
from server.app.user.models import User
from server.app.incidence.models import Incidence
from server.app.renting.models import Renting
# from server.app.core.models import TimestampedModel

class Alerts(models.Model):
    class Meta:
        managed = False
        db_table = "alerts"

    user = models.ForeignKey(User,related_name="alert_user_id", on_delete=models.CASCADE,null = True)
    type = models.IntegerField('type',default=0)
    body = models.CharField('body',max_length=150)
    incidence = models.ForeignKey(Incidence,related_name="incidence_id", on_delete=models.CASCADE,null = True)
    rent = models.ForeignKey(Renting,related_name="rent_id", on_delete=models.CASCADE,null = True)
    date = models.DateTimeField('date',max_length=150)

    def __str__(self):
        return str(self.id)