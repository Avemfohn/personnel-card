from collections import OrderedDict

from rest_framework import viewsets, filters
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from .models import Personel, PersonalEducation
from .serializers import PersonelSerializer, PersonalEducationSerializer

class CustomLimitOffsetPagination(LimitOffsetPagination):


    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.count),
            ('current_page', self.offset // self.limit + 1),
            ('offset', self.offset),
            ('next', self.get_next_link()),
            ('previous', self.get_previous_link()),
            ('results', data)
        ]))


class PersonelViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows personel to be viewed or edited. """
    queryset = Personel.objects.all().order_by('id')
    serializer_class = PersonelSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'surname', 'email', 'start_date', 'end_date']
    pagination_class = CustomLimitOffsetPagination


class PersonalEducationViewSet(viewsets.ModelViewSet):
    """API endpoint that allows personaleducation to be viewed or edited."""
    queryset = PersonalEducation.objects.all()
    serializer_class = PersonalEducationSerializer
    pagination_class = None

    def import_data(self, request):
        file



