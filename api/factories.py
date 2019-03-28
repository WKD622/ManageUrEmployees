import datetime

import factory.fuzzy
import pytz

from .models import *


class EventFactory(factory.Factory):
    today = datetime.datetime.today().replace(tzinfo=timezone.utc)
    FACTORY_FOR = Event

    name = factory.Sequence(lambda n: 'event' + n)
    description = factory.sequence(lambda n: 'description' + n)


class PastEventFactory(EventFactory):
    today = datetime.datetime.today().replace(tzinfo=timezone.utc)
    datetime = factory.fuzzy.FuzzyDateTime(datetime.datetime(2011, 8, 15, 8, 15, 12, 0, pytz.UTC),
                                           today - datetime.timedelta(days=1))


class FutureEventFactory(EventFactory):
    today = datetime.datetime.today().replace(tzinfo=timezone.utc)
    datetime = factory.fuzzy.FuzzyDateTime(today + datetime.timedelta(days=1),
                                           today + datetime.timedelta(days=720))


class TodayEventsFactory(EventFactory):
    today = datetime.datetime.today().replace(tzinfo=timezone.utc)
    datetime = today
