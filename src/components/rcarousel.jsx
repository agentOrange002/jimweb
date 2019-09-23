import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import Pic1 from './carouselpics/CITI3.jpg';
import Pic2 from './carouselpics/VMS.jpg';
import Pic3 from './carouselpics/S3.jpg';

const Rcarousel = () => {
    return ( 
        <Carousel autoPlay interval={10000}>
            <div>
            <img src={Pic1} alt="text"/>
            <p className="legend">Citi Loan Management System</p>
            </div>
            <div>
            <img src={Pic2} alt="text"/>
            <p className="legend">Vendor Management System</p>
            </div>
            <div>
            <img src={Pic3} alt="text"/>
            <p className="legend">JSOGen BCP Tool</p>
            </div>
            
           
            
        </Carousel>
        
     );
}
 
export default Rcarousel;