import React from 'react'
// import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/index.scss'
import {container, content} from './layout.module.scss'

const Layout = ({children}) => {
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



// import React from "react"
// // import "../css/main.css"
// import Navbar from "./Navbar"
// import Sidebar from "./Sidebar"
// import Footer from "./Footer"

// const Layout = ({ children }) => {
//   const [isOpen, setIsOpen] = React.useState(false)
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen)
//   }

//   return (
//     <>
//       <Navbar toggleSidebar={toggleSidebar} />
//       <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
//       {children}
//       <Footer />
//     </>
//   )
// }

// export default Layout