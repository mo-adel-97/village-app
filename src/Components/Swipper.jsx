import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../Images/gm3ya1.jpg"
import img2 from "../Images/gm3ya2.jpg"
import img3 from "../Images/gm3ya3.jpg"
import img4 from "../Images/gm3ya4.jpg"
import img5 from "../Images/gm3ya51.jpg"
import img6 from "../Images/gm3ya6.jpg"
import "./swipper.css"
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
const Swipper =()=>{
    return(
    <Swiper
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
    <img src={img6} alt="image..." />
    </SwiperSlide>
    <SwiperSlide>Slide 7</SwiperSlide>
    <SwiperSlide>Slide 8</SwiperSlide>
    <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    )
}
export default Swipper;