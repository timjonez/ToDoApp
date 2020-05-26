from django.db import models


class Item(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField()
