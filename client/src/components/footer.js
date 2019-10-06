import React from 'react';
import facebook from './imagecomp/facebook.png';
import twitter from './imagecomp/twitter.png';
import linkedin from './imagecomp/linkedin.png';

class Footer extends React.Component {
    render() {
        return (
            <footer class="footer">
            <div class="content has-text-left">
                <p className="footer-text">
                
                FIA Gospel Productions, Atlanta Sub-Factor, FIA Broadcast Network, WFIA, ISE, SRM, KCS2, FIA 
                Sound Reinforcement <br/> as well as other affiliates are subsidiaries of FIA Corporation. All inquiries 
                can be made to webmaster@fiaworld.com <br/> © FIA Corporation
                </p>

                <p>
                    <a href='https://www.facebook.com/FIA.Broadcast.Network?fref=ts'><img src={facebook} alt="facebook" 
                    className="icon"/></a>
                    <a href="https://twitter.com/fbn99"><img src={twitter} alt="twitter" className="icon"/></a>
                    <a href="https://www.linkedin.com/in/dr-solomon-pollard-jr-33888026/"><img src={linkedin} 
                    alt="linkedin" className="icon"/></a>
                </p>
            </div>
            </footer>
        )
    }

}

export default Footer;