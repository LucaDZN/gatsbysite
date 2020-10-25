import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const Contact = ({data}) => {
  return (
    <Layout>
        <section>
            <div className="container">
            <p>{data.site.siteMetadata.title}</p>
            </div>
        </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Contact
