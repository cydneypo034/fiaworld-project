# Generated by Django 2.1.11 on 2019-10-10 23:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiaworldapp', '0014_auto_20191007_2153'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artists',
            name='artist_image',
            field=models.CharField(max_length=330),
        ),
        migrations.AlterField(
            model_name='movies',
            name='movie_image',
            field=models.CharField(max_length=330),
        ),
        migrations.AlterField(
            model_name='talkshows',
            name='show_image',
            field=models.CharField(max_length=330),
        ),
    ]