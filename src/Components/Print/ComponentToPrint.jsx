import React from 'react'
import s from './Print.module.scss'
import TicketItem from "./TicketItem";

class ComponentToPrint extends React.Component {
    render() {
        return (
            <div className={s.container}>
                <TicketItem tickets={this.props.tickets} size={this.props.size} />
            </div>
        )
    }
}

export default ComponentToPrint
