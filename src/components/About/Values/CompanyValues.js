import React from 'react'
import styled from 'styled-components'
import Carrot from '../../Caret'

import CompanyValuesImg from '../../../images/company_values.jpg'

const CompanyValuesContainer = styled.section`
  background: url(${CompanyValuesImg}) no-repeat center;
  background-size: cover;
  height: 450px;
  width: 100%;
  padding: 0 2.3em;
  @media (max-width: 750px) {
    height: 100%;
  }
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  padding: 3em 0;
`
const ValuesTitle = styled.h4`
  font-family: 'Alfa Slab One';
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
`
const ValuesTextContainer = styled.div`
  padding-left: 2.8em;
`
const TitleIntro = styled.h1`
  font-family: 'Alfa Slab One';
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 600px;
  @media (max-width: 750px) {
    width: 100%;
  }
`
const ValuesText = styled.p`
  font-family: 'Lato';
  width: 600px;
  line-height: 1.75em;
  @media (max-width: 750px) {
    width: 100%;
  }
`

const CompanyValues = () => (
  <CompanyValuesContainer>
    <TitleContainer>
      <Carrot rotate={90} />
      <ValuesTitle>Company Values</ValuesTitle>
    </TitleContainer>
    <ValuesTextContainer>
      <TitleIntro>quality at every level, on every job</TitleIntro>
      <ValuesText>
        RLW insists on quality in everything we do. For us, quality is a way of
        doing business from the bottom up, whether we're desinging and building
        bridges or working on the mass transit projects that move citizens
        around the American West. That same dedication is reflected in and
        supported by our core values.
      </ValuesText>
    </ValuesTextContainer>
  </CompanyValuesContainer>
)

export default CompanyValues
