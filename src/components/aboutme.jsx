import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Carousel from './rcarousel';
import './carousel.css'

class Aboutme extends Component {

    render() { 
        return (  
            <div className="aboutme-body">
                <Grid className="aboutme-grid">
                    <Cell col={12}>
                    <Carousel />
                    </Cell>
                </Grid>
                <Grid className="aboutme-grid">
                    <Cell col={6}>
                        <h2>Hobbies</h2>  
                    </Cell>
                    <Cell col={6}>
                        <h2>Characterics</h2>      
                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Aboutme;