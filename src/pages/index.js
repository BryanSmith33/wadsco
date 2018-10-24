import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/Home/Hero'
import ContactForm from '../components/ContactForm'
import Motto from '../components/Home/Motto'

const IndexPage = () => (
  <Layout>
    <Hero />
    <Motto />
    <ContactForm />
  </Layout>
)

export default IndexPage
