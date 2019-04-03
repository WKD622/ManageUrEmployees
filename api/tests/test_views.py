import pytest
import json

from django.test import TestCase
from django.utils import timezone
from rest_framework.test import RequestsClient

from ..factories import EmployeeFactory, IncomeFactory, FutureEventFactory, TodaysEventsFactory, PastEventFactory

SERVER_ADDRESS = 'http://127.0.0.1:8000'
CLIENT = RequestsClient()
EMPLOYEES = 'employees'
EVENTS = 'events'
INCOMES = 'income'


def _url_not_detail(content, method='', options=''):
    return SERVER_ADDRESS + '/api/{}/{}/{}'.format(content, method, options)


def _url_detail(content, id, method='', options=''):
    return SERVER_ADDRESS + '/api/{}/{}/{}/'.format(content, id, method, options)


def _option(option, value):
    return '?{}={}&'.format(option, str(value))


class TestEmployees(TestCase):

    @pytest.mark.django_db
    def test_fire(self):
        # given
        employee = EmployeeFactory()
        expected_hired = False

        # when
        CLIENT.get(_url_detail(EMPLOYEES, employee.pesel, 'fire'))
        employee.refresh_from_db()

        # then
        assert expected_hired == employee.hired

    @pytest.mark.django_db
    def test_hire_again(self):
        # given
        employee = EmployeeFactory(hired=False)
        expected_hired = True

        # when
        CLIENT.get(_url_detail(EMPLOYEES, employee.pesel, 'hire_again'))
        employee.refresh_from_db()

        # then
        assert expected_hired == employee.hired

    @pytest.mark.django_db
    def test_change_position(self):
        # given
        expected_position = "new position"
        employee = EmployeeFactory()

        # when
        CLIENT.patch(_url_detail(EMPLOYEES, employee.pesel, 'change_position'), {'position': expected_position})
        employee.refresh_from_db()

        # then
        assert expected_position == employee.position

    @pytest.mark.django_db
    def test_summary_cost_of_salaries(self):
        # given
        salary_1 = 1000
        salary_2 = 2000
        salary_3 = 100
        expected_sum_of_salaries = salary_1 + salary_2 + salary_3
        EmployeeFactory(salary=salary_1)
        EmployeeFactory(salary=salary_2)
        EmployeeFactory(salary=salary_3)

        # when
        sum_of_salaries = int(CLIENT.get(_url_not_detail(EMPLOYEES, 'summary_cost_of_salaries')).content)

        # then
        assert expected_sum_of_salaries == sum_of_salaries


class TestIncomes(TestCase):

    @pytest.mark.django_db
    def test_last_incomes(self):
        # given
        IncomeFactory.create_batch(10)
        expected_incomes_number = 5

        # when
        response = CLIENT.get(
            _url_not_detail(INCOMES, "last_incomes", _option('number_of_incomes', expected_incomes_number))
        )
        incomes_number = len(json.loads(response.content))

        # then
        assert expected_incomes_number == incomes_number

    @pytest.mark.django_db
    def test_sum(self):
        # given
        sum_1 = 100
        sum_2 = 350
        sum_3 = 1050
        expected_sum_of_sums = sum_1 + sum_2 + sum_3
        IncomeFactory(date=timezone.now(), sum=sum_1)
        IncomeFactory(date=timezone.now(), sum=sum_2)
        IncomeFactory(date=timezone.now(), sum=sum_3)

        # when
        sum_of_sums = int(CLIENT.get(_url_not_detail(INCOMES, "sum")).content)

        # then
        assert expected_sum_of_sums == sum_of_sums


class TestEvents(TestCase):
    @pytest.mark.django_db
    def test_future_events(self):
        # given
        expected_number_of_future_events = 3
        number_of_past_events = 4
        FutureEventFactory.create_batch(expected_number_of_future_events)
        PastEventFactory.create_batch(number_of_past_events)

        # when
        response = CLIENT.get(_url_not_detail(EVENTS, 'future_events'))
        number_of_future_events = len(json.loads(response.content))

        # then
        assert expected_number_of_future_events == number_of_future_events

    @pytest.mark.django_db
    def test_todays_events(self):
        # given
        expected_number_of_todays_events = 3
        number_of_past_events = 4
        number_of_future_events = 2
        FutureEventFactory.create_batch(number_of_future_events)
        PastEventFactory.create_batch(number_of_past_events)
        TodaysEventsFactory.create_batch(expected_number_of_todays_events)

        # when
        response = CLIENT.get(_url_not_detail(EVENTS, 'todays_events'))
        number_of_todays_events_db = len(json.loads(response.content))

        # then
        assert expected_number_of_todays_events == number_of_todays_events_db
