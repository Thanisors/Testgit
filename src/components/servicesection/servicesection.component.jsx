import React from 'react';

import SERVICES_DATA from '../../assets/data/services.data';
import ServiceSingle from '../servicesingle/servicesingle.component';

const ServiceSection = () => {
    return(
        <div id='service' className='experienced'>
            <div className="container">
                <div className="flat-title">
                    <h2 className="title-section text-center">
                        ฉันเชี่ยวชาญเรื่อง
                    </h2>
                </div>

                <div className="row">
                    {
                        SERVICES_DATA.map(data => (
                            <ServiceSingle key={data.id} data={data}/>
                        ))
                    }
                </div>



            </div>
        </div>
    )
}
export default ServiceSection;