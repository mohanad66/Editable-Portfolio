from rest_framework import serializers
from .models import *

class WebsiteCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteCard
        fields = "__all__"
class CarouselSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarouselImg
        fields = "__all__"
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactWay
        fields = "__all__"
class SkillsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"