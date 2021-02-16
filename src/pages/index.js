import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import HomePage from "./home"

const IndexPage = () => {
    return (
      <Layout>
          <HomePage/>
      </Layout>
    )
}

export default IndexPage