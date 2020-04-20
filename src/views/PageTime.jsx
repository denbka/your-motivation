import React, { useState, useEffect } from 'react'
import ComponentTypingDate from '../components/ComponentTypingDate'
import s from '../assets/scss/time.module.scss'

export default function PageTime() {

    const oneYear = 31557100000
    const [ date, setDate ] = useState(null)
    const [ output, setOutput ] = useState(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
            const age = localStorage.getItem('age')
            if (age) {
                setDate(age)
                setOutput(age)
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
        <React.Fragment>
            {!output && <ComponentTypingDate date={date} setDate={setDate} enter={enter} submit={submit}></ComponentTypingDate>}
            {output && <div className={s.timeContainer}>
                 <span>{output}</span>
            </div>}
        </React.Fragment>
    )
}
