from django.shortcuts import render
from django.urls import path

from . import views
from .views import index

urlpatterns = [
    path("", index, name="index"),
    path('success/', lambda request: render(request, 'success.html'), name='success'),

]