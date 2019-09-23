import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import Jimboy from './Jimboy.png'

class Landingpage extends Component {
    state = {  }
    render() { 
        return (  
            <div style={{width: '100$', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img align="middle"
                        // src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/-26-512.png" 
                        src={Jimboy}
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Java Developer</h1>
                            <hr/>
                            <p> HTML/CSS | ReactJS | Spring Framework | Jasper Report | MySQL</p>
                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                 {/* Github */}
                                 <a href="/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                                 {/* Facebook */}
                                 <a href="/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square"  aria-hidden="true"/>
                                </a>

                                 {/* Stackoverflow */}
                                 <a href="/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-stack-overflow"  aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
 
export default Landingpage;