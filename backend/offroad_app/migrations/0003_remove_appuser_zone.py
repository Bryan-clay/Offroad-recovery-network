# Generated by Django 4.1.4 on 2022-12-15 01:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('offroad_app', '0002_appuser_zone'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='appuser',
            name='zone',
        ),
    ]
