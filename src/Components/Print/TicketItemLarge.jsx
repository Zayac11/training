import React from 'react'
import cl from 'classnames'
import './TicketItem.scss'
import illustration from './../../assets/images/illustration.svg'
import s from "./TicketItemLarge.module.scss";
let QRCode = require('qrcode.react');

const TicketItemLarge = (props) => {
    let {size, tickets} = props

    return (
        <div className={cl('ticketItem', `ticketItem__${size}`)}>
            {
                tickets.map((ticket, index) => {
                    return (
                        <div key={index} className={`ticketItem__ticketLayout ticketItem__ticketLayout__${size}`}>
                            <div className={s.content}>
                                <div className={s.top}>
                                    <img className={s.illustration} src={illustration} alt="border"/>
                                    <div className={s.ticketImageContainer}>
                                        <QRCode
                                            className={s.qrcode}
                                            value={'https://vk.com/alexgeniusman'}
                                            size={290}
                                        />
                                    </div>
                                </div>
                                <div className={s.title}>
                                    {ticket.title}
                                </div>
                                <p className={s.description}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TicketItemLarge
