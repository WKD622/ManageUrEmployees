EMPLOYEES = 'employees'
EVENTS = 'events'
INCOMES = 'income'


def url_not_detail(content, method='', options=''):
    return f'/api/{content}/{method}/{options}'


def url_detail(content, id, method='', options=''):
    return f'/api/{content}/{id}/{method}/{options}'


def option(option, value):
    return f'?{option}={value}&'
