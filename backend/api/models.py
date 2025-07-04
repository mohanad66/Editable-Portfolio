from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
import uuid

# Create your models here.


class WebsiteCard (models.Model):
    img = models.ImageField(blank=True ,upload_to="images/webCards")
    title = models.CharField(max_length=20 , blank=False)
    desc = models.CharField(max_length=200)
    link = models.URLField()
    
    def __str__(self):
        return self.title
class CarouselImg(models.Model):
    img = models.ImageField(blank=False,upload_to="images/Carousel")

class Skill(models.Model):
    title = models.CharField(max_length=20 , blank=False)
    percentage = models.IntegerField(
        blank=False ,  validators=[
            MinValueValidator(0),   # Ensures >= 0%
            MaxValueValidator(100), # Ensures <= 100%
        ])
    def __str__(self):
        return f"{self.title} - {self.percentage}%" 

class ContactWay(models.Model):
    title = models.CharField(max_length=20, blank=False)
    logo = models.ImageField(blank=False , upload_to="images/Logos")
    link = models.URLField()
    def __str__(self):
        return self.title
    