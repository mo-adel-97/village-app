import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../Images/anshta1.jpg"
import img2 from "../Images/anshta2.jpg"
import img3 from "../Images/anshta3.jpg"
import img4 from "../Images/anshta4.jpg"
import img5 from "../Images/anshta5.jpg"

import "./swipper.css"
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
const Swipper2 =()=>{
    return(
    <Swiper
    style={{
        width:" 350px",
        height: "500px"
    }}
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide>
        <img src={img1} alt="image..." />
    </SwiperSlide>
    <SwiperSlide>
    <img src={img2} alt="image..." />
    </SwiperSlide>
    <SwiperSlide>
    <img src={img3} alt="image..." />
    </SwiperSlide>
    <SwiperSlide>
    <img src={img4} alt="image..." />
    </SwiperSlide>
    <SwiperSlide>
    <img src={img5} alt="image..." />
    </SwiperSlide>
    <SwiperSlide>
     Slide 6
    </SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    )
}
export default Swipper2;