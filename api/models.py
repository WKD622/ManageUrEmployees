from __future__ import unicode_literals

from django.utils import timezone

from django.db import models


class EventsQuerySet(models.QuerySet):
    def future_events(self):
        return self.filter(datetime__gte=timezone.datetime.today()).order_by('datetime')

    def todays_events(self):
        current_date = timezone.datetime.today()
        return self.filter(datetime__year=current_date.year, datetime__month=current_date.month,
                           datetime__day=current_date.day).order_by('datetime')

    def next_event(self):
        return self.future_events().first()

    def all(self):
        return self


class EventsManager(models.Manager):
    def get_queryset(self):
        return EventsQuerySet(self.model, using=self._db)

    def future_events(self):
        return self.get_queryset().future_events()

    def todays_events(self):
        return self.get_queryset().todays_events()

    def next_event(self):
        return self.get_queryset().next_event()

    def all(self):
        return self.get_queryset().all()


class Employee(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    pesel = models.CharField(max_length=11, primary_key=True)
    position = models.CharField(max_length=50, null=True)
    salary = models.IntegerField(null=True)
    hired = models.BooleanField(default=True)


class Income(models.Model):
    sum = models.IntegerField(null=True)
    date = models.DateField(default=timezone.datetime.now, blank=True)
    name = models.CharField(max_length=50)


class Outcome(models.Model):
    sum = models.IntegerField(null=True)
    date = models.DateField(default=timezone.datetime.now, blank=True)
    name = models.CharField(max_length=50)


class Event(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=500, null=True)
    datetime = models.DateTimeField()

    objects = EventsManager()
