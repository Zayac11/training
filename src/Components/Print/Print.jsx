import React, {useRef, useState} from 'react';
import ReactToPrint from 'react-to-print';
import cl from 'classnames'
import s from './Print.module.scss'
import ComponentToPrint from './ComponentToPrint';
import border from '../../assets/images/border.svg'

let QRCode = require('qrcode.react')

const Print = () => {

    const tickets = [
        {title: 'Билет 1'},
        {title: 'Билет 2'},
        {title: 'Билет 3'},
        {title: 'Билет 4'},
        {title: 'Билет 5'},
        {title: 'Билет 6'},
        {title: 'Билет 7'},
        {title: 'Билет 8'},
        {title: 'Билет 9'},
        {title: 'Билет 10'},
        {title: 'Билет 11'},
    ]

    const componentRef = useRef(null);
    const [size, setSize] = useState('large')

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />

            <button className={cl(s.button, size==='large' && s.active)} onClick={() => setSize('large')}>large</button>
            <button className={cl(s.button, size==='medium' && s.active)} onClick={() => setSize('medium')}>medium</button>
            <button className={cl(s.button, size==='small' && s.active)} onClick={() => setSize('small')}>small</button>

            <div className={s.ticketItemsContainer}>
                {
                    tickets.map((t, index) => {
                        return (
                            <div className={s.ticketItem} key={index}>
                                    <div className={s.title}>
                                        {t.title}
                                    </div>
                                    <p className={s.description}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className={s.ticketImageContainer}>
                                        <img className={s.border} src={border} alt="border"/>
                                        <QRCode
                                            className={s.qrcode}
                                            value={'https://vk.com/alexgeniusman'}
                                            size={160}
                                        />
                                    </div>
                            </div>
                        )
                    })
                }
            </div>

            <ComponentToPrint size={size} tickets={tickets} ref={componentRef} />
        </div>
    );
};

export default Print
