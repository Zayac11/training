import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {compose} from "redux";
import TextError from "../Common/TextError";

const SignupForm = () => {

    const initialValues = {
        name: '',
        email: '',
        social: {
            vk: '',
            inst: '',
        },
        telephones: ['', '']
    }

    const onSubmit = (values) => {
        console.log(values)
    }

    let validationSchema = Yup.object({
        name: Yup.string()
            .max(15, '15 символов или меньше youpta')
            .required('Имя Required bitch'),

        email: Yup.string()
            .email('Адрес гавно polnoe')
            .required('address Required'),
        social: Yup.object({
            vk: Yup.string()
                .required('vk Required bitch'),
            inst: Yup.string()
                .required('inst Required bitch'),
        }),
        telephones: Yup.array()
            .of(Yup.string()
                .required('Текст чи шо'))
    })

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field
                        id="name"
                        type="text"
                        name="name"
                        //{...formik.getFieldProps('name')}
                        // onChange={formik.handleChange}
                        // onBlur={formik.handleBlur}
                        // value={formik.values.name}
                    />
                    <ErrorMessage name="name" component={TextError} />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <Field
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ErrorMessage name="email" component={TextError} />
                </div>

                <div>
                    <label htmlFor="vk">Vk</label>
                    <Field
                        id="vk"
                        type="text"
                        name="social.vk"
                    />
                    <ErrorMessage name="social.vk" component={TextError} />
                </div>

                <div>
                    <label htmlFor="inst">Inst</label>
                    <Field
                        id="inst"
                        type="text"
                        name="social.inst"
                    />
                    <ErrorMessage name="social.inst" component={TextError} />
                </div>

                <div>
                    <label htmlFor="primaryPhone">phone 1</label>
                    <Field
                        id="primaryPhone"
                        type="tel"
                        name="telephones[0]"
                    />
                    <ErrorMessage name="telephones" component={TextError} />
                </div>

                <div>
                    <label htmlFor="primaryPhone">phone 2</label>
                    <Field
                        id="secondPhone"
                        type="tel"
                        name="telephones[1]"
                    />
                    <ErrorMessage name="telephones" component={TextError} />
                </div>

                {/*type="submit у кнопки это важно, иначе warning будет!"*/}
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default compose(

)(SignupForm)

    // let validate = values => {
    //
    //     const errors = {};
    //
    //     if (!values.name) {
    //         errors.name = 'Имя Required';
    //     } else if (values.name.length > 15) {
    //         errors.name = '15 символов или меньше';
    //     }
    //
    //     if (!values.email) {
    //         errors.email = 'Email Required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Адрес гавно';
    //     }
    //     return errors;
    // }

    // const formik = useFormik({
    //     initialValues,
    //     validationSchema,
    //     // validate,
    //     onSubmit,
    // });
