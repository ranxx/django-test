from django.db import models

# Create your models here.
class cal(models.Model):
    valueA = models.CharField(max_length=10)
    valueB = models.CharField(max_length=10)
    result = models.CharField(max_length=10)