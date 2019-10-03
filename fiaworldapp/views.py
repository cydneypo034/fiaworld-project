from rest_framework import viewsets
from .serializers import ArtistsSerializer, MoviesSerializer
from .models import Artists, Movies


class ArtistsViewSet(viewsets.ModelViewSet):
    queryset = Artists.objects.all()
    serializer_class = ArtistsSerializer 

class MoviesViewSet(viewsets.ModelViewSet):
    queryset = Movies.objects.all()
    serializer_class = MoviesSerializer


# Create your views here.
