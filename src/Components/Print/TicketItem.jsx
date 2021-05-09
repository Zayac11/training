import React, {useEffect, useState} from 'react'
import cl from 'classnames'
import './TicketItem.scss'
import border from "../../assets/images/border.svg";
let QRCode = require('qrcode.react');

const TicketItem = (props) => {
    let {size, tickets} = props
    const [sizeValue, setSizeValue] = useState(240)

    useEffect(()=> {
        if(size === 'medium') {
            setSizeValue(240)
        }
        else if (size === 'medium') {
            setSizeValue(240)
        }
        else {
            setSizeValue(240)
        }
    }, [size])

    return (
        <div className={cl('ticketItem', `ticketItem__${size}`)}>
            {
                tickets.map((ticket, index) => {
                    return (
                        <div key={index} className={`ticketItem__ticketLayout ticketItem__ticketLayout__${size}`}>
                            <div className={`ticketItem__ticketLayout__${size}__content`}>
                                <div className={`ticketItem__ticketLayout__${size}__title`}>{ticket.title}</div>
                                <p className={`ticketItem__ticketLayout__${size}__description`}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className={`ticketItem__ticketLayout__${size}__imgContainer`}>
                                    <img className={`ticketItem__ticketLayout__${size}__border`} src={border} alt="border"/>
                                    <QRCode
                                        className={`ticketItem__ticketLayout__${size}__image`}
                                        value={'https://vk.com/alexgeniusman'}
                                        size={160}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TicketItem
