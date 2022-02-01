import React from 'react';
import MobileMenuNav from '../mobilemenunav/mobilemenunavcomponent';

const Mobilemenu = () => {

    const closeMobilemenu = () => {
        const offcanvasMobilemenu = document.querySelector('#offcanvas-mobile-menu');
        offcanvasMobilemenu.classList.remove('active');
    }
    return(
        <div className='offcanvas-mobile-menu' id="offcanvas-mobile-menu">
            <button className="offcanvas-mobile-close" 
            id="offcanvas-mobile-close"
            onClick={() => closeMobilemenu()}
            >
                <i className="fad fa-times"></i>
            </button>

            <div className="offcanvas-wrapper">
                <div className="offcanvas-inner-content">
                    <MobileMenuNav />
                </div>
            </div>
        </div>
    )
}
export default Mobilemenu;