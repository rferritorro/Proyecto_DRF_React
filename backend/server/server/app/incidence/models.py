from django.db import models
from server.app.user.models import User
# from server.app.core.models import TimestampedModel

class Incidence(models.Model):
    class Meta:
        managed = False
        db_table = "incidence"
    
    user = models.ForeignKey(User,related_name="user_id",on_delete=models.DO_NOTHING)
    description = models.CharField(max_length=150)
    answer = models.CharField(max_length=150)
    state = models.IntegerField()

    def __str__(self):
        return str(self.id)