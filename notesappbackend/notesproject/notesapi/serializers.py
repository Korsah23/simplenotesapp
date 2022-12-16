from .models import UserNotes
from rest_framework import serializers

class UserNotesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserNotes
        fields = ["id", "title","timeCreatedOrUpdated","body"]