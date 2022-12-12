from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view

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

def signup(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

def login(request):
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)