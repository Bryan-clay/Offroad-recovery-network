from django.contrib import admin
from django.urls import path
from.import views

urlpatterns = [
    path('', views.home),
    path('request_recovery/', views.recovery),
    path('request/', views.request_recovery),
    path('account/', views.account),
    path('update_user/', views.update_user),
    path('user/', views.log_in_page),
    path('user/login/', views.log_in),
    path('user/signup/', views.sign_up),
    path('user/logout/', views.log_out),
    path('current_user/', views.current_user),
    path('recoveries/', views.recoveries),
    path('recoveries/get_all/', views.all_recoveries),
    path('api/account/<int:put_id>', views.user_info),
    
]