EMPLOYEES = 'employees'
EVENTS = 'events'
INCOMES = 'income'


def url_not_detail(content, method='', options=''):
    return '/api/{}/{}/{}'.format(content, method, options)


def url_detail(content, id, method='', options=''):
    return '/api/{}/{}/{}/'.format(content, id, method, options)


def option(option, value):
    return '?{}={}&'.format(option, str(value))
