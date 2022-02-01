import React from 'react';

import SHAPE from '../../assets/data/shape.data';

const Shape = () => {
    return(
        <div className='section-icons'>
            {
                SHAPE.map(icon => (
                    <div className={icon.classname} key={icon.id}>
                        <img src={icon.images} alt={icon.alt} />
                    </div>
                ))
            }
        </div>
    )
}
export default Shape;