# Generated by Django 4.1.4 on 2022-12-20 03:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('offroad_app', '0007_recoveries_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recoveries',
            name='location_latitude',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='recoveries',
            name='location_longitude',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='recoveries',
            name='recovery_type',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='recoveries',
            name='vehicle_condition',
            field=models.CharField(max_length=60),
        ),
    ]
