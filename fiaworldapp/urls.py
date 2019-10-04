from rest_framework import routers
from . import views
from django.urls import include, path

router = routers.DefaultRouter()
router.register(r'artists', views.ArtistsViewSet)
router.register(r'movies', views.MoviesViewSet)
router.register(r'shows', views.TalkShowsViewSet)


urlpatterns = [
    path('', include(router.urls))
]