from django.db import models


# Create your models here.
class Employee(models.Model):

    name = models.CharField(max_length=200)
    address = models.CharField(max_length=400)
    role = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    salary = models.PositiveIntegerField()
