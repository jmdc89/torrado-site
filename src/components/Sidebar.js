import React from 'react'
import {Link} from 'gatsby'
import Layout from './Layout'
import {link} from './sidebar.module.scss'

function Sidebar() {
    return (

            <ul>
                <li>
                   <Link className={link} to="/home">Home</Link> 
                </li>
                <li>
                   <Link className={link} to="/gallery">Gallery</Link> 
                </li>
                <li>
                   <Link className={link} to="/about">About me</Link> 
                </li>
                <li>
                    <Link className={link} to="/contact">Contact</Link>
                </li>
                <li>
                  <Link className={link} to="/instagram">Instagram</Link>  
                </li>
            </ul>       
  
    )
}

export default Sidebar
