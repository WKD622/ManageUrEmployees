import json

import pytest

from . import url
from ...factories import FutureEventFactory, TodaysEventsFactory, PastEventFactory


@pytest.mark.django_db
def test_future_events(client):
    # given
    expected_number_of_future_events = 3
    number_of_past_events = 4
    expected_future_events = FutureEventFactory.create_batch(expected_number_of_future_events)
    PastEventFactory.create_batch(number_of_past_events)

    # when
    response = client.get(url.url_not_detail(url.EVENTS, 'future_events'))
    future_events = list()

    for x in json.loads(response.content):
        future_events.append(x['id'])

    # then
    assert set(future_events) == {x.id for x in expected_future_events} and expected_number_of_future_events == len(
        future_events)


@pytest.mark.django_db
def test_todays_events(client):
    # given
    expected_number_of_todays_events = 3
    number_of_past_events = 4
    PastEventFactory.create_batch(number_of_past_events)
    expected_todays_events = TodaysEventsFactory.create_batch(expected_number_of_todays_events)

    # when
    response = client.get(url.url_not_detail(url.EVENTS, 'todays_events'))
    todays_events = list()

    for x in json.loads(response.content):
        todays_events.append(x['id'])

    # then
    assert set(todays_events) == {x.id for x in expected_todays_events} and expected_number_of_todays_events == len(
        todays_events)
