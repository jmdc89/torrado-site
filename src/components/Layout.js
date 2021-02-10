import React from 'react'
// import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/index.scss'
import {container} from './layout.module.scss'

function Layout(props) {
    return (
        <div className={container}>
            {props.children}
            <Sidebar/>
            <Footer/>
            
        </div>
    )
}

export default Layout
