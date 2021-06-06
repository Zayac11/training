import React from 'react'
import s from './Burger.module.scss'
import {NavLink} from 'react-router-dom'
import cl from 'classnames'

const BurgerMenu = ({active, setActive}) => {
    return (
        <div className={active ? cl(s.menu, s.active) : s.menu} onClick={() => setActive(false)}>
            <div className={s.blur} />
            <div className={s.content}>
                <div>
                    <NavLink to={'/search'}>search</NavLink>
                </div>
                <div>
                    <NavLink to={'/print'}>print</NavLink>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
