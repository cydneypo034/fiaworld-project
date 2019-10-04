from rest_framework import serializers
from .models import Artists, Movies, TalkShows

class ArtistsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = ['name', 'biography', 'artist_image']


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields = ['name', 'description', 'movie_image']

class TalkShowsSerializer(serializers.ModelSerializer):
    class Meta:
        model = TalkShows
        fields = ['name', 'description', 'show_image']