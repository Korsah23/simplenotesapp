from .models import UserNotes
from rest_framework import viewsets
from .serializers import UserNotesSerializer

# Create your views here.

"""API endpoint for the userNotes models 
    it allows users to view this model
"""
class UserNotesView(viewsets.ModelViewSet):
    queryset = UserNotes.objects.all()
    serializer_class = UserNotesSerializer