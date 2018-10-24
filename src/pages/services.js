import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ServicesPage = () => (
  <Layout>
    <h1>Hi from the services page</h1>
    <p>Welcome to services</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
