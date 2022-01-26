import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss'
import s from './Swiper.module.scss'
import SwiperExample from './SwiperExample/SwiperExample'

const SwiperPage = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(e) => console.log('slide change', e)}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><SwiperExample/></SwiperSlide>
            <SwiperSlide><SwiperExample/></SwiperSlide>
            <SwiperSlide><SwiperExample/></SwiperSlide>
            <SwiperSlide><SwiperExample/></SwiperSlide>
        </Swiper>
    )
}

export default SwiperPage