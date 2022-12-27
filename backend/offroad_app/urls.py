
from django.contrib import admin
from django.urls import path
from.import views

urlpatterns = [
   
    path('login/', views.log_in),
    path('signup/', views.sign_up),
    path('logout/', views.log_out),
    path('current_user/', views.current_user),
    path('recoveries/get_all/', views.all_recoveries),
    path('request/', views.request_recovery),
    path('update_user/', views.update_user),
    path('approve_recovery/<int:id>/', views.approve_recovery),
    path('volunteer/', views.volunteer),
    path('get_assigned_volunteers', views.get_assigned_volunteers)
    
]




# path('user/', views.log_in_page),
# path('recoveries/', views.recoveries),
# path('account/', views.account),
# path('request_recovery/', views.recovery),
