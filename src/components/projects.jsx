import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell} from 'react-mdl';
import Project1 from './cardprojects/project1';

class Projects extends Component {
   constructor(props){
    super(props);
    this.state = {activeTab: 0};
   }

   toggleCategories()
   {
    if(this.state.activeTab === 0)
    {
      return (
        // <Grid>
        // <Cell col={4}>
        //   <Project1 />
        // </Cell>
        //  <Cell col={4}>
        //  <Project1 />
        // </Cell>
        // <Cell col={4}>
        //  <Project1 />
        // </Cell>
        // </Grid>      
        <div className="projects-grid">
            <Project1 />
            <Project1 />
            <Project1 />
        </div>
      )
    } 
    else if(this.state.activeTab === 1)
    {
      return (
        <div>
          <h1>This is Spring</h1>
        </div>
      )
    }
    else if(this.state.activeTab === 2)
    {
      return (
        <div>
          <h1>This is Swing</h1>
        </div>
      )
    }
   
   }
   

    render() { 
        return ( 
            <div className="category-tabs">
             <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Spring</Tab>
                <Tab>Swing</Tab>                
             </Tabs>
             <section className="projects-section">
               <Grid>
                  <Cell col={12}>
                      <div className="project-content">
                          {this.toggleCategories()}
                      </div>                        
                  </Cell>
               </Grid>              
             </section>
            </div>
         );
    }
}
 
export default Projects;