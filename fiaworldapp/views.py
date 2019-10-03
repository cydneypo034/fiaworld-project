from rest_framework import viewsets
from .serializers import ArtistsSerializer
from .models import Artists


class ArtistsViewSet(viewsets.ModelViewSet):
    queryset = Artists.objects.all()
    serializer_class = ArtistsSerializer 


# Create your views here.
