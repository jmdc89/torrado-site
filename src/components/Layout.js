import React from 'react'
// import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import '../styles/index.scss'
import {container, content} from './layout.module.scss'

function Layout(props) {
    return (
        <div className={container}>
        <div className={content}>
            {props.children}
            <Sidebar/>
        </div>  
            <Footer/>         
        </div>
    )
}

export default Layout
