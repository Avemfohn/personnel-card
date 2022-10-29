"""urls for rest_framework"""
from django.urls import path, include
from rest_framework import routers
from personel import viewsets

router = routers.DefaultRouter()
router.register('personel', viewsets.PersonelViewSet)
router.register('personaleducation', viewsets.PersonalEducationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

