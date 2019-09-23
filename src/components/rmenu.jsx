import React, { Component } from 'react';
import MetisMenu from 'react-metismenu';

const content=[
    {
        icon: 'fas fa-home',
        label: 'Home',
        to: '/',
    },
    {
        icon: 'fas fa-address-card',
        label: 'About Me',
        to: '/aboutme',
        // content: [
        //     {
        //         icon: 'fas fa-address-card',
        //         label: 'About Me',
        //         to: '/aboutme',
        //     },
        // ],
    },
    {
        icon: 'fas fa-file',
        label: 'Resume',
        to: '/resume',
    },
    {
        icon: 'fas fa-folder',
        label: 'Projects',
        to: '/projects',
    },
    {
        icon: 'fas fa-id-card',
        label: 'Contact Me',
        to: '/contactme',
    },
];

class Rmenu extends Component {
    
    render() { 
        return ( 
            <MetisMenu content={content} activeLinkFromLocation />
         );
    }
}
 
export default Rmenu;
