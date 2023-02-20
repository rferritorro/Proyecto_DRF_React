from datetime import timedelta, datetime
from django.db import models
from server.app.profile.models import Profile
import jwt
from django.conf import settings
#from server.app.core.models import TimestampedModel

class User(models.Model):
    class Meta:
        managed = False
        db_table = "_user"
    username = models.CharField('username',max_length=15)
    password = models.CharField('password',max_length=200)
    admin = models.BooleanField('admin')
    profile =  models.ForeignKey(Profile,related_name="profile_id",on_delete=models.DO_NOTHING)

    USERNAME_FIELD = 'username'

    def getUsername(self):
        return self.username

    @property
    def token(self):
        return self.generate_token_jwt(60)
    
    @property
    def ref_token(self):
        return self.generate_token_jwt(10)
    
    def generate_token_jwt(self, time):
        dt = datetime.now() + timedelta(minutes=time)

        token = jwt.encode({
            'id': self.id,
            'username': self.username,
            'exp': int(dt.timestamp())  
        }, settings.SECRET_KEY, algorithm='HS256')

        return token.decode('utf-8')
    def __str__(self):
        return str(self.id)