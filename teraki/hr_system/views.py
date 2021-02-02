from .serializers import EmployeeSerializer
from .models import Employee
from rest_framework.generics import ListAPIView, RetrieveAPIView
# Create your views here.


class List(ListAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class Retrieve(RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

