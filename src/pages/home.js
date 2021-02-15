import React from "react"
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { Link } from "gatsby"
import {home} from './home.module.scss'


const HomePage = ({data}) => {

  const {allContentfulImage:{nodes:images},
} = data
console.log(images)

    return (
      <Layout>
        <section className={home}>
            {images.map(image => {
              console.log(image)
              return <h2>{image.title}</h2>
            })}
        </section>

      </Layout>
    )
}

export default HomePage


const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allContentfulImage {
      nodes {
        slug
        title
        category
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

// export default ComponentName





















