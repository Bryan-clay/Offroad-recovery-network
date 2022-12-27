from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from . models import *
from django.core import serializers
from datetime import datetime
from django.core.serializers import serialize
from django.core.validators import EmailValidator
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404




# Create your views here.
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
     

@api_view(['POST'])
def sign_up(request):
    print(request.data)
    email=request.data['email']
    password=request.data['password']
    print(email)
    print(password)

    try:
        AppUser.objects.create_user(username=email, email=email, password = password)
        return JsonResponse({'signup': True})
    except Exception as e:
        print(str(e))
        return JsonResponse({'signup': False})


@api_view(['POST'])
def log_in(request):
    print(request.data)
 
    email = request.data['email']
    password = request.data['password']

    user = authenticate(username=email, password=password)
    print(user)

    if user is not None and user.is_active:
        print("Active")
        try:
            login(request._request, user)
            print("Log in = TRUE")
            return JsonResponse({'login': True})
        except Exception as e:
            print(str(e))
            print("Login not successful")
            return JsonResponse({'login': False, 'reason':'login failed'})
    else:
        print('User not active')
        return JsonResponse({'success': False, 'reason':'user is not active'})


@api_view(['GET'])
def current_user(request):
    user = request.user
    if user.is_authenticated:
        data = {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
            'is_staff': user.is_staff,

        }

        return JsonResponse(data)
    else:
        return JsonResponse({'user': None})



@api_view(['POST'])
def log_out(request):
    try:
        logout(request)
        print('sign out = TRUE')
        
        return JsonResponse({'logout': True})

    except Exception as e:
        print('sign out = FALSE')
        return JsonResponse({'logout': False, 'reason': 'unable to logout'})


@api_view(['POST'])
def request_recovery(request):
    ## ASSIGN A USER TO THE ENTRY
    # user = request.data['user']
    name = request.data['name']
    location_longitude = request.data['loc_lon']
    location_latitude = request.data['loc_lat']
    description = request.data['description']
    recovery_type = request.data['recovery_type']
    vehicle_condition = request.data['vehicle_condition']
    print(f"{name}, {location_longitude}, {location_latitude}, {description}, {recovery_type}, {vehicle_condition}")
    try:
        Recoveries.objects.create(name=name, location_longitude=location_longitude, location_latitude = location_latitude, description=description, recovery_type=recovery_type, vehicle_condition=vehicle_condition)
        return JsonResponse({'recovery request': True})
    except Exception as e:
        print(str(e))
        return JsonResponse({'recovery request': False})


@api_view(['GET'])
def all_recoveries(rquest):
    list_of_recoveries = list(Recoveries.objects.all().values())
    # print(list_of_recoveries)
    # serialized_data = serialize("json", list_of_recoveries)
    # print(serialized_data)
    return JsonResponse({'all_recoveries': list_of_recoveries})

@api_view(['GET'])
def user_info(request, email):
    print(request)
    user_information = list(AppUser.objects.filter(email = email).values())
    print(user_information)

    return JsonResponse({'response': True})

@api_view(['PUT', 'DELETE'])
def update_user(request):
    print(request.data)
    
    if request.method == 'PUT':
        User = get_user_model()
        user = get_object_or_404(User, pk=request.user.pk)
        email = request.data['email']
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        print(first_name)
        print(last_name)
        print(email)
        if email != "":
            validator = EmailValidator()
            validator(email)
            user.email = email
        if first_name != "":
            user.first_name = first_name
        if last_name != "":
            user.last_name = last_name
        user.save()
        return JsonResponse({'update_info': True})
    # if request.method == 'DELETE':
    #     AppUser.objects.get(id = id).delete()
    #     return JsonResponse({'delete': True})


@api_view(['PUT', 'DELETE'])
def edit_recovery(request, id):
    print(request)
    if request.method == 'PUT':
        try:
            data = get_object_or_404(Recoveries, id=id)
            data.approved = True
            data.save()
            return JsonResponse({'approved', True})
        except Exception as e:
            return JsonResponse({'approved': True})

    if request.method == 'DELETE':
        Recoveries.objects.get(id = id).delete()
        return JsonResponse({'delete': True})


@api_view(['PUT'])
def volunteer(request):
    print(request.data)
    try:
        usr_id = request.data['usr_id']
        recov_id = request.data['recov_id']
        print(usr_id)
        recovery = get_object_or_404(Recoveries, id=recov_id)
        user = get_object_or_404(AppUser, id=usr_id)
        print(user)
        # print(user_email)
        recovery.assigned_volunteers.add(user)
        return JsonResponse({'assigned volunteer': True})
    except Exception as e:
        return JsonResponse({'assignment failed': e})
    

def get_assigned_volunteers(request):
    volunteers = Recoveries.assigned_volunteers.values_list('email', flat=True)
    return JsonResponse({'return volunteers': True})

@api_view(["DELETE"])
def delete_account(request):
    id = request.data['id']
    logout(request)
    if request.method == 'DELETE':
        AppUser.objects.get(id = id).delete()
        return JsonResponse({'delete': True})
