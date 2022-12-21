from django.contrib import admin
from django.urls import path
from.import views

urlpatterns = [
    path('', views.home),
    path('recovery/', views.recovery),
    path('recovery/request/', views.request_recovery),
    path('account/', views.account),
    path('user/', views.log_in_page),
    path('user/login/', views.log_in),
    path('user/signup/', views.sign_up),
    path('user/logout/', views.log_out),
    path('current_user/', views.current_user),
    path('recoveries/', views.recoveries),
]