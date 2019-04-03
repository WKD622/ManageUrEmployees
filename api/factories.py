import factory.fuzzy
from .models import *
from faker import Faker
from faker.providers import date_time


class FakeObjects:
    fake = Faker().add_provider(date_time)

    def get_fake(self):
        return self.fake


class EventFactory(factory.DjangoModelFactory):
    class Meta:
        model = Event

    name = factory.Sequence(lambda n: 'event ' + str(n))
    description = factory.Sequence(lambda n: 'description ' + str(n))


class PastEventFactory(EventFactory):
    datetime = factory.fuzzy.Fuzzygit DateTime((timezone.datetime.today() - timezone.timedelta(days=100000)).replace(
        tzinfo=timezone.utc),
        (timezone.datetime.today() - timezone.timedelta(seconds=1)).replace(
            tzinfo=timezone.utc))


class FutureEventFactory(EventFactory):
    datetime = factory.fuzzy.FuzzyDateTime(
        timezone.datetime.today().replace(tzinfo=timezone.utc) + timezone.timedelta(seconds=3),
        timezone.datetime.today().replace(tzinfo=timezone.utc) + timezone.timedelta(days=720))


class TodayEventsFactory(EventFactory):
    datetime = timezone.datetime.today().replace(tzinfo=timezone.utc)
