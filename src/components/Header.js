import React from 'react'
import logo from '../assets/logo.png'
import firma from '../assets/firmainvertida.png'
import {logo2} from './header.module.css'

function Header() {
    return (
        <header>
            <img className={logo} src={logo} alt="Logo" /> 
           {/* <img src={firma} alt="Logo" />   */}
        </header>
        
    )
}

export default Header
