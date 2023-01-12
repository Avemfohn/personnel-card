"""serializers.py"""
from django.core.exceptions import ObjectDoesNotExist
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from rest_framework.relations import SlugRelatedField

from .models import Personel, PersonalEducation, PersonelRow
from drf_extra_fields.relations import PresentablePrimaryKeyRelatedField


class CreatableSlugRelatedField(serializers.SlugRelatedField):
    def to_internal_value(self, data):
        try:
            return self.get_queryset().get(**{self.slug_field: data})
        except ObjectDoesNotExist:
            return self.get_queryset().create(**{self.slug_field: data})  # to create the object
        except (TypeError, ValueError):
            self.fail('invalid')
class PersonalEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalEducation
        fields = '__all__'


class PersonelRowSerializer(serializers.ModelSerializer):

    # school = PresentablePrimaryKeyRelatedField(
    #     queryset=PersonalEducation.objects.all(),
    #     presentation_serializer=PersonalEducationSerializer,
    #     allow_null=True,
    #     required=False
    # )

    school=CreatableSlugRelatedField(
        queryset=PersonalEducation.objects.all(),
        slug_field='school',
        allow_null=True,
        required=False
    )
    class Meta:
        model = PersonelRow
        fields = 'school', 'school_start_date', 'school_end_date'



class PersonelSerializer(WritableNestedModelSerializer):
    rows = PersonelRowSerializer(many=True)
    image = Base64ImageField(required=False)

    class Meta:
        model = Personel
        fields = '__all__'

