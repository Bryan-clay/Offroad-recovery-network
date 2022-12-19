from django.contrib import admin
from django.urls import path
from.import views

urlpatterns = [
    path('', views.home),
    path('archive/', views.archive),
    path('recovery/', views.recovery),
    path('account/', views.account),
    path('account/login/', views.log_in),
    path('account/signup/', views.sign_up),
    path('account/logout/', views.log_out),
    path('account/current_user/', views.current_user)
]