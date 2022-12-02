from django.contrib import admin
from nested_inline.admin import NestedStackedInline, NestedModelAdmin
from .models import Personel, PersonalEducation, PersonelRow
from django.utils.html import format_html

class PersonalRowInline(NestedStackedInline):
    model = PersonelRow
    extra = 1
    max_num = 10
    fk_name = 'personel'


class PersonelAdmin(NestedModelAdmin):
    inlines = [PersonalRowInline]

    def image_tag(self, obj):
        return format_html('<img src="{}" style="max-width:50px; max-height:50px"/>'.format(obj.image.url))

    list_display = ('name', 'surname', 'email', 'start_date', 'end_date',)
    list_filter = ['name', 'surname', 'email', 'start_date', 'end_date']
    search_fields = ['name', 'surname', 'email', 'start_date', 'end_date']


admin.site.register(Personel, PersonelAdmin)
admin.site.register(PersonalEducation)