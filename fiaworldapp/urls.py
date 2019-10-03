from rest_framework import routers
from . import views
from django.urls import include, path

router = routers.DefaultRouter()
router.register(r'artists', views.ArtistsViewSet)
router.register(r'movies', views.MoviesViewSet)


urlpatterns = [
    path('', include(router.urls))
]