from django.db import models

"""personel model with fields for personel name, surname, email, phone, address, department, position, salary, 
start_date, end_date, and image """


def personel_directory_path(self, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(self.id, filename)


class Personel(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    email = models.EmailField(max_length=40)
    phone = models.CharField(max_length=30)
    address = models.CharField(max_length=80)
    department = models.CharField(max_length=30)
    position = models.CharField(max_length=30)
    salary = models.CharField(max_length=30)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    image = models.ImageField(upload_to=personel_directory_path, blank=True, null=True)

    def __str__(self):
        return f"""{self.name} {self.surname}"""


class PersonalEducation(models.Model):

    school = models.CharField(max_length=30)

    def __str__(self):
        return f"""{self.school}"""


class PersonelRow(models.Model):
    personel = models.ForeignKey(Personel, on_delete=models.CASCADE, related_name='rows')
    """editable foreign key field for personel education"""
    school = models.ForeignKey(PersonalEducation, on_delete=models.CASCADE, blank=True, null=True)
    start_date = models.DateField( blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"""{self.personel} {self.school}"""
