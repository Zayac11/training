import React from 'react'
import HookForm from './HookForm'

const HookFormContainer = () => {

    const onSubmit = data => console.log(data);

    return (
        <HookForm onSubmit={onSubmit} />
    )
}

export default HookFormContainer