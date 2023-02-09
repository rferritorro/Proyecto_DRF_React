from django.db import models
# from server.app.core.models import TimestampedModel

class Profile(models.Model):
    class Meta:
        managed = False
        db_table = "profile"
    
    avatar = models.CharField(max_length=300)
    email = models.CharField(max_length=300)

    def __str__(self):
        return str(self.id)