import React from "react";
import s from './QrGenerator.module.scss'

let QRCode = require('qrcode.react');

const QrGenerator = (props) => {
    return (
        <div className={s.container}>
            <QRCode
                value={'https://vk.com/alexgeniusman'}
                size={500}
            />
        </div>
    )
}

export default QrGenerator
