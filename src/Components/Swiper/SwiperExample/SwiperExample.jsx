import React, {useEffect} from 'react'
import s from './SwiperExample.module.scss'
import {NavLink} from 'react-router-dom'

const SwiperExample = ({number}) => {
    useEffect(() => {
        console.log({number})
    }, [])
    return (
        <div className={s.container}>
            Swiper
            text
            <a href='https://vk.com'>vk.com</a>
            <NavLink to={'/print'}>to print</NavLink>
            <div>
                <button onClick={() => alert('click')}>button</button>
            </div>
        </div>
    )
}

export default SwiperExample