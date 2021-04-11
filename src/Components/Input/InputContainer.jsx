import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import TextError from "../../Common/TextError";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import './Input.scss'
import s from './Input.module.scss'

const InputContainer = (props) => {

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className={s.container}>
            <Formik initialValues={props.initialValues}
                    validationSchema={props.validationSchema}
                    onSubmit={handleSubmit}
                    // enableReinitialize
            >
                <Form>
                    <div>
                        {/*<label htmlFor="phNumbers">List of phone numbers</label>*/}
                        <FieldArray name={'phNumbers'}>
                            {
                                (fieldArrayProps) => {
                                    const {push, remove, form} = fieldArrayProps
                                    const {values} = form
                                    const {phNumbers} = values
                                    return (
                                        <>
                                            {
                                                phNumbers.length < 5 &&
                                                <button type={'button'} onClick={() => push({
                                                    title: '',
                                                    value: '',
                                                    id: Math.floor(Math.random() * 10000) })}
                                                >
                                                    Добавить еще что-нибудь
                                                </button>
                                            }
                                            <TransitionGroup component={'div'}>
                                                {
                                                    phNumbers.map((phNumber, index) => (
                                                        <CSSTransition key={phNumber.id}
                                                                       classNames={'note'}
                                                                       timeout={800}
                                                        >
                                                            <div>
                                                                <div>
                                                                    <Field value={phNumber.title} name={`phNumbers[${index}].title`} />
                                                                    <ErrorMessage name={`phNumbers[${index}].title`} component={TextError} />
                                                                </div>
                                                                <div>
                                                                    <Field value={phNumber.value} name={`phNumbers[${index}].value`} />
                                                                    <ErrorMessage name={`phNumbers[${index}].value`} component={TextError} />
                                                                </div>
                                                                {
                                                                    index > 0 &&
                                                                    <button type={'button'} onClick={() => remove(index)}> Убрать </button>
                                                                }
                                                                <br/>
                                                            </div>
                                                        </CSSTransition>
                                                    ))
                                                }
                                            </TransitionGroup>
                                        </>
                                    )
                                }
                            }
                        </FieldArray>
                    </div>
                    <button style={{marginTop: '30px'}} type={'submit'}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default InputContainer
