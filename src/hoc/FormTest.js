import React from "react";
import {connect} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";

let mapStateToPropsForRedirect = (state) => {
    return {

    };
}

export const FormTest = (Component) => {

    class FormTest extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                name: '',
                email: '',
                address: '',
                social: {
                    vk: '',
                    inst: '',
                },
                telephones: ['', ''],
                phNumbers: [''],
            }
        }


        render() {

            const initialValues = {
                name: '',
                email: '',
                address: '',
                social: {
                    vk: '',
                    inst: '',
                },
                telephones: ['', ''],
                phNumbers: [''],
            }

            const setState = (props) => {
                initialValues.name = props.name
                initialValues.email = 'asasdsda@mail.ru'
                initialValues.address = 'asdjkasd'
            }

            let validationSchema = Yup.object({
                name: Yup.string()
                    .max(15, '15 символов или меньше youpta'),
                    // .required('Имя Required bitch'),

                email: Yup.string()
                    .email('Адрес гавно polnoe'),
                    // .required('address Required'),
                address: Yup.string() //для примера, что без required всё работает
                    .max(15, '15 символов или меньше address'),
                    // .required('address Required'),
                social: Yup.object({
                    vk: Yup.string(),
                        // .required('vk Required bitch'),
                    inst: Yup.string(),
                        // .required('inst Required bitch'),
                }),
                telephones: Yup.array()
                    .of(Yup.string()
                        // .required('Текст чи шо')
                )
            })
            return (
                <>
                    <Component {...this.props}
                               initialValues={initialValues}
                               setState={setState}
                               validationSchema={validationSchema}
                    />
                </>
                )
        }


    }

let ConnectedCommonFormTestComponent = connect(mapStateToPropsForRedirect)(FormTest);

return ConnectedCommonFormTestComponent;
}
