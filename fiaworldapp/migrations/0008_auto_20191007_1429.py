# Generated by Django 2.1.11 on 2019-10-07 14:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiaworldapp', '0007_auto_20191007_1418'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artists',
            name='artist_image',
            field=models.ImageField(blank=True, upload_to='staticfiles/media/'),
        ),
    ]