from django.http import HttpResponse


def index(request):
    return HttpResponse("mtaona moto this time round ~~!")