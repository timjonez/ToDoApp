from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('todo_items.urls')),
    path('', include('accounts.urls')),
]
