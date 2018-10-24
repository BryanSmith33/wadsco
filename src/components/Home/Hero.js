import React from 'react'
import HeroBackground from '../../images/hero_img.jpg'
import styled from 'styled-components'

const HeroContainer = styled.section`
 height: 95vh;
 background: url(${HeroBackground}) no-repeat center center;
 background-size: cover;
`


const Hero = () => (
  <HeroContainer>
  </HeroContainer>
)

export default Hero
