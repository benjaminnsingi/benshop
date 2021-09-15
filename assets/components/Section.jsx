import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Section = () => {
    return (
       <div className="section-pad">
           <Swiper
               // install Swiper modules
               modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
               spaceBetween={30}
               loop={true}
               navigation
               autoplay={{"delay": 5500, "disableOnInteraction": false}}
               autoHeight={true}
           >
               <SwiperSlide>
                   <div>
                       <img src="./images/photo-1a.jpeg" alt=""/>
                   </div>
                   <div className="title">
                       <h1>Welcome1</h1>
                       <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor commodi dignissimos culpa, eaque eos necessitatibus possimus veniam, cupiditate rerum deleniti? Libero, ducimus error? Beatae velit dolore sint explicabo! Fugit.
                       </p>
                   </div>
               </SwiperSlide>
               <SwiperSlide>
                   <div>
                       <img src="./images/photo-1b.jpeg" alt=""/>
                   </div>
                   <div className="title">
                       <h1>Welcome2</h1>
                       <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor commodi dignissimos culpa, eaque eos necessitatibus possimus veniam, cupiditate rerum deleniti? Libero, ducimus error? Beatae velit dolore sint explicabo! Fugit.
                       </p>
                   </div>
               </SwiperSlide>
               <SwiperSlide>
                   <div>
                       <img src="./images/photo-1c.jpeg"/>
                   </div>
                   <div className="title">
                       <h1>Welcome3</h1>
                       <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor commodi dignissimos culpa, eaque eos necessitatibus possimus veniam, cupiditate rerum deleniti? Libero, ducimus error? Beatae velit dolore sint explicabo! Fugit.
                       </p>
                   </div>
               </SwiperSlide>
           </Swiper>
       </div>
    )
}

export default Section;