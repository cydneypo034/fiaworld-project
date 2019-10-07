from rest_framework import serializers
from .models import Artists, Movies, TalkShows

class ArtistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = ['id', 'name', 'biography', 'artist_image']


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['id', 'name', 'description', 'movie_image']

class TalkShowsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TalkShows
        fields = ['id', 'name', 'hosts', 'description', 'show_image']