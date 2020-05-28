from django.db import models
from django.contrib.auth.models import User


class Item(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
    owner = models.ForeignKey(User, related_name='items', on_delete=models.CASCADE, null=True)
