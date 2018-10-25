import React from 'react'

import Layout from '../components/layout'
import AboutHero from '../components/About/Hero'
import CompanyValues from '../components/About/Values/CompanyValues'
import CoreValues from '../components/About/Values/CoreValues'

const AboutPage = () => (
  <Layout>
    <AboutHero />
    <CompanyValues />
    <CoreValues />
  </Layout>
)

export default AboutPage
