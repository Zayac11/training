import React, {useRef, useState} from 'react';
import ReactToPrint from 'react-to-print';
import picture from '../../assets/images/top7_a17048084f8ba42e2be96a5fcf120fe8.jpg'
import cl from 'classnames'
import s from './Print.module.scss'

import ComponentToPrint from './ComponentToPrint';

const Print = () => {

    const tickets = [
        {title: 'Билет 1', img: picture},
        {title: 'Билет 2', img: picture},
        {title: 'Билет 3', img: picture},
        {title: 'Билет 4', img: picture},
        {title: 'Билет 5', img: picture},
        {title: 'Билет 6', img: picture},
        {title: 'Билет 7', img: picture},
        {title: 'Билет 8', img: picture},
        {title: 'Билет 9', img: picture},
        {title: 'Билет 10', img: picture},
        {title: 'Билет 11', img: picture},
        {title: 'Билет 12', img: picture},
        {title: 'Билет 13', img: picture},
        {title: 'Билет 14', img: picture},
        {title: 'Билет 15', img: picture},
        {title: 'Билет 16', img: picture},
        {title: 'Билет 17', img: picture},
        {title: 'Билет 18', img: picture},
        {title: 'Билет 19', img: picture},
        {title: 'Билет 20', img: picture},
        {title: 'Билет 21', img: picture},
        {title: 'Билет 22', img: picture},
        {title: 'Билет 23', img: picture},
        {title: 'Билет 24', img: picture},
        {title: 'Билет 1', img: picture},
        {title: 'Билет 2', img: picture},
        {title: 'Билет 3', img: picture},
        {title: 'Билет 4', img: picture},
        {title: 'Билет 5', img: picture},
        {title: 'Билет 6', img: picture},
        {title: 'Билет 7', img: picture},
        {title: 'Билет 8', img: picture},
        {title: 'Билет 9', img: picture},
        {title: 'Билет 10', img: picture},
        {title: 'Билет 11', img: picture},
        {title: 'Билет 12', img: picture},
        {title: 'Билет 13', img: picture},
        {title: 'Билет 14', img: picture},
        {title: 'Билет 15', img: picture},
        {title: 'Билет 16', img: picture},
        {title: 'Билет 17', img: picture},
        {title: 'Билет 18', img: picture},
        {title: 'Билет 19', img: picture},
        {title: 'Билет 20', img: picture},
        {title: 'Билет 21', img: picture},
        {title: 'Билет 22', img: picture},
        {title: 'Билет 23', img: picture},
        {title: 'Билет 24', img: picture},
        {title: 'Билет 1', img: picture},
        {title: 'Билет 2', img: picture},
        {title: 'Билет 3', img: picture},
        {title: 'Билет 4', img: picture},
        {title: 'Билет 5', img: picture},
        {title: 'Билет 6', img: picture},
        {title: 'Билет 7', img: picture},
        {title: 'Билет 8', img: picture},
        {title: 'Билет 9', img: picture},
        {title: 'Билет 10', img: picture},
        {title: 'Билет 11', img: picture},
        {title: 'Билет 12', img: picture},
        {title: 'Билет 13', img: picture},
        {title: 'Билет 14', img: picture},
        {title: 'Билет 15', img: picture},
        {title: 'Билет 16', img: picture},
        {title: 'Билет 17', img: picture},
        {title: 'Билет 18', img: picture},
        {title: 'Билет 19', img: picture},
        {title: 'Билет 20', img: picture},
        {title: 'Билет 21', img: picture},
        {title: 'Билет 22', img: picture},
        {title: 'Билет 23', img: picture},
        {title: 'Билет 24', img: picture},
        {title: 'Билет 1', img: picture},
        {title: 'Билет 2', img: picture},
        {title: 'Билет 3', img: picture},
        {title: 'Билет 4', img: picture},
        {title: 'Билет 5', img: picture},
        {title: 'Билет 6', img: picture},
        {title: 'Билет 7', img: picture},
        {title: 'Билет 8', img: picture},
        {title: 'Билет 9', img: picture},
        {title: 'Билет 10', img: picture},
        {title: 'Билет 11', img: picture},
        {title: 'Билет 12', img: picture},
        {title: 'Билет 13', img: picture},
        {title: 'Билет 14', img: picture},
        {title: 'Билет 15', img: picture},
        {title: 'Билет 16', img: picture},
        {title: 'Билет 17', img: picture},
        {title: 'Билет 18', img: picture},
        {title: 'Билет 19', img: picture},
        {title: 'Билет 20', img: picture},
        {title: 'Билет 21', img: picture},
        {title: 'Билет 22', img: picture},
        {title: 'Билет 23', img: picture},
        {title: 'Билет 24', img: picture},
    ]

    const componentRef = useRef(null);
    const [size, setSize] = useState('small')

    return (
        <div>
            <ReactToPrint
                trigger={() => <button>Print this out!</button>}
                content={() => componentRef.current}
            />

            <button className={cl(s.button, size==='large' && s.active)} onClick={() => setSize('large')}>large</button>
            <button className={cl(s.button, size==='medium' && s.active)} onClick={() => setSize('medium')}>medium</button>
            <button className={cl(s.button, size==='small' && s.active)} onClick={() => setSize('small')}>small</button>

            <ComponentToPrint size={size} tickets={tickets} ref={componentRef} />
        </div>
    );
};

export default Print
