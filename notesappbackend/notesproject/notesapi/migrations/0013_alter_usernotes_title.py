# Generated by Django 4.1.4 on 2022-12-15 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notesapi', '0012_usernotes_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usernotes',
            name='title',
            field=models.CharField(max_length=250),
        ),
    ]
