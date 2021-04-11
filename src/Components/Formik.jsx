import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray} from 'formik'
import {compose} from "redux";
import TextError from "../Common/TextError";
import {useSelector} from "react-redux";

const SignupForm = (props) => {

    const isEmailTaken = useSelector(state => state.test.isEmailTaken);

    return (
        <Formik initialValues={props.initialValues}
                validationSchema={props.validationSchema}
                onSubmit={props.onSubmit}
                validate={values => {
                    let errors = {}
                    if(isEmailTaken) {
                        errors.email = 'Email is Already taken'
                    }
                    return errors;
                }}
                enableReinitialize
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

                <div>
                    <label htmlFor="phNumbers">List of phone numbers</label>
                    <FieldArray name={'phNumbers'}>
                        {
                            (fieldArrayProps) => {
                                const {push, remove, form} = fieldArrayProps
                                const {values} = form
                                const {phNumbers} = values
                                return (
                                    <div>
                                        {
                                            phNumbers.map((phNumber, index) => (
                                                <div key={index}>
                                                    <Field name={`phNumbers[${index}]`} />
                                                    {
                                                        index > 0 &&
                                                        <button type={'button'} onClick={() => remove(index)}> - </button>
                                                    }
                                                    <button type={'button'} onClick={() => push('')}> + </button>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        }
                    </FieldArray>
                </div>

                {/*type="submit у кнопки это важно, иначе warning будет!"*/}
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default compose(

)(SignupForm)

//Проверять телефон можно с помощью регулярки
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
//
// phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')

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
