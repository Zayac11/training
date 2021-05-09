import React from 'react'
import s from './Print.module.scss'
import TicketItem from "./TicketItem";
import TicketItemLarge from "./TicketItemLarge";

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div className={s.container}>
                {
                    this.props.size === 'large'
                        ?
                        <TicketItemLarge tickets={this.props.tickets} size={this.props.size}/>
                        :
                        <TicketItem tickets={this.props.tickets} size={this.props.size}/>
                }
            </div>
        )
    }
}

export default ComponentToPrint
