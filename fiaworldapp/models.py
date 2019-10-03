from django.db import models

# Create your models here.
class Artists(models.Model):
    name = models.CharField(max_length=30)
    biography = models.CharField(max_length=100)
    artist_image = models.FileField(upload_to="uploads/", blank=True)

class Movies(models.Model):
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    movie_image = models.FileField(upload_to="uploads/", blank=True)
