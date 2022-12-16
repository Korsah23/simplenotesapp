from django.db import models
from django.db.models.functions  import Lower


# Create your models here.
class UserNotes(models.Model):
    
    """Model that saves the user's title,body and time data was created or updated """
    title = models.CharField(max_length=250,unique=True) # unique=True makes title unique
    body = models.TextField(max_length=50000)
    timeCreatedOrUpdated = models.DateTimeField(auto_now=True)

    

