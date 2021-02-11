import React from "react"
import {
    FaFacebookMessenger,
    FaLinkedinIn,
    FaBehance,
    FaInstagram,
  } from "react-icons/fa"
import {footer, icon, firmaimg} from './footer.module.scss'
import firma from '../assets/firmainvertida.png'

const Footer = () => {
  return (
      <footer className={footer}>
          <div>
                {/* <a href="https://www.instagram.com/thelonelyboy/?hl=es" target="_blank" className={icon}>
                <FaInstagram/>
                </a>
                <p>davidtorradoalfonso@gmail.com</p> */}
                <img className={firmaimg} src={firma} alt="Logo" />  
          </div>
      </footer>
  )
}

export default Footer