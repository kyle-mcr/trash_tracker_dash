import React from 'react';
import './Nav.css';
import img from '../ttlogo.png'
import { NavLink } from 'react-router-dom';

 
const Navigation = () => {
    return (
       <div id="navbar">
            <img id="logo" src={img} alt="TT"/>
          <NavLink class="link" to="/">Login</NavLink>
          <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '0em'}} class="link" exact to="/dashboard">Dashboard</NavLink>
          <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '0em'}} class="link" exact to="/devices">Devices</NavLink>
          <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '0em'}} class="link" exact to="/accounts">Accounts</NavLink>
          <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '0em'}} class="link" exact to="/pickups">Pickups</NavLink>
          <NavLink activeStyle={{borderBottom: 'solid 3px #fff', paddingBottom: '0em'}} class="link" exact to="/users">Users</NavLink>
       </div>
    );
}
export default Navigation;