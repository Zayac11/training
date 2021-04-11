import React, {useState} from "react";
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import TextError from "../../Common/TextError";

const InputContainer = (props) => {

    const [value, setValue] = useState([])

    const handleChange = (e) => {

    }

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div>
            {/*<input onChange={handleChange} type="file" accept={'image/*'} multiple/>*/}
            <Formik initialValues={props.initialValues}
                    validationSchema={props.validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
            >
                <Form>
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
                                                        <div>
                                                            <Field name={`phNumbers.${index}.title`} />
                                                            <ErrorMessage name={`phNumbers.${index}.title`} component={TextError} />
                                                        </div>
                                                        <div>
                                                            <Field name={`phNumbers.${index}.value`} />
                                                            <ErrorMessage name={`phNumbers.${index}.value`} component={TextError} />
                                                        </div>
                                                        {
                                                            index > 0 &&
                                                            <button type={'button'} onClick={() => remove(index)}> - </button>
                                                        }
                                                        <button type={'button'} onClick={() => push({
                                                            title: '',
                                                            value: '',
                                                        })}> + </button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            }
                            {/*<ErrorMessage name="phNumbers" component={TextError} />*/}
                        </FieldArray>
                    </div>
                    <button type={'submit'}>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default InputContainer
