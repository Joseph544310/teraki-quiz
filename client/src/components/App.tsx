import React from 'react';
import EmployeesTable from './EmployeesTable'
import '../css/App.css';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
     <EmployeesTable/>
    </div>
  );
}

export default App;
