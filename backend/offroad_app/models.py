from django.db import models
from django.contrib.auth.models import (AbstractUser)

# Create your models here.
class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True
    )

    is_active = models.BooleanField(
    default=True,
    help_text = "Designates whether this user should be treated as active. Unselect this instead of deleting."
  )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =[]

    def __str__(self):
        return f'{self.email}, {self.password}'

# class AdminUser(AbstractUser):
#     email = models.EmailField(
#         verbose_name='email address',
#         max_length=255,
#         unique=True
#     )
#     zone = models.IntegerField
#     vehicle_description = models.CharField(max_length=200)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS =[]



class Recoveries(models.Model):
    name = models.CharField(max_length=100)
    location_longitude = models.FloatField(default=None)
    location_latitude = models.FloatField(default=None)
    description = models.TextField(default=None)
    recovery_type = models.CharField(max_length=60)
    vehicle_condition = models.CharField(max_length=60)
    recovery = models.DateField.auto_now_add=True
    assigned_volunteers = models.CharField(null=True, max_length=200) #TODO MANY TO MANY FIELD
    approved = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    user = models.ManyToManyField(AppUser)

    

    def __str__(self):
        return f'{self.name}, {self.recovery_type}, {self.vehicle_condition}'