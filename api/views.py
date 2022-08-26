from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .serializers import *
from rest_framework.response import Response
import os

def users(request):
    return HttpResponse(f"{os.environ['test_env']}")

