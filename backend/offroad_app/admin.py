from django.contrib import admin
from .models import AppUser
from .models import Recoveries

# Register your models here.
class AppUserAdmin(admin.ModelAdmin):
    pass

class RecoveriesAdmin(admin.ModelAdmin):
    pass

admin.site.register(AppUser, AppUserAdmin)
admin.site.register(Recoveries, RecoveriesAdmin) 