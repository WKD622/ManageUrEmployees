import pytest

from ..factories import PastEventFactory, FutureEventFactory, TodayEventsFactory
from ..models import Event


@pytest.mark.django_db
def test_future_events():
    # given
    past_event = PastEventFactory()

    future_events = FutureEventFactory.create_batch(3)

    # when
    manager_events = set(Event.objects.future_events())

    # then
    assert manager_events == set(future_events)


@pytest.mark.django_db
def test_todays_events():
    # given
    past_event = PastEventFactory()
    todays_event = TodayEventsFactory()
    future_event = FutureEventFactory()

    # when
    manager_events = list(Event.objects.todays_events())

    # then
    assert manager_events == [todays_event]
