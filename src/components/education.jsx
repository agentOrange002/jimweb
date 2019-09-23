import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
class Education extends Component {
   
    render() { 
        return (  
            <div className="education">
                <Grid className="educ-grid">               
                <Cell className="educ-left" col={4}>
                    <p> {this.props.startdate} - {this.props.enddate}</p>
                </Cell>
                <Cell col={8}>
                    <h4>{this.props.schoolname}</h4>
                    <p>{this.props.schooldesc}</p>
                </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Education;