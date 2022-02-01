import React from 'react';
import SectionTop from '../sectiontop/section.component';

const Aboutme = () => {
    return(
        <div className='col-lg-7'>
            <SectionTop Title="สวัสดีจ้าาาาาา เฮลโหลลล " subTitle="เกี่ยวกับฉัน" />

            <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Illo incidunt, itaque pariatur suscipit neque qui accusamus obcaecati fuga! 
                    Natus repellat ullam molestiae illo id doloremque blanditiis non sed laboriosam recusandae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nostrum rem vero atque laborum ad enim sunt at laboriosam animi, quaerat velit cumque. 
                    Voluptas ipsa consequatur exercitationem? Assumenda minus consequuntur voluptates?</p>
            </div>

            <div className="email position-relative">
                yourmail@email.com
            </div>
        </div>
    )
}
export default Aboutme;