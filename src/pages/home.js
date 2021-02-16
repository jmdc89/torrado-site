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
    
          <section>
            {images.map(image => {
              console.log(image)
              return <article key={image.id}>
                <Img fluid={image.image.fluid} alt={image.title}></Img>
              </article>
            })}
        </section>
    
        

      </Layout>
    )
}


export const query = graphql`
  {
    allContentfulImage {
      nodes {
        id
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

export default HomePage





















