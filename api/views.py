import datetime

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from api.serializers import UserSerializer, GroupSerializer
from .models import Employee, Income, Outcome, Event
from .serializers import EmployeeSerializer, EventMiniSerializer, IncomeSerializer, OutcomeSerializer, EventSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    ''''''
    def list(self, request, *args, **kwargs):
        number_of_employees = request.GET.get('number_of_employees', None)

        if number_of_employees is not None:
            employees = Employee.objects.order_by('-salary')[:5]
        else:
            employees = Employee.objects.order_by('-salary')

        serializer = self.get_serializer(employees, many=True)
        return Response(serializer.data)


    '''Fires employee based on given pesel number'''

    @action(detail=False, methods=['get'])
    def fire(self, request, *args, **kwargs):
        pesel = request.GET.get('pesel', None)
        employee = Employee.objects.filter(pesel=pesel)

        if pesel is not None:
            if not employee:
                return Response("There is no employee with pesel: " + pesel)
            else:
                first_name = employee.get().first_name
                last_name = employee.get().last_name
                employee.delete()
                return Response("Employee " + first_name + " " + last_name + " fired.")

    '''promotes\demotes employe'''

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


class OutcomeViewSet(viewsets.ModelViewSet):
    queryset = Outcome.objects.all()
    serializer_class = OutcomeSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventMiniSerializer

    def get_future_events(self):
        events = Event.objects.filter(date__gte=datetime.datetime.today().date())
        current_date = datetime.datetime.today().date()
        current_time = datetime.datetime.today().time()
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
        events = Event.objects.filter(date=datetime.datetime.today())

        current_time = datetime.datetime.today().time()
        for event in events:
            if event.time < current_time:
                events = events.exclude(id=event.id)
        events = events.order_by('time')

        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
