import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/Footer'

const IndexPage = () => {
    return (
      <div>
          <h1>Hello.</h1>
          <h2>Im David Torrado.</h2>
          <Link to="/contact">Contact me.</Link>
          <Footer/>
      </div>
    )
}

export default IndexPage