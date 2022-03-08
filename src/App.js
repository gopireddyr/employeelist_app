import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Addemployees from './Component/Addemployees';
import Employeelist from './Component/Employeelist';
import EmployeeDetails from './Component/EmployeeDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <Router>
        <Routes>
            <Route path="/" exact element={<Employeelist/>}/>
            <Route path="/AddEmployee/:id" element={<Addemployees/>}/>
            <Route path="/View/:id" element={<EmployeeDetails/>}/>
          
          </Routes>
      </Router>
        
      <footer className="App-footer">Footer</footer>
    </div>
  );
}

export default App;
