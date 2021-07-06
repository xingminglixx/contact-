import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Appointment from './components/AppointmentLook';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
    <h1>Appointment Planner Challenge</h1>
    <Nav/>
    <Switch>
<Route path="/"  exact component={Appointment}/>


</Switch>
</Router>
    </div>
   

  );
}

export default App;
