import React from 'react'
import {Link} from 'gatsby'
import Layout from './Layout'

function Sidebar() {
    return (
        <div>
            <Link to="/home">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About me</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/instagram">Instagram</Link>
        </div> 
    )
}

export default Sidebar
