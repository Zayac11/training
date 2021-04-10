import React from 'react'
import cl from 'classnames'
import './TicketItem.scss'

const TicketItem = (props) => {
    let {size, tickets} = props

    return (
        <div className={cl('ticketItem', `ticketItem__${size}`)}>
            {
                tickets.map((ticket, index) => {
                    return (
                        <div key={index} className={`ticketItem__ticketLayout ticketItem__ticketLayout__${size}`}>
                            {/*<div className={'ticketItem__ticketLayout__title'}>{ticket.title}</div>*/}
                            {/*<img className={`ticketItem__ticketLayout__img__${size}`} src={ticket.img} alt="img"/>*/}
                            {index}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TicketItem
