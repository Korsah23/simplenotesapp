from rest_framework import routers
from .views import UserNotesView
from django.urls import path,include

router = routers.DefaultRouter()
router.register(r'notes',UserNotesView)

urlpatterns = [
    path("",include(router.urls)),
    path("api-auth", include("rest_framework.urls",namespace="rest_framework"))
]