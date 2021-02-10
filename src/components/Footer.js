import React from "react"
import {
    FaFacebookMessenger,
    FaLinkedinIn,
    FaBehance,
  } from "react-icons/fa"


const Footer = () => {
  return (
      <footer className="footer">
          <div>
                <li>
                    <a href="https://www.facebook.com/" target="_blank" className="social-link">
                    <FaFacebookMessenger/>
                    </a>
                </li>
                <li>
                    <a href="http://twitter.com" target="_blank" className="social-link">
                    <FaFacebookMessenger/>
                    </a>
                </li>
          </div>
      </footer>
  )
}

export default Footer