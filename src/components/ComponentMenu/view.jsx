import React, { useEffect, useState } from 'react'
import { Link, Router, useHistory } from 'react-router-dom'
import style from '../../assets/scss/menu.module.scss'
import { Close } from '@material-ui/icons'
const Menu = ({ switchMenu, isOpen, list }) => {
    const history = useHistory()
    return (
        <div className={isOpen ? `${style.drawer} ${style['drawer-open']}` : `${style.drawer}`}>
            <Close onClick={() => switchMenu()} style={{color: '#fff', alignSelf: 'flex-end', margin: '20px 10px', fontSize: '30px'}} />
            <ul className={style['drawer__list']}>
                {list.map(item => (
                    <li
                    onClick={() => { switchMenu(); history.push(item.path) }}
                    className={style['drawer__list__item']}
                    key={item.path}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu