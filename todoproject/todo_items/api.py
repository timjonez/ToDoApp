from .models import Item
from rest_framework import viewsets, permissions
from .serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ItemSerializer

    def get_queryset(self):
        return self.request.user.items.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    