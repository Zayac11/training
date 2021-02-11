import React from "react";
import {compose} from "redux";

const TextError = (props) => {
    return (
        <div className={'form__error'}>
            {props.children}
        </div>
    )
}

export default compose(

)(TextError)
