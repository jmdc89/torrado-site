import React from 'react'
import logo from '../assets/logo.png'
import {logo2} from './header.module.scss'

function Header() {
    return (
        <header >
            <img className={logo2}  src={logo} alt="Logo" /> 
        </header>
    )
}

export default Header
