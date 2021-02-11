import React from 'react'
// import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/index.scss'
import {container, content} from './layout.module.scss'

function Layout(props) {
    return (
        <div className={container}>
               <Header/>
            <nav className={content}>
                <Sidebar/>
            </nav>  
                <Footer/>         
        </div>
    )
}

export default Layout
