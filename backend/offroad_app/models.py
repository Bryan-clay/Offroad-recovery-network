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



# class recoveries(models.Model):
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     location_longitude = models.IntegerField
#     location_latitude = models.IntegerField
#     description = models.TextField
#     vehicle_condition = models.CharField(max_length=30)
#     recovery_type = models.CharField(max_length=30)
#     recovery_date = models.DateField
#     assigned_volunteers = models.CharField(max_length=200) #TODO MANY TO MANY FIELD