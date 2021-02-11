import React from "react";
import * as yup from 'yup'
import { setLocale } from 'yup';
import {compose} from "redux";
import {connect} from "react-redux";

class YupInputs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            website: '',
            email: '',
            phone: '',

            isValid: false,
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        let value = e.target.value
        let name = e.target.name

        this.setState({
            [name]: value
        })
    }
    validate(shape) {

        setLocale({
            string: {
                name: 'Заполните имя'
            },
            number: {
                min: `Минимальный возраст - 18 лет`,
                integer: `Число должно быть целым`,
                positive: `Число должно быть положительным`,
            },
        });

        let schema = yup.object().shape({
            name: yup.string().required('Заполните имя'),
            age: yup.number('Заполни блинб').positive().integer().min(18),
            website: yup.string().url('Это не website, кого обманываешь?'),
            email: yup.string().required('Заполните email').email('Это не email, кого обманываешь?'),
        });

        //Если не сработает catch, то будет then и там уже можно вызвать метод из глобал стейта
        schema
            .validate(shape)
            .then(function (valid) {

                console.log(valid);
            })
            .catch(function (err) {

                console.log(err.errors);
            })
            //shape - это данные
    }

    handleSubmit() {
        this.validate({
            name: this.state.name,
            age: this.state.age === '' ? 0 : this.state.age,
            website: this.state.website,
            email: this.state.email,
        })
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <div><input type="text" value={this.state.name} placeholder={'Имя'} name='name' onChange={this.handleChange}/></div>
                <div><input type="number" value={this.state.age} placeholder={'Возраст'} name='age' onChange={this.handleChange}/></div>
                <div><input type="url" value={this.state.website} placeholder={'Сайт'} name='website' onChange={this.handleChange}/></div>
                <div><input type="email" value={this.state.email} placeholder={'Почта'} name='email' onChange={this.handleChange}/></div>

                <button onClick={this.handleSubmit}>submit</button>

            </div>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        data: state.test.data
    }
}

export default compose(
    connect(mapStateToProps, {})
)(YupInputs)
