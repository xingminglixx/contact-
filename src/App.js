import './App.css';
import React,{useState} from 'react';
import Nav from './components/Nav';
import Appointment from './components/AppointmentLook';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Contact from './components/ContactLook'


function App() {

const [contact,setCotact]=useState({})
const [totalContact, setTotalContact]=useState([])


  return (
    <div>
      <Router>
    <h1>Appointment Planner Challenge</h1>
    <Nav/>
    <Switch>
<Route path="/"  exact><Appointment /></Route>
<Route path="/contact"> <Contact contact={contact} totalContact={totalContact} setTotalContact={setTotalContact} setContact={setCotact}/></Route>

</Switch>
</Router>
    </div>
   

  );
}

export default App;
