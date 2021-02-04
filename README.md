# How to run

### Client:
1-cd client <br />
2-npm install <br />
3-npm run build (This is important because django is going to serve files from the build folder) <br />

### Backend: <br />
1-cd teraki <br />
2-pip install -r requirements.txt <br />
3-python manage.py runserver
** To access admin page you can use the super user admin/1234 **

# Third-party tools used:
1-react-bootstrap for styled components like table and jumbotron<br />
2-djangorestframework (used serializer along with ListApiView and RetrieveApiView to serve the data)<br />
