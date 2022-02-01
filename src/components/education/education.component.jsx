import React from 'react';
import SectionTop from '../sectiontop/section.component';

import EDUCATION_DATA from '../../assets/data/education.data';

const Education = () => {
    return(
        <div id="resume" className='education'>
            <div className="container">
                <SectionTop subTitle="ประวัติการศึกษา" Title="การศึกษา & ประสบการณ์การทำงาน" />

                <div className="row content-inside">

                    {
                        EDUCATION_DATA.map(data => (
                            <div className="col-lg-6" key={data.id}>
                        <div className="experience-box">
                            <div className={`box-inner ${data.color}`}>
                                <h3 className="content-title">
                                {data.Title}
                                </h3>
                                <div className="sub-content-title">{data.subTitle}
                                </div>
                                <p>
                                   {data.text}
                                </p>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    
                    


                </div>
            </div>
        </div>
    )
}
export default Education;