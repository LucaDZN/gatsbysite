import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Portfolio = () => {
  return (
    <Layout>
        <section>
            <div className="container">
            <p>Portfolio page</p>
            <Link href="/contact">Contact</Link>
            </div>
        </section>
    </Layout>
  )
}

export default Portfolio
