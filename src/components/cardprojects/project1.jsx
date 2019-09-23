import React, { Component } from 'react';
import {Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Project1 extends Component {
  
    render() { 
        return (  
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '176px', 
                background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png) center / cover' }}>
                Jimboy Web Portfolio
                </CardTitle>
                <CardText className="cardtext-content">
                As a java developer, it is essential for someone like me to have a website portfolio to display my best work and provide others with an outlet to reach me. An updated website portfolio can be used to help me gain employment, find new opportunities, and become a freelancer.
                </CardText>
                <CardActions border>
                    <Button colored>Github</Button>
                    <Button colored>site</Button>                    
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        );
    }
}
 
export default Project1;