# Generated by Django 2.1.7 on 2019-03-14 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='date',
        ),
        migrations.RemoveField(
            model_name='event',
            name='time',
        ),
        migrations.AddField(
            model_name='event',
            name='datetime',
            field=models.DateTimeField(default='2019-03-16 21:00:00'),
            preserve_default=False,
        ),
    ]
