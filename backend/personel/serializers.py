"""serializers.py"""
from django.core.exceptions import ObjectDoesNotExist
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers
from drf_extra_fields.fields import Base64ImageField
from drf_spectacular.extensions import OpenApiSerializerFieldExtension
from drf_spectacular.settings import spectacular_settings

from .models import Personel, PersonalEducation, PersonelRow
from drf_extra_fields.relations import PresentablePrimaryKeyRelatedField

class PresentablePrimaryKeyRelatedFieldSchemaExtension(OpenApiSerializerFieldExtension):
    target_class = PresentablePrimaryKeyRelatedField
    def map_serializer_field(self, auto_schema, direction):
        if direction == "response" and spectacular_settings.COMPONENT_SPLIT_REQUEST:
            return auto_schema._map_serializer_field(
                self.target.presentation_serializer, direction, bypass_extensions=True
            )
        else:
            return auto_schema._map_serializer_field(
                self.target, direction, bypass_extensions=True
            )
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

