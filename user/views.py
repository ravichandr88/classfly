from django.shortcuts import render,HttpResponse


def signup(request):
    return render(request, 'signup.html', {'title': 'Sign-Up'})

# def login(request):

def home(request):
    return render(request,'ClassFlyStatic/home.html',{})

def php(request):
    return render(request,'ClassFlyStatic/php.html',{})

def python(request):
    return render(request,'ClassFlyStatic/python.html',{})


def angular(request):
    return render(request,'ClassFlyStatic/angular.html',{})


def ds(request):
    return render(request,'ClassFlyStatic/ds.html',{})

def ml(request):
    return render(request,'ClassFlyStatic/ml.html',{})


def web(request):
    return render(request,'ClassFlyStatic/web.html',{})


def java(request):
    return render(request,'ClassFlyStatic/java.html',{})


def sql(request):
    return render(request,'ClassFlyStatic/sql.html',{})


def eh(request):
    return render(request,'ClassFlyStatic/eh.html',{})

from .forms import VideoUploadForm
def videoupload(request):
    if request.method == 'GET':
        return render(request, 'videouploader.html')
    
    form = VideoUploadForm(request.POST)
    print(form.is_valid())
    if form.is_valid():
        print(form.cleaned_data)
    else:
       print( form.errors.as_data)
    return HttpResponse(request.POST) 