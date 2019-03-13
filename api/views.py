import datetime

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from api.serializers import UserSerializer, GroupSerializer
from .models import Employee, Income, Outcome, Event
from .serializers import EmployeeSerializer, EventMiniSerializer, IncomeSerializer, OutcomeSerializer, EventSerializer
from datetime import timedelta, datetime


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def list(self, request, *args, **kwargs):
        number_of_employees = request.GET.get('number_of_employees', None)

        if number_of_employees is not None:
            employees = Employee.objects.order_by('-salary')[:number_of_employees]
        else:
            employees = Employee.objects.order_by('-salary')

        serializer = self.get_serializer(employees, many=True)
        return Response(serializer.data)

    '''Fires employee based on given pesel number'''

    @action(detail=True, methods=['get'])
    def fire(self, request, pesel=None, *args, **kwargs):
        return Response(pesel)
        employee = Employee.objects.filter(pesel=pesel)

        if pesel is not None:
            if not employee:
                return Response("There is no employee with pesel: " + pesel)
            else:
                first_name = employee.get().first_name
                last_name = employee.get().last_name
                employee.delete()
                return Response("Employee " + first_name + " " + last_name + " fired.")

    '''promotes\demotes employe based on given pesel number'''

    @action(detail=False, methods=['get'])
    def change_position(self, request, *args, **kwargs):
        pesel = request.GET.get('pesel', None)
        new_position = request.GET.get('new_position', None)

        if pesel is not None and new_position is not None:
            employee = Employee.objects.filter(pesel=pesel).first()
            if not employee:
                return Response("There is no employee with pesel: " + pesel)
            else:
                employee.position = new_position
                employee.save()
                serializer = EmployeeSerializer(employee, many=False)
                return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def summary_cost_of_salaries(self, request, *args, **kwargs):
        employees = Employee.objects.all()
        sum_of_salaries = 0
        for employee in employees:
            sum_of_salaries += int(employee.salary)
        return Response("Summary cost of all salaries: " + str(sum_of_salaries))


class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    filter_fields = ('name', 'date')

    @action(detail=False, methods=['get'])
    def last_incomes(self, request, *args, **kwargs):
        number_of_incomes_to_show = request.GET.get('number_of_incomes', None)
        if number_of_incomes_to_show is not None:
            incomes = Income.objects.order_by('date')[:int(number_of_incomes_to_show)]
        else:
            incomes = Income.objects.order_by('date')
        serializer = EventSerializer(incomes, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def sum_of_cost(self, request, *args, **kwargs):
        days_back = request.GET.get('days', 7)
        current_date = datetime.today().date()
        date_for_filter = current_date - timedelta(days=int(days_back))
        incomes = Income.objects.filter(date__gte=date_for_filter)
        sum = 0
        for income in incomes:
            sum += int(income.sum)
        return Response("Total income from the last " + str(days_back) + " days is: " + str(sum))


class OutcomeViewSet(viewsets.ModelViewSet):
    queryset = Outcome.objects.all()
    serializer_class = OutcomeSerializer
    filter_fields = ('name', 'date')

    @action(detail=False, methods=['get'])
    def last_outcomes(self, request, *args, **kwargs):
        number_of_outcomes_to_show = request.GET.get('number_of_outcomes', None)
        if number_of_outcomes_to_show is not None:
            outcomes = Outcome.objects.order_by('date')[:int(number_of_outcomes_to_show)]
        else:
            outcomes = Outcome.objects.order_by('date')
        serializer = EventSerializer(outcomes, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def sum_of_cost(self, request, *args, **kwargs):
        days_back = request.GET.get('days', 7)
        current_date = datetime.today().date()
        date_for_filter = current_date - timedelta(days=int(days_back))
        outcomes = Outcome.objects.filter(date__gte=date_for_filter)
        sum = 0
        for outcome in outcomes:
            sum += int(outcome.sum)
        return Response("Total outcome from the last " + str(days_back) + " days is: " + str(sum))


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventMiniSerializer

    def get_future_events(self):
        events = Event.objects.filter(date__gte=datetime.today().date())
        current_date = datetime.today().date()
        current_time = datetime.today().time()
        for event in events:
            if event.date == current_date:
                if event.time < current_time:
                    events = events.exclude(id=event.id)
        return events

    @action(detail=False, methods=['get'])
    def future_events(self, request, *args, **kwargs):
        events = self.get_future_events().order_by('date', 'time')

        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    '''Returns closest event based on current date and time'''

    @action(detail=False, methods=['get'])
    def next_event(self, request, *args, **kwargs):
        event = self.get_future_events().order_by('date', 'time')[:1].get()

        serializer = EventSerializer(event, many=False)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def todays_events(self, request, *args, **kwargs):
        events = Event.objects.filter(date=datetime.today())

        current_time = datetime.today().time()
        for event in events:
            if event.time < current_time:
                events = events.exclude(id=event.id)
        events = events.order_by('time')

        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
