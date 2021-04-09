import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "../redux/test-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {FormTest} from "../hoc/FormTest";
import Formik from "./Formik";
import {format} from "date-fns";

const Hooks = (props) => {

    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const message = useSelector(state => state.test.message);

    useEffect(() => {
        props.setState({
            name: 'hisik',
            address: 'asd',
            email: 'as@as.ru',
        })
    }, []);

    useEffect(() => {

        console.log(props.history)
    });
    const onSubmit = (values) => {
        console.log(values)
    }




    return (
        <div>
            {/*{message}*/}

            {/*<button onClick={() => setCount(count+1)}>Нажать</button>*/}

            {/*<div>*/}
            {/*    Я нажал {count} раз*/}
            {/*</div>*/}

            <Formik {...props} onSubmit={onSubmit} />

            {/*<input type="date" onChange={(e) => console.log(e.target.value)}/>*/}

        </div>
    )
}

export default compose(
    withRouter,
    FormTest,
)(Hooks)
