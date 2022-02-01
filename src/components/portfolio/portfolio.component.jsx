import React from 'react';
import SwiperCore , {Navigation  , Autoplay } from 'swiper';
import {Swiper , SwiperSlide} from 'swiper/react';


import SectionTop from '../sectiontop/section.component';

import PORTFOLIO_DATA from '../../assets/data/portfolio_data';

SwiperCore.use([Navigation , Autoplay]);

const Portfolio = () => {

    const swiperOption = {
        slidesPerView:4,
        spaceBetween:20,
        loop:true,
        autoplay:{
            delay:2000,
            disableOnInteraction:false
        },
        breakpoints:{
            1080:{
                slidesPerView:4
            },
            800:{
                slidesPerView:3
            },
            600:{
                slidesPerView:2
            },
            200:{
                slidesPerView:1
            }
        }
    }

    return(
        <div id="portfolio" className='portfolio-section'>
            <div className="container">
                <SectionTop Title="นี่คือผลงานของดิชั้น" subTitle="แฟ้มสะสมผลงาน"/>
                <div className="row">
                    <Swiper {...swiperOption}>
                        {PORTFOLIO_DATA.map(data => (
                            <SwiperSlide key={data.id}>
                                <div className="port-content">
                                    <a href={data.github_url}>
                                        <div className="port-image">
                                            <img src={data.image} alt="" />
                                        </div>
                                        <div className="port-name">
                                            <h4>
                                                {data.name}
                                            </h4>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                        
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;