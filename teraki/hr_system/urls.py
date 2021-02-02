from .views import ListOrCreate, RetrieveOrUpdateOrDelete
from django.urls import path

urlpatterns = [
    path('', ListOrCreate.as_view()),
    path('<str:pk>', RetrieveOrUpdateOrDelete.as_view())
]
