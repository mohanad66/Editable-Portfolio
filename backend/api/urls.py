from django.urls import path
from .views import *
urlpatterns = [
    path("" , get_cards , name="get_cards"),
    path("carousel/" , get_carouselImg , name="get_carouselImg"),
    path("skills/" , get_skill , name="get_skill"),
    path("contacts/" , get_contact , name="get_contact"),

]