from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from . models import *
from django.core import serializers




# Create your views here.
def home(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
     

def archive(request):
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
def account(request):

    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)


@api_view(['GET'])
def current_user(request):
    if request.user.is_authenticated:
        data=serializers.serialize('json', [request.user], fields=['email'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user': None})