from rest_framework import viewsets
from .serializer import MovieSerializer
from .models import Movies

# Create your views here.
class MoviesView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movies.objects.all()