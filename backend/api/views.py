from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializer import *
# Create your views here.


@api_view(["GET"])

def get_cards(request):
    cards = WebsiteCard.objects.all()
    serializerData = WebsiteCardSerializer(cards , many=True).data
    return Response(serializerData)
@api_view(["GET"])

def get_carouselImg(request):
    carousel = CarouselImg.objects.all()
    serializerData = CarouselSerializer(carousel , many=True).data
    return Response(serializerData)
@api_view(["GET"])

def get_contact(request):
    contact = ContactWay.objects.all()
    serializerData = ContactSerializer(contact , many=True).data
    return Response(serializerData)
@api_view(["GET"])

def get_skill(request):
    skills = Skill.objects.all()
    serializerData = SkillsSerializer(skills , many=True).data
    return Response(serializerData)