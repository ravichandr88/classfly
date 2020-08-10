from django.db import models

# Create your models here.


class VideoUpload(models.Model):
    title = models.CharField(max_length=200)
    video_link = models.CharField(max_length=1000)
    thumbnail_link = models.CharField(max_length=1000)
    descripion = models.TextField()
    dept_head = models.CharField(max_length=100)

    def __str__(self):
        return "Title {}  Description {} VideoLink {} description {}".format(self.title,self.video_link,self.descripion,self.thumbnail_link,self.dept_head)