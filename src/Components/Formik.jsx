import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { setLocale } from 'yup';
import {compose} from "redux";

const SignupForm = () => {

    const initialValues = {
        name: '',
        email: '',
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
    })


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


    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            <Form>
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
                <ErrorMessage name="name" />

                <label htmlFor="email">Email Address</label>
                <Field
                    id="email"
                    type="email"
                    name="email"
                    //*{...formik.getFieldProps('email')}
                />
                <ErrorMessage name="email" />

                {/*type="submit у кнопки это важно, иначе warning будет!"*/}
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default compose(

)(SignupForm)
