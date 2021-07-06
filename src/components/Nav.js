import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function Nav() {
  return (
    <div>
<ul>

<Link to='/contact'><li>Contacts</li></Link>
<Link to='/'><li>Appoitments</li></Link>

  </ul>




    </div>
   

  );
}

export default Nav;
