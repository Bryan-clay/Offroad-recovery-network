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
     

def recovery(request):
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
        # print(request.user)

        # data=serializers.serialize('json', [request.user], fields=['id', 'email', 'is_superuser', 'is_staff', 'First_name', 'last_name'])
        
        # print(data)
        # return HttpResponse(data)
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


@api_view(['GET', 'POST'])
def log_in_page(request):

    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)





@api_view(['GET', 'POST'])
def account(request):

    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

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


def recoveries(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


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
        if email is not "":
            validator = EmailValidator()
            validator(email)
            user.email = email
        if first_name is not "":
            user.first_name = first_name
        if last_name is not "":
            user.last_name = last_name
        user.save()
        return JsonResponse({'update_info': True})







        # if request.data['firstName'] is not None:
        #     f_name = request.data['firstName']
        #     user_id.first_name = f_name
        # if request.data['lastName'] is not None:
        #     l_name = request.data['laststName']
        #     user_id.last_name = l_name
        # if request.data['email'] is not None:
        #     try:
        #         validate_email(request.data['email'])
        #         new_email = request.data['email']
        #         user_id.email = new_email
        #         user_id.save()
        #         return JsonResponse({'user update': True})


        #     except Exception as e:
        #         return JsonResponse({'email validation': False})
