# Generated by Django 3.2.21 on 2023-09-19 06:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='cal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('valueA', models.CharField(max_length=10)),
                ('valueB', models.CharField(max_length=10)),
                ('result', models.CharField(max_length=10)),
            ],
        ),
    ]
