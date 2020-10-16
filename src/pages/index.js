import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const Home = () => {
  return (
    <Layout>
      <h1>Homepage</h1>
      <Link to="/contact">Contact me</Link>
    </Layout>
  )
}

export default Home
