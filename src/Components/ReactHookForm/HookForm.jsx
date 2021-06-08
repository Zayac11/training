import React from 'react'
import s from './HookForm.module.scss'
import {useForm} from 'react-hook-form'

const HookForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>

            <div>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("example", { required: true })} />
            {errors.example && <span>This field is required</span>}
            </div>
            <div>
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
            </div>


            <input type="submit" />
        </form>
    )
}

export default HookForm