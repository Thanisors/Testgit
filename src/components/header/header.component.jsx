import React , {useState , useEffect} from 'react';
import { HashLink } from 'react-router-hash-link';

import Mobilemenu from '../mobilemenu/mobilemenu.component';

const Header = () => {

    const [scroll , setScroll] = useState(0);
    const [headerTop , setHeaderTop] = useState(0);


    useEffect(() => {
        const header = document.getElementById('header');
        setHeaderTop(header.offsetTop);

        window.addEventListener('scroll' , handleScroll);

        return () => {
            window.removeEventListener('scroll' , handleScroll);
        }
    } , [])

    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    const triggerMobilemenu = () => {
        const offcanvasMobilemenu = document.querySelector('#offcanvas-mobile-menu');
        offcanvasMobilemenu.classList.add('active');
    }


    return(

       <header id="header" className={`header header-style ${scroll > headerTop ? "stick" : ""}`}> 
           <div className="container">
                <div className="flex-header d-flex justify-content-between align-items-center">
                    <div className="socials-list">
                        <a href="">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-line"></i>
                        </a>
                        <a href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>

                    <div className="content-menu d-lg-flex">
                        <div className="nav-wrap">
                            <nav className="mainnav">
                                <ul className="menu">
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
                        </div>

                        <div className="mobile-off-canvas d-block d-lg-none">
                            <button className="mobile-aside-button" onClick={() => triggerMobilemenu()}>
                                <i className="fad fa-bars">

                                </i>
                            </button>
                        </div>

                    </div>
                    <Mobilemenu/>
                </div>
           </div>
       </header>
    )
}
export default Header;