# Generated by Django 4.1.4 on 2022-12-14 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offroad_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='zone',
            field=models.IntegerField(default=None),
        ),
    ]
