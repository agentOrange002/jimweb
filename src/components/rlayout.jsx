import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './main';
import Rfooter from './rfooter';
import Rmenu from './rmenu';

class Rlayout extends Component {
   
    render() { 
        return ( 
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title="My Portfolio" scroll>
                        <Navigation>
                            <a href="/app/home">Home</a>
                            <a href="/app/aboutme">About Me</a>                            
                            <a href="/app/resume">Resume</a>
                            <a href="/app/projects">Projects</a>
                            <a href="/app/contactme">Contact Me</a>     
                        </Navigation>
                    </Header>
                    <Drawer className="drawer">
                        <div className="title-drawer" >
                           My Portfolio 
                        </div>
                        <Rmenu />
                        <Navigation >
                            {/* <a  href="/">Home</a>
                            <a href="/aboutme">About Me</a>                            
                            <a href="/resume">Resume</a>
                            <a href="/projects">Projects</a>
                            <a href="/contactme">Contact Me</a> */}
                            
                        </Navigation>
                    </Drawer>
                    <Content>
              
                            <main className="container">
                                <div className="page-content" >
                                <Main />
                                </div>   
                            </main>
                                        
                    </Content>                    
                    <Rfooter/>                                    
                </Layout>               
            </div>          
    );
    }
}
 
export default Rlayout;
