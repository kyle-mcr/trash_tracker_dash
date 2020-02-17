import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Devices from './components/Devices';
import Accounts from './components/Accounts';
import Pickups from './components/Pickups';
import Users from './components/Users';
import Navigation from './components/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route class="link" path="/" component={Login} exact/>
             <Route class="link" path="/dashboard" component={Dashboard} exact/>
             <Route class="link" path="/devices" component={Devices} exact/>
             <Route class="link" path="/accounts" component={Accounts} exact />
             <Route class="link" path="/pickups" component={Pickups} exact/>
             <Route class="link" path="/users" component={Users} exact/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;