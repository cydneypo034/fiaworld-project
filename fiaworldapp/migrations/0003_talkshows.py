# Generated by Django 2.1.11 on 2019-10-03 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fiaworldapp', '0002_auto_20191003_2333'),
    ]

    operations = [
        migrations.CreateModel(
            name='TalkShows',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=100)),
                ('show_image', models.FileField(blank=True, upload_to='uploads/')),
            ],
        ),
    ]
