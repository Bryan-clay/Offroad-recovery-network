from django.db import models

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField
    password = models.CharField(max_length=50)
    zone = models.IntegerField
    vehicle_description = models.CharField(max_length=200)

class Admin(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField
    password = models.CharField(max_length=50)
    zone = models.IntegerField
    vehicle_description = models.CharField(max_length=200)

class recoveries(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    location_longitude = models.IntegerField
    location_latitude = models.IntegerField
    description = models.TextField
    vehicle_condition = models.CharField(max_length=30)
    recovery_type = models.CharField(max_length=30)
    recovery_date = models.DateField
    assigned_volunteers = models.ManyToManyField