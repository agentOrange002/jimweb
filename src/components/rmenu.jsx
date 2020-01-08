import React, { Component } from 'react';
import MetisMenu from 'react-metismenu';
import './metismenu.css'

const content=[
    {
        icon: 'fas fa-home',
        label: 'Home',
        to: '/app/home',
    },
    {
        icon: 'fas fa-address-card',
        label: 'About Me',
        to: '/app/aboutme',
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
        to: '/app/resume',
    },
    {
        icon: 'fas fa-folder',
        label: 'Projects',
        to: '/app/projects',
    },
    {
        icon: 'fas fa-id-card',
        label: 'Contact Me',
        to: '/app/contactme',
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
