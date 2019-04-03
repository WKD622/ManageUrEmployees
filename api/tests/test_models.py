import pytest

from ..factories import PastEventFactory, FutureEventFactory, TodaysEventsFactory
from ..models import Event


@pytest.mark.django_db
def test_future_events():
    # given
    PastEventFactory()

    future_events = FutureEventFactory.create_batch(3)

    # when
    manager_events = set(Event.objects.future_events())

    # then
    assert manager_events == set(future_events)


@pytest.mark.django_db
def test_todays_events():
    # given
    PastEventFactory()
    todays_event = TodaysEventsFactory()
    FutureEventFactory()

    # when
    manager_events = list(Event.objects.todays_events())

    # then
    assert manager_events == [todays_event]
