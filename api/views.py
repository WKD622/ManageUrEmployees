import datetime
from datetime import timedelta, datetime

from django.contrib.auth.models import User, Group
from django.db.models import Sum
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from api.serializers import UserSerializer, GroupSerializer
from .models import Employee, Income, Outcome, Event
from .serializers import EmployeeSerializer, EventMiniSerializer, IncomeSerializer, OutcomeSerializer, EventSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def list(self, request, *args, **kwargs):
        number_of_employees = request.GET.get('number_of_employees')
        employees = Employee.objects.order_by('-salary')

        if number_of_employees:
            employees = employees[:int(number_of_employees)]

        serializer = self.get_serializer(employees, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def fire(self, request, *args, **kwargs):
        employee = self.get_object()
        employee.hired = False
        employee.save(update_fields=['hired'])
        serializer = EmployeeSerializer(employee, many=False)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def hire_again(self, request, *args, **kwargs):
        employee = self.get_object()
        employee.hired = True
        employee.save(update_fields=['hired'])
        serializer = EmployeeSerializer(employee, many=False)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def change_position(self, request, *args, **kwargs):
        pesel = request.POST.get('pesel')
        new_position = request.POST.get('new_position')

        if pesel is not None and new_position is not None:
            employee = get_object_or_404(Employee, pesel=pesel)
            employee.position = new_position
            employee.save(update_fields=['position'])
            serializer = EmployeeSerializer(employee, many=False)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def summary_cost_of_salaries(self, request, *args, **kwargs):
        sum_of_salaries = Employee.objects.aggregate(sum_of_salaries=Sum('salary'))
        return Response("Summary cost of all salaries: " + str(sum_of_salaries['sum_of_salaries']))


class IncomeViewSet(viewsets.ModelViewSet):
    queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    filter_fields = ('name', 'date')

    @action(detail=False, methods=['get'])
    def last_incomes(self, request, *args, **kwargs):
        number_of_incomes_to_show = request.GET.get('number_of_incomes')
        incomes = Income.objects.order_by('date')
        if number_of_incomes_to_show:
            incomes = incomes[:int(number_of_incomes_to_show)]

        serializer = EventSerializer(incomes, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def sum(self, request, *args, **kwargs):
        days_back = request.GET.get('days', 7)
        if str(days_back).isdigit():
            current_date = datetime.today().date()
            date_for_filter = current_date - timedelta(days=int(days_back))
            sum_of_incomes = Income.objects.filter(date__gte=date_for_filter).aggregate(sum_of_incomes=Sum('sum'))[
                'sum_of_incomes']
            if not sum_of_incomes:
                sum_of_incomes = "0"
            return Response("Total income from the last " + str(days_back) + " days is: " + str(sum_of_incomes))
        return Response("days parameter should be a number")


class OutcomeViewSet(viewsets.ModelViewSet):
    queryset = Outcome.objects.all()
    serializer_class = OutcomeSerializer
    filter_fields = ('name', 'date')

    @action(detail=False, methods=['get'])
    def last_outcomes(self, request, *args, **kwargs):
        number_of_outcomes_to_show = request.GET.get('number_of_outcomes', None)
        outcomes = Outcome.objects.order_by('date')[:int(number_of_outcomes_to_show)]
        if number_of_outcomes_to_show:
            outcomes = outcomes[:int(number_of_outcomes_to_show)]
        serializer = EventSerializer(outcomes, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def sum(self, request, *args, **kwargs):
        days_back = request.GET.get('days', 7)
        if str(days_back).isdigit():
            current_date = datetime.today().date()
            date_for_filter = current_date - timedelta(days=int(days_back))
            sum_of_outcomes = Outcome.objects.filter(date__gte=date_for_filter).aggregate(sum_of_outcomes=Sum('sum'))[
                'sum_of_outcomes']
            if not sum_of_outcomes:
                sum_of_outcomes = "0"
            return Response(
                "Total outcome from the last " + str(days_back) + " days is: " + str(sum_of_outcomes))
        return Response("days parameter should be a number")


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventMiniSerializer

    @action(detail=False, methods=['get'])
    def future_events(self, request, *args, **kwargs):
        events = Event.objects.future_events()

        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def next_event(self, request, *args, **kwargs):
        event = Event.objects.next_event()

        serializer = EventSerializer(event, many=False)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def todays_events(self, request, *args, **kwargs):
        events = Event.objects.todays_events()

        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
