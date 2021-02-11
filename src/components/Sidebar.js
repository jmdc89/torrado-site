import React from 'react'
import {Link} from 'gatsby'
import Layout from './Layout'
import {navItem, navList, activeNavItem} from './sidebar.module.scss'

function Sidebar() {
    return (
            <ul className={navList}>
                <li>
                   <Link className={navItem} activeClassName={activeNavItem}  to="/home">Home</Link> 
                </li>
                <li>
                   <Link className={navItem} activeClassName={activeNavItem}  to="/gallery">Gallery</Link> 
                </li>
                <li>
                   <Link className={navItem} activeClassName={activeNavItem}  to="/about">About me</Link> 
                </li>
                <li>
                    <Link className={navItem} activeClassName={activeNavItem}  to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className={navItem} activeClassName={activeNavItem}  to="/instagram">Instagram</Link>  
                </li>
            </ul>       
    )
}

export default Sidebar
