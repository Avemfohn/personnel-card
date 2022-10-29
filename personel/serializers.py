"""serializers.py"""
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from .models import Personel, PersonalEducation, PersonelRow


class PersonalEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalEducation
        fields = '__all__'


class PersonelRowSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonelRow
        fields = '__all__'


class PersonelSerializer(WritableNestedModelSerializer):
    rows = PersonelRowSerializer(many=True, read_only=True)

    class Meta:
        model = Personel
        fields = '__all__'

