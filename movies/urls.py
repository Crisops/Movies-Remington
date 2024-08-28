from django.urls import path, include
from rest_framework import routers
from movies import views


router = routers.DefaultRouter()
router.register(r'movies', views.MoviesView, 'movies')

urlpatterns = [
    path('api/', include(router.urls))
]