import React from 'react'
import styled from 'styled-components'
import MottoBackground from '../../images/motto.jpg'

const MottoContainer = styled.section`
  background: url(${MottoBackground}) no-repeat center center;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 400px;
  padding: 0 2em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 750px) {
    height: 300px;
  }
  @media (max-width: 500px) {
    height: 200px;
    padding: 0 1em;
  }
`
const MottoTitle = styled.h3`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Lato';
  margin-bottom: 1em;
  @media (max-width: 750px) {
    font-size: 1em;
  }
`
const MottoSubTitle = styled.h1`
  max-width: 1000px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5em;
  margin: 0;
  font-family: 'Lato';
  font-weight: 100;
  font-size: 2.2em;
  @media (max-width: 750px) {
    font-size: 1.5em;
  }
`

const Motto = () => (
  <MottoContainer>
    <MottoTitle>
      we take great pride in our projects and the ralph l. wadsworth name.
    </MottoTitle>
    <MottoSubTitle>
      quality is paramount on every rwl project no matter the size, scope or
      schedule.
    </MottoSubTitle>
  </MottoContainer>
)

export default Motto
