import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

class Workexperience extends Component {
   
    render() { 
        return (  
            <div className="workexperience">
                <Grid className="we-grid">               
                <Cell className="we-left" col={4}>
                    <p> {this.props.startdate}-{this.props.enddate}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.employer}</h4>
                    <p>{this.props.jobdesc}</p>
                </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Workexperience;