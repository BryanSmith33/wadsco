import React from 'react'
import styled from 'styled-components'
import GooglePlusIcon from '../images/social_icons/google_plus.png'
import FacebookIcon from '../images/social_icons/facebook.png'
import YoutubeIcon from '../images/social_icons/youtube.png'
import LinkedinIcon from '../images/social_icons/linkedin.png'
import TwitterIcon from '../images/social_icons/twitter.png'

const FooterContainer = styled.footer`
  background: #111;
  padding: 2em;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Lato';
  @media (max-width: 450px) {
    justify-content: space-around;
  }
`
const Copyright = styled.p`
  margin: 0;
  @media (max-width: 450px) {
    text-align: center;
    margin: 0 1em 1em;
  }
`
const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
`
const SocialIcon = styled.img`
  width: 40px;
  margin: 0 .5em;
`

const Footer = () => (
  <FooterContainer>
    <Copyright>
      Copyright &copy; {new Date().getFullYear()} Wadsworth Construction // All
      rights reserved
    </Copyright>
    <SocialIconContainer>
      <SocialIcon src={GooglePlusIcon} />
      <SocialIcon src={FacebookIcon} />
      <SocialIcon src={YoutubeIcon} />
      <SocialIcon src={LinkedinIcon} />
      <SocialIcon src={TwitterIcon} />
    </SocialIconContainer>
  </FooterContainer>
)

export default Footer
