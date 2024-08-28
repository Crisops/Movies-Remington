from django.db import models

# Create your models here.

class Movies(models.Model):
    title = models.CharField(max_length=100, verbose_name='title')
    description = models.TextField(verbose_name='description')
    imagen = models.ImageField( blank=True, null=True)

    def __str__(self):
        return self.title