from django.db import models

# Create your models here.
class Phrase(models.Model):
    phrase = models.CharField(max_length=200)
    submitted_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):

        return self.phrase