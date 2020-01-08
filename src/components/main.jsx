import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Card1 from './card1'
import Aboutme from './aboutme';
import Contactme from './contactme';
import Landingpage from './landingpage';
import Resume from './resume';
import Projects from './projects';
import Notfound from './notfound';

class Main extends Component {
   
    render() { 
        return (             
                <Switch>               
                <Route exact path ="/app/home" component={Landingpage}/>   
                <Route path ="/app/card1" component={Card1}/>    
                <Route path ="/app/aboutme" component={Aboutme}/>          
                <Route path ="/app/contactme" component={Contactme}/> 
                <Route path ="/app/resume" component={Resume}/>      
                <Route path ="/app/projects" component={Projects}/>   
                <Route path ="/app/*" component={Notfound}/>  
                </Switch>             
        );
    }
}
 
export default Main;