import React from 'react'
import InputMask from 'react-input-mask'
import s from '../assets/scss/time.module.scss'

export default function ComponentTypingDate({ setDate, date, enter, submit }) {
    return (
        <div className={s.typing}>
            <h3>Введите дату рождения</h3>
            <InputMask mask="99-99-9999" value={date} onChange={(event) => setDate(event.target.value)} onKeyPress={enter} placeholder="дд-мм-гггг">
                {inputProps => <input
                    {...inputProps}
                    placeholder="дд-мм-гггг">
                    </input>
                }
            </InputMask>
            <button onClick={() => submit(date)}>ОК</button>
        </div>
    )
}
