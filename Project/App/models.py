from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.contrib.auth import get_user_model

User = get_user_model()

class CustomUser(AbstractUser):
    username=None
    phone = models.CharField(max_length=10, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    name = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username
