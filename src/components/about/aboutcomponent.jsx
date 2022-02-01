import React from 'react';
import Aboutme from '../aboutme/aboutme.component';
import Shape from '../shape/shape.component';
import NumberCount from '../numbercount/numbercount.component';


const About = () => {
    return(
        <div className='about-me position-relative' id="about">
            <Shape />

            <div className="container">
                <div className="row position-relative">
                    <Aboutme/>
                    <div className="fact">
                        <NumberCount/>

                        <div className="btn-contact bg-s1 text-center">
                            <h4 className="title text-color">
                                ติดต่อดูผลงานเพิ่มเติมได้ที่
                                
                            </h4>
                            <a href="mailto:yourmail@mail.com" className='email'>yourmail@mail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="featured-post">
                <img src="https://images-ext-2.discordapp.net/external/-7MEglxTuUBIni46azJgDdy3HXDyy6yuGElr2Hidb_4/https/i3.fpic.cc/file/img-b1/2022/01/19/09.png" alt="" />
            </div>
        </div>
    )
}
export default About;