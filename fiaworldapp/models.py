from django.db import models

# Create your models here.
class Artists(models.Model):
    name         = models.CharField(max_length=30)
    biography    = models.CharField(max_length=100)
    artist_image = models.ImageField(upload_to="uploads/", blank=True)

class Movies(models.Model):
    name        = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    movie_image = models.ImageField(upload_to="uploads/", blank=True)

class TalkShows(models.Model):
    name        = models.CharField(max_length=30)
    description = models.CharField(max_length=100)
    show_image  = models.ImageField(upload_to="uploads/", blank=True)
    hosts       = models.CharField(max_length=50)


