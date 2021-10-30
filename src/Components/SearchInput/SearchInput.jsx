import React, {useState} from 'react'
import s from './SearchInput.module.css'

const SearchInput = () => {

    const [showInput, setShopInput] = useState(false)
    const [letters, setLetter] = useState('')

    const handleChange = (value) => {
        setLetter(value)
    }
    const handleBlur = (showInput) => {
        setShopInput(showInput)
    }

    return (
        <div className={s.outer}>
            {
                showInput ?
                    <div className={s.inputContainer}>
                        <input autoFocus onBlur={() => handleBlur(false)} className={s.input} value={letters} onChange={(e) => handleChange(e.target.value)}
                               type='text' placeholder='Я ищу...' />
                        <ul className={s.list}>
                            <li className={s.item}>Куртки</li>
                            <li className={s.item}>Сумки</li>
                            <li className={s.item}>Ботинки</li>
                        </ul>
                    </div>
                    :
                    <>
                        <div onClick={() => setShopInput(true)} className={s.container}>
                            Я ищу...
                        </div>
                    </>
            }
        </div>
    )
}

export default SearchInput