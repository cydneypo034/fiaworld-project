# Generated by Django 2.1.11 on 2019-10-07 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiaworldapp', '0011_auto_20191007_1435'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artists',
            name='artist_image',
            field=models.ImageField(blank=True, upload_to='staticfiles/media/images/'),
        ),
        migrations.AlterField(
            model_name='movies',
            name='movie_image',
            field=models.ImageField(blank=True, upload_to='staticfiles/media/images/'),
        ),
        migrations.AlterField(
            model_name='talkshows',
            name='show_image',
            field=models.ImageField(blank=True, upload_to='staticfiles/media/images/'),
        ),
    ]