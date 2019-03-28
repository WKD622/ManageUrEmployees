import pytest
from django.utils import timezone

from ..models import Event


@pytest.mark.django_db
def test_future_events():
    # given
    today = timezone.now()

    past_event = Event(name='name1', description='description1', datetime=today - timezone.timedelta(days=1))
    past_event.save()

    future_events = [
        Event(name='name2', description='description2', datetime=today + timezone.timedelta(days=1)),
        Event(name='name2', description='description2', datetime=today + timezone.timedelta(days=30)),
        Event(name='name3', description='description3', datetime=today + timezone.timedelta(days=360)),
    ]
    for event in future_events:
        event.save()

    # when
    manager_events = list(Event.objects.future_events())

    # then
    assert manager_events == future_events


@pytest.mark.django_db
def test_todays_events():
    # given
    today = timezone.now()

    past_event = Event(name='name1', description='description1', datetime=today - timezone.timedelta(days=3))
    todays_event = Event(name='name2', description='description2', datetime=today)
    future_event = Event(name='name3', description='description3', datetime=today + timezone.timedelta(days=2))
    past_event.save()
    todays_event.save()
    future_event.save()

    # when
    manager_events = list(Event.objects.todays_events())

    # then
    assert manager_events == [todays_event]
