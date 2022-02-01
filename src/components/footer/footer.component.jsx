import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return(
        <footer className='footer'>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="copyright">
                                &copy; 2022 POrtfolio , Create by Thanisorn
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <ul className="footer-widget-nav">
                            <li>
                                <HashLink smooth to={"#home"}>home</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to={"#about"}>about</HashLink>
                            </li>
                            <li>
                                 <HashLink smooth to={"#service"}>service</HashLink>
                            </li>
                            <li>
                                <HashLink smooth to={"#resume"}>resume</HashLink>
                            </li>
                            <li>
                    <HashLink smooth to={"#portfolio"}>portfolio</HashLink>
                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;