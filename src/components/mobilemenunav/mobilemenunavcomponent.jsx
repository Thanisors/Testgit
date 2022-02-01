import React from 'react';
import {HashLink} from 'react-router-hash-link';

const MobileMenuNav = () => {
    return (
        <nav className='offcanvas-navigation'>
            <ul>
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
        </nav>
    )
}
export default MobileMenuNav;