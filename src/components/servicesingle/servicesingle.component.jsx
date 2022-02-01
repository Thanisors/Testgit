import React from 'react';

const ServiceSingle = ({data}) => {
    return(
        <div className='col-lg-4'>
            <div className={data.classname}>
                <div className="featured-post mb-5">
                    <img src={data.image} alt="" />
                </div>
                <h3 className="title mb-2">
                    {data.title}
                </h3>
                <p>{data.text}</p>
            </div>
        </div>
    )
}
export default ServiceSingle;