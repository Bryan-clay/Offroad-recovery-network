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




class Recoveries(models.Model):
    name = models.CharField(max_length=100)
    location_longitude = models.FloatField(default=None)
    location_latitude = models.FloatField(default=None)
    description = models.TextField(default="")
    recovery_type = models.CharField(max_length=60)
    vehicle_condition = models.CharField(max_length=60)
    recovery_date = models.DateTimeField(auto_now_add=True)
    assigned_volunteers = models.ManyToManyField(AppUser, related_name='assigned_recoveries')
    approved = models.BooleanField(default=False)
    status = models.CharField(max_length=12, default="in-progress")
    user = models.ManyToManyField(AppUser)
    after_action_report = models.TextField(default="")

    

    def __str__(self):
        return f'{self.name}, {self.recovery_type}, {self.vehicle_condition}'