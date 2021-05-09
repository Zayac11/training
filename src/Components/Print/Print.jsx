import React, {useRef, useState} from 'react';
import ReactToPrint from 'react-to-print';
import cl from 'classnames'
import s from './Print.module.scss'
import ComponentToPrint from './ComponentToPrint';
import border from '../../assets/images/border.svg'

const Print = () => {

    const tickets = [
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
        {title: 'Название выставки'},
    ]

    const componentRef = useRef(null);
    const [size, setSize] = useState('medium')

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
                                <div>
                                    {t.title}
                                </div>
                                <div className={s.ticketImageContainer}>
                                    <img className={s.border} src={border} alt="border"/>
                                    <img className={s.qrcode} src="http://qrcoder.ru/code/?vk.com%2Falexgeniusman&6&0" width="198" height="198" border="0" title="QR код"/>
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
