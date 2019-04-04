import pytest

from . import url
from ...factories import EmployeeFactory


@pytest.mark.django_db
def test_fire(client):
    # given
    employee = EmployeeFactory()
    expected_hired = False

    # when
    client.get(url.url_detail(url.EMPLOYEES, employee.pesel, 'fire'))
    employee.refresh_from_db()

    # then
    assert employee.hired == expected_hired


@pytest.mark.django_db
def test_hire_again(client):
    # given
    employee = EmployeeFactory(hired=False)

    # when
    client.get(url.url_detail(url.EMPLOYEES, employee.pesel, 'hire_again'))
    employee.refresh_from_db()

    # then
    assert employee.hired


@pytest.mark.django_db
def test_change_position(client):
    # given
    expected_position = "new position"
    employee = EmployeeFactory()
    data = {'position': expected_position}

    # when
    response = client.patch(
        url.url_detail(url.EMPLOYEES, employee.pesel, 'change_position'),
        data=data, content_type='application/json')
    employee.refresh_from_db()

    # then
    assert response.status_code == 200
    assert response.data['position'] == expected_position
    assert employee.position == expected_position


@pytest.mark.django_db
def test_summary_cost_of_salaries(client):
    # given
    salary_1 = 1000
    salary_2 = 2000
    salary_3 = 100
    expected_sum_of_salaries = salary_1 + salary_2 + salary_3
    EmployeeFactory(salary=salary_1)
    EmployeeFactory(salary=salary_2)
    EmployeeFactory(salary=salary_3)

    # when
    sum_of_salaries = int(client.get(url.url_not_detail(url.EMPLOYEES, 'summary_cost_of_salaries')).content)

    # then
    assert sum_of_salaries == expected_sum_of_salaries
