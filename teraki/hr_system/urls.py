from .views import List, Retrieve
from django.urls import path

urlpatterns = [
    path('', List.as_view()),
    path('<str:pk>', Retrieve.as_view())
]
