"""urls for rest_framework"""
from django.urls import path, include
from rest_framework import routers
from .viewsets import PersonelViewSet, PersonalEducationViewSet

router = routers.DefaultRouter()
router.register('personel', PersonelViewSet)
router.register('personaleducation', PersonalEducationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

