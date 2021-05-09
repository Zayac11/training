import React from 'react'
import cl from 'classnames'
import './TicketItem.scss'
import border from "../../assets/images/border.svg";
let QRCode = require('qrcode.react');

const TicketItem = (props) => {
    let {size, tickets} = props

    return (
        <div className={cl('ticketItem', `ticketItem__${size}`)}>
            {
                tickets.map((ticket, index) => {
                    return (
                        <div key={index} className={`ticketItem__ticketLayout ticketItem__ticketLayout__${size}`}>
                            <div className={`ticketItem__ticketLayout__${size}__title`}>{ticket.title}</div>
                            <p className={`ticketItem__ticketLayout__${size}__description`}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className={`ticketItem__ticketLayout__${size}__imgContainer`}>
                                <img className={`ticketItem__ticketLayout__${size}__border`} src={border} alt="border"/>
                                <QRCode
                                    className={`ticketItem__ticketLayout__${size}__image`}
                                    value={'https://vk.com/alexgeniusman'}
                                    size={240}
                                />
                                {/*<img className={`ticketItem__ticketLayout__${size}__image`} src="http://qrcoder.ru/code/?vk.com%2Falexgeniusman&6&0" width="198" height="198" border="0" title="QR код"/>*/}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TicketItem
