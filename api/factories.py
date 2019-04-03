import factory.fuzzy

from .models import *


class EventFactory(factory.DjangoModelFactory):
    class Meta:
        model = Event

    name = factory.Sequence(lambda n: 'event ' + str(n))
    description = factory.Sequence(lambda n: 'description ' + str(n))


class PastEventFactory(EventFactory):
    datetime = factory.fuzzy.FuzzyDateTime(
        (timezone.now() - timezone.timedelta(days=100000)),
        (timezone.now() - timezone.timedelta(seconds=1))
    )


class FutureEventFactory(EventFactory):
    datetime = factory.fuzzy.FuzzyDateTime(
        timezone.now() + timezone.timedelta(seconds=3),
        timezone.now() + timezone.timedelta(days=720))


class TodaysEventsFactory(EventFactory):
    datetime = timezone.now()


class EmployeeFactory(factory.DjangoModelFactory):
    class Meta:
        model = Employee

    first_name = factory.Sequence(lambda n: 'first_name ' + str(n))
    last_name = factory.Sequence(lambda n: 'last_name ' + str(n))
    pesel = factory.fuzzy.FuzzyText(length=11, chars='0123456789')
    position = factory.Sequence(lambda n: 'position ' + str(n))
    salary = factory.fuzzy.FuzzyInteger(1000, 10000)


class IncomeFactory(factory.DjangoModelFactory):
    class Meta:
        model = Income

    sum = factory.fuzzy.FuzzyInteger(100, 1000)
    date = factory.fuzzy.FuzzyDate(timezone.now() - timezone.timedelta(days=360),
                                   timezone.now() - timezone.timedelta(seconds=1))
    name = factory.Sequence(lambda n: 'name ' + str(n))
