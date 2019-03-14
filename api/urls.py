from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'employees', views.EmployeeViewSet)
router.register(r'income', views.IncomeViewSet)
router.register(r'outcome', views.OutcomeViewSet)
router.register(r'events', views.EventViewSet)

urlpatterns = [
    path('', include(router.urls))
]
