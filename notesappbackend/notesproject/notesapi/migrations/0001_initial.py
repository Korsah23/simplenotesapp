# Generated by Django 4.1.4 on 2022-12-14 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserNotes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=250, unique=True)),
                ('body', models.CharField(max_length=50000)),
                ('timeCreatedOrUpdated', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
