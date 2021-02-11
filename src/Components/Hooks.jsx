import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../redux/test-reducer";
import {compose} from "redux";
import {withRouter} from "react-router";

const Hooks = (props) => {

    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const message = useSelector(state => state.test.message);

    useEffect(() => {

        console.log(props.history)
    });

    function handle() {
        dispatch(setToken())
    }

    return (
        <div>
            {message}

            <button onClick={() => setCount(count+1)}>Нажать</button>

            <div>
                Я нажал {count} раз
            </div>

        </div>
    )
}

export default compose(
    withRouter,
)(Hooks)
