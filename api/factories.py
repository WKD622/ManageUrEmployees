import datetime

import factory.fuzzy
import pytz
from .models import *


class EventFactory(factory.Factory):
    class Meta:
        model = Event

    name = factory.Sequence(lambda n: 'event ' + str(n))
    description = factory.sequence(lambda n: 'description ' + str(n))


class PastEventFactory(EventFactory):
    datetime = factory.fuzzy.FuzzyDateTime(datetime.datetime(2011, 8, 15, 8, 15, 12, 0, pytz.UTC),
                                           (datetime.datetime.today() - datetime.timedelta(days=1)).replace(
                                               tzinfo=timezone.utc))


class FutureEventFactory(EventFactory):
    datetime = factory.fuzzy.FuzzyDateTime(
        datetime.datetime.today().replace(tzinfo=timezone.utc) + datetime.timedelta(days=1),
        datetime.datetime.today().replace(tzinfo=timezone.utc) + datetime.timedelta(days=720))


class TodayEventsFactory(EventFactory):
    datetime = datetime.datetime.today().replace(tzinfo=timezone.utc)
