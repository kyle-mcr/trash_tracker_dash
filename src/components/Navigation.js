import React from 'react';
import './nav.css';
import img from '../ttlogo.png'
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div id="navbar">
            <img id="logo" src={img} alt="TT"/>
          <NavLink class="link" to="/">Login</NavLink>
          <NavLink class="link" to="/dashboard">Dashboard</NavLink>
          <NavLink class="link" to="/devices">Devices</NavLink>
          <NavLink class="link" to="/accounts">Accounts</NavLink>
          <NavLink class="link" to="/pickups">Pickups</NavLink>
          <NavLink class="link" to="/users">Users</NavLink>
       </div>
    );
}
export default Navigation