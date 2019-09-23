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
                <Route exact path ="/" component={Landingpage}/>   
                <Route path ="/card1" component={Card1}/>    
                <Route path ="/aboutme" component={Aboutme}/>          
                <Route path ="/contactme" component={Contactme}/> 
                <Route path ="/resume" component={Resume}/>      
                <Route path ="/projects" component={Projects}/>   
                <Route path ="*" component={Notfound}/>  
                </Switch>             
        );
    }
}
 
export default Main;