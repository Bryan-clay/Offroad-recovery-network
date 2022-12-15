from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from . models import AppUser

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
def signup(request):
    try:
        AppUser.objects.create_user(username = request.data['email'], password = request.data['password'], email = request.data['email'])
        return JsonResponse({'success': True})
    except Exception as e:
        print(str(e))
        return JsonResponse({'success': False})

@api_view(['POST'])
def login(request):
    email = request.data['email']
    password = request.data['password']

    user = authenticate(username=email, password=password)




 


@api_view(['GET', 'POST'])
def account(request):

    if request.method == 'POST':
        try:
            AppUser.objects.create_user(username = request.data['email'], password = request.data['password'], email = request.data['email'])
            return JsonResponse({'success': True})
        except Exception as e:
            print(str(e))
            return JsonResponse({'success': False})

    elif request.method == 'GET':
        pass



    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)