from rest_framework import viewsets
from .serializers import ArtistsSerializer, MoviesSerializer, TalkShowsSerializer
from .models import Artists, Movies, TalkShows


class ArtistsViewSet(viewsets.ModelViewSet):
    queryset = Artists.objects.all()
    serializer_class = ArtistsSerializer 

class MoviesViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer

class TalkShowsViewSet(viewsets.ModelViewSet):
    queryset = TalkShows.objects.all()
    serializer_class = TalkShowsSerializer
# Create your views here.
