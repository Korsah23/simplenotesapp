# Generated by Django 4.1.4 on 2022-12-15 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notesapi', '0010_alter_usernotes_title'),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name='usernotes',
            name='title',
        ),
        migrations.AlterField(
            model_name='usernotes',
            name='title',
            field=models.CharField(max_length=250, unique=True),
        ),
    ]
