import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NewsPage = () => (
  <Layout>
    <h1>Hi from the news page</h1>
    <p>Welcome to news</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NewsPage
