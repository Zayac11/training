import React, {useEffect, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss'
import 'swiper/swiper-bundle.css'
import s from './Swiper.module.scss'
import SwiperExample from './SwiperExample/SwiperExample'
import SwiperCore, {
    EffectCards
} from 'swiper';

SwiperCore.use([EffectCards]);

const SwiperPage = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        console.log('activeIndex', activeIndex)
    }, [activeIndex])
    return (
        <Swiper
            effect={'cards'}
            // spaceBetween={50}
            // slidesPerView={1}
            grabCursor={true}
            className="mySwiper"
            // onSlideChange={(e) => {
            //     console.log('slide change', e)
            //     setActiveIndex(e.activeIndex)
            // }}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><SwiperExample number={1}/></SwiperSlide>
            <SwiperSlide><SwiperExample number={2}/></SwiperSlide>
            <SwiperSlide><SwiperExample number={3}/></SwiperSlide>
            <SwiperSlide><SwiperExample number={4}/></SwiperSlide>
        </Swiper>
    )
}

export default SwiperPage