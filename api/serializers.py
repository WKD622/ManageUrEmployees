from django.contrib.auth.models import User, Group
from django.core.validators import RegexValidator
from rest_framework import serializers
from .models import Employee, Income, Outcome, Event


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    alphanumeric = RegexValidator(r'^[0-9]*$', 'Only numeric characters are allowed.')
    hired = serializers.BooleanField(default=True)
    pesel = serializers.CharField(max_length=11, min_length=11, validators=[alphanumeric])
    class Meta:
        model = Employee
        fields = ('pesel', 'first_name', 'last_name', 'position', 'salary', 'hired')


class IncomeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Income
        fields = ('sum', 'date', 'name')


class OutcomeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Outcome
        fields = ('sum', 'date', 'name')


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('id', 'name', 'description', 'datetime')


class EventMiniSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ('name', 'datetime')
