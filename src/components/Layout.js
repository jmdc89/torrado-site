import React from 'react'
// import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

function Layout(props) {
    return (
        <div>
            <Sidebar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
