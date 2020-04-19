import React, { useState, useEffect } from 'react'
import InputMask from 'react-input-mask'
import MaterialInput from '@material-ui/core/Input'

const Time = () => {
    const oneYear = 31557100000
    const [ date, setDate ] = useState(null)
    const [ output, setOutput ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
            const age = localStorage.getItem('age')
            if (age) {
                setDate(age)
                submit(age)
            }
            setLoading(false)
    }, [])

    const submit = (date) => {
        if (date && date.length != 10 && date.indexOf('_') !== -1) return
        const validDate = date.split('-')
        if (validDate[0] < 0 || validDate[0] > 31) return
        if (validDate[1] < 0 || validDate[1] > 13) return
        if (validDate[2] < 1950 || validDate[2] > 2021) return
        localStorage.setItem('age', date)
        const value = date.split('-').reverse().join('-')
        let myDate = new Date(value)
    
        const time = setInterval(() => {
            const currentDate = new Date()
            const duration = currentDate.getTime() - myDate.getTime()
            const years = duration / oneYear
            const output = years.toFixed(9).toString().split('.')
            setOutput(`${output[0]}.${output[1]}`)
        }, 100)
    }

    const enter = (event) => {
        if (event.key === 'Enter') {
            submit(date)
        }
    }

    return (
        <div className="container">
            {!output && <h3>Введите дату рождения</h3>}
            {!output && <InputMask mask="99-99-9999" value={date} onChange={(event) => setDate(event.target.value)} onKeyPress={enter} placeholder="дд-мм-гггг">
                {inputProps => <input
                    {...inputProps}
                    placeholder="дд-мм-гггг">
                    </input>
                }
            </InputMask>}
            {!output ? <button onClick={() => submit(date)}>ОК</button> : <span className="container__output">{output}</span>}
        </div>
    )
}

export default Time
