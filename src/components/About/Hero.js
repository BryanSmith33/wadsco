import React from 'react'
import styled from 'styled-components'
import AboutHeroImg from '../../images/about_hero.jpg'
import Carrot from '../Caret'

const AboutHero = styled.section`
  background: url(${AboutHeroImg}) no-repeat center;
  background-size: cover;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const HeroTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-family: 'Alfa Slab One';
  letter-spacing: 5px;
`

const Hero = () => (
  <AboutHero>
    <HeroTitle>about rlw</HeroTitle>
    <Carrot rotate={180}/>
  </AboutHero>
)

export default Hero
