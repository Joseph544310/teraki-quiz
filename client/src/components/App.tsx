import React from 'react';
import EmployeesTable from './EmployeesTable'
import '../css/App.css';
import NavBar from './NavBar';
import {Jumbotron} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbotron>
        <h2>Welcome to Teraki's new web application</h2>
      </Jumbotron>
      <EmployeesTable/>
    </div>
  );
}

export default App;
