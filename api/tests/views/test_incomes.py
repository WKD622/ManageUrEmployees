import json

import pytest
from django.utils import timezone

from . import url
from ...factories import IncomeFactory


@pytest.mark.django_db
def test_last_incomes(client):
    # given
    IncomeFactory.create_batch(10)
    expected_incomes_number = 5

    # when
    response = client.get(
        url.url_not_detail(url.INCOMES, "last_incomes", url.option('number_of_incomes', expected_incomes_number))
    )
    incomes_number = len(json.loads(response.content))

    # then
    assert incomes_number == expected_incomes_number


@pytest.mark.django_db
def test_sum(client):
    # given
    sum_1 = 100
    sum_2 = 350
    sum_3 = 1050
    expected_sum_of_sums = sum_1 + sum_2 + sum_3
    IncomeFactory(date=timezone.now(), sum=sum_1)
    IncomeFactory(date=timezone.now(), sum=sum_2)
    IncomeFactory(date=timezone.now(), sum=sum_3)

    # when
    sum_of_sums = int(client.get(url.url_not_detail(url.INCOMES, "sum")).content)

    # then
    assert sum_of_sums == expected_sum_of_sums
