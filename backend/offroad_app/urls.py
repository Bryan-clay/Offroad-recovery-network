from django.contrib import admin
from django.urls import path
from.import views

urlpatterns = [
    path('', views.home),
    path('archive/', views.archive),
    path('recovery/', views.recovery),
    path('account/', views.account),
    # path('login/', views.login),
    # path('signup/', views.signup),
    path('account/login/', views.login),
    path('account/signup/', views.signup)
]