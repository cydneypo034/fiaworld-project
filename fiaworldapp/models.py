from django.db import models

# Create your models here.
class Artists(models.Model):
    name = models.CharField(max_length=30)
    biography = models.CharField(max_length=100)
    artistimage = models.FileField(upload_to="uploads/", blank=True)

