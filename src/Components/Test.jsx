import React from "react";
import s from './Test.module.scss'

const Test = (props) => {
    return (
        <div>
            <h1 className={s.test}>Hello World</h1>
            <div className={s.elements}>
                <div className={s.test}>
                    1
                </div>
                <div className={s.test}>
                    2
                </div>
                <div className={s.test}>
                    3
                </div>
            </div>
        </div>
    )
}

export default Test
