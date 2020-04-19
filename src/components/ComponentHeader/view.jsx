 
import React from 'react'
import s from '../../assets/sass/header.module.scss'
import { Dehaze } from '@material-ui/icons'
import { useHistory } from 'react-router-dom'

const View = ({switchMenu, isOpen, title}) => {
    const history = useHistory()
    return (
        <div className={`${s.container} ${isOpen && s.smallZIndex}`}>
            <span className={s.title}>{title}</span>
            <Dehaze className={isOpen ? `${s.rButton} ${s.rButtonOpen}` : s.rButton} onClick={() => switchMenu()}></Dehaze>
        </div>
    )
}

export default View