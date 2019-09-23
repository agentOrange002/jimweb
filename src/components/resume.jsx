import React, { Component } from 'react';
import Downloadresume from './downloadresume';
import {Link} from 'react-router-dom';
import {Grid,Cell} from 'react-mdl';
import rpic from './resume.png';
import Education from './education';
import Workexperince from './workexperience';
import Skills from './skills';

class Resume extends Component {

    render() { 
        return (  
            // <div id="container">            
            //  <h3>Download Resume using Button</h3>
            //  <button onClick={Downloadresume}>Download</button>
            // <p/>
            //  <h3>Download Resume using Link</h3>
            // <Link to="/files/resume2019.pdf" target="_blank" download>Download</Link>         
            //   </div>
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div className="resume-img">
                        <img src={rpic} alt="avatar">
                       </img>
                        </div>
                        <h2>
                            Nehemias C. Belong Jr.
                        </h2>
                        <h4>
                            Java Developer
                        </h4>
                        <hr />
                        <p>
                        Hi, I'm Jimboy. A self taught java developer based in La Carlota City, Philippines. I have 5 years of experience in developing software and web application, mainly desktop applications. I'm the kind of guy who really loves java.  I'm profficient in ReactJs as my Front-End in Web and Spring Rest API as my Back-End. With these two technology I can build better a web application.
                        </p>
                        <hr />
                        <h5>Address</h5>
                        <p>Philippines</p>
                        <h5>Phone</h5>
                        <p>Sun: 09233139744 <br /> Globe: 09065070394</p>
                       
                        <h5>Email</h5>
                        <p>nehemiasbelong@gmail.com</p>

                        <hr />

                        <h4>You can download my resume in pdf file.</h4>
                        <p>Click this button below</p>
                        <button onClick={Downloadresume}>Download</button>
            
                        <h4>Check this link below.</h4>
                        <Link to="/files/resume2019.pdf" target="_blank" download>Download</Link> 


                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                        startdate={2009} 
                        enddate={2010} 
                        schoolname={"La Consolacion College-Bacolod"} 
                        schooldesc={"Bachelor of Science in Information Management"}
                        />
                        <Education 
                        startdate={2006} 
                        enddate={2009} 
                        schoolname={"La Consolacion College-La Carlota"} 
                        schooldesc={"Bachelor of Science in Information Management"}
                        />
                        <Education 
                        startdate={2005} 
                        enddate={2005} 
                        schoolname={"AMA Computer College-Bacolod"} 
                        schooldesc={"Bachelor of Science in Computer Science"}
                        />
                        <hr />
                        <h2>Work Experience</h2>
                        <Workexperince 
                        startdate={"July 28, 2018"}
                        enddate={"April 25, 2019"}
                        employer={"Bacolod Columbia Marketing Inc."}
                        jobdesc={"IT Specialist"}
                        />
                        <Workexperince 
                        startdate={"February 20, 2017"}
                        enddate={"March 20, 2018"}
                        employer={"Macro Distributor Inc."}
                        jobdesc={"IT Support II"}
                        />

                        <Workexperince 
                        startdate={"January 4, 2017"}
                        enddate={"February 20, 2017"}
                        employer={"Hexagon Group of Companies"}
                        jobdesc={"Business Systems Support"}
                        />

                        <Workexperince 
                        startdate={"January 4, 2016"}
                        enddate={"June 20, 2017"}
                        employer={"Central Negros Power Reliability Inc."}
                        jobdesc={"IT Specialist"}
                        />

                        <Workexperince 
                        startdate={"January 4, 2016"}
                        enddate={"June 20, 2017"}
                        employer={"TeamMicro Credit Corporation"}
                        jobdesc={"IT Support"}
                        />

                        <Workexperince 
                        startdate={"December 10, 2010"}
                        enddate={"April 20, 2013"}
                        employer={"Munsterific Convenience Store - Munster Inc"}
                        jobdesc={"IT"}
                        />  
                        <hr />
                        <h2>Skills</h2>

                        <Skills 
                        skill={"HTML/CSS"}
                        progress={80}
                        />

                        <Skills 
                        skill={"ReactJS"}
                        progress={100}
                        />

                        <Skills 
                        skill={"Spring MVC Framework"}
                        progress={90}
                        />

                        <Skills 
                        skill={"Spring Boot"}
                        progress={80}
                        />

                        <Skills 
                        skill={"Swing Framework"}
                        progress={100}
                        />

                        <Skills 
                        skill={"Jasper Report"}
                        progress={100}
                        />

                        <Skills 
                        skill={"MySQL"}
                        progress={100}
                        />  

                    </Cell>
                </Grid>

            </div>
        );
    }
}
 
export default Resume;