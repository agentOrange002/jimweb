import React, { Component } from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
import Bok from './bok.png'


class Contactme extends Component {
   
    render() { 
        return ( 
            <div className="contact-body">
             <Grid className="contact-grid">
              <Cell col={6}>
              <h2>Jimboy</h2>
              <img className="contact-img" src ={Bok}
                alt="avatar"               
              />
              <p>
                Need a better web application? <br /><br /><br />
                Please let me know!
             </p>
              </Cell>

              <Cell col={6}> 
                <h2>Contact Me</h2>
                <hr/>

                <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent className="contact-lic" >
                      <i className="fa fa-phone-square" aria-hidden="true"/>
                      Mobile No. : 09233139744
                      </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="contact-lic" >
                      <i className="fa fa-fax" aria-hidden="true"/>
                      Telephone No. : (34)-735-1365
                      </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="contact-lic" >
                      <i className="fa fa-envelope-square" aria-hidden="true"/>
                      E-mail : nehemiasbelong@gmail.com
                      </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="contact-lic">
                    <i className="fa fa-skype" aria-hidden="true"/>
                      Skype ID: nehemias.belong
                      </ListItemContent>
                  </ListItem>
                </List>
                </div>
                
               </Cell>
             </Grid>
            </div>
         );
    }
}
 
export default Contactme;