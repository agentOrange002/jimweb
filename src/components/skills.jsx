import React, { Component } from 'react';
import {Grid,Cell,ProgressBar} from 'react-mdl';

class Skills extends Component {
 
    render() { 
        return ( 
            <Grid>
                <Cell col={3}>
                    <div className="skills">
                        {this.props.skill}
                                           
                    </div>                   
                </Cell>  
                <Cell col={9} >
                    <ProgressBar className="skill-pb" progress={this.props.progress}/>    
                    </Cell>    
            </Grid>
         );
    }
}
 
export default Skills;