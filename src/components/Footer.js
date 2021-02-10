import React from "react"
import {
    FaFacebookMessenger,
    FaLinkedinIn,
    FaBehance,
    FaInstagram,
  } from "react-icons/fa"
import {footer, icon} from './footer.module.scss'

const Footer = () => {
  return (
      <footer className={footer}>
          <div>
                <a href="https://www.instagram.com/thelonelyboy/?hl=es" target="_blank" className={icon}>
                <FaInstagram/>
                </a>
                <p>davidtorradoalfonso@gmail.com</p>
          </div>
      </footer>
  )
}

export default Footer