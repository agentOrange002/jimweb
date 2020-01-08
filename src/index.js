import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Notfound from './components/notfound';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Loginpage from './components/login';

ReactDOM.render(
    <Router>       
        <Switch>          
            <Route path="/app" component={App} />   
            <Route path="/login" component={Loginpage} /> 
            {/* <Redirect from='/' to='/app/' />        */}
           <Route path='/' render={() => ( <Redirect to="/app/home" />  )}/>  
            
            {/* <Route path="*" component={Notfound} /> */}
        </Switch>
    </Router>


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
