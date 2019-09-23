import React, { Component } from 'react';
import {Footer,FooterSection,FooterDropDownSection,FooterLinkList} from 'react-mdl';

class Rfooter extends Component {

    render() { 
        return ( 
            <Footer className="footer" size="mega">
                <FooterSection type="middle">
                    <FooterDropDownSection title="Features">
                        <FooterLinkList>
                            <a href="/">About Me</a>
                            <a href="/">Resume</a>
                            <a href="/">Projects</a>
                            <a href="/">Contact Me</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Details">
                        <FooterLinkList>
                            <a href="/">Programming Languages</a>
                            <a href="/">Tools</a>
                            <a href="/">Resources</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="Technology">
                        <FooterLinkList>
                            <a href="/">ORM's</a>
                            <a href="/">Frameworks</a>                            
                        </FooterLinkList>
                    </FooterDropDownSection>
                    <FooterDropDownSection title="FAQ">
                        <FooterLinkList>
                            <a href="/">Questions</a>
                            <a href="/">Answers</a>
                            <a href="/">Contact Us</a>
                        </FooterLinkList>
                    </FooterDropDownSection>
                </FooterSection>
                <FooterSection type="bottom" logo="Grimmjaw Solutions">
                    <FooterLinkList>
                        <a href="/">Help</a>
                        <a href="/">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
         );
    }
}
 
export default Rfooter;