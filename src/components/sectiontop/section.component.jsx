import React from 'react';

const SectionTop = ({Title , subTitle}) => {
    return ( 
        <div className='row align-items-center'>
            <div className="col-lg-8">
                <div className="flat-title">
                    <h4 className="sub-title mb-4 theme-color">
                        {subTitle} ......
                    </h4>
                    <h2 className="title-section text-color">
                        {Title}
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default SectionTop;