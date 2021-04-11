import React from "react";
import InputContainer from "./InputContainer";
import * as Yup from "yup";

const InputForm = (props) => {

    const initialValues = {
        phNumbers: [
            {
                title: '',
                value: '',
                id: 1,
            },
        ],
    }

    let validationSchema = Yup.object({
        phNumbers: Yup.array()
            .of(Yup.object().shape({
                    title: Yup.string().required('Титл не заполнен'),
                    value: Yup.string().required('Валуе не заполнено'),
                })
            )
    })

    return (
        <InputContainer initialValues={initialValues} validationSchema={validationSchema} />
    )
}

export default InputForm
