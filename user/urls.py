from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, include
from django.conf import settings
from . import views
from django.contrib.auth.views import LogoutView


urlpatterns = [
		path('signup',views.signup,name='signup'),
    path('video',views.videoupload),
    path('',views.home),
    path('php',views.php),
    path('eh',views.eh),
    path('ds',views.ds),
    path('sql',views.sql),
    path('java',views.java),
    path('web',views.web),
    path('ml',views.ml),
    path('angular',views.angular),
    path('python',views.python),
    path('home',views.home)
 
    ]