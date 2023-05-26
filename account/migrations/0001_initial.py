# Generated by Django 4.2.1 on 2023-05-14 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('userID', models.AutoField(primary_key=True, serialize=False)),
                ('userName', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=255)),
                ('points', models.IntegerField(default=0)),
            ],
        ),
    ]
