import React from 'react'
import styled from 'styled-components'

const CoreValuesContainer = styled.section`
  background: #ab0e17;
  height: 330px;
  width: 100%;
  padding: 5em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1235px) {
    height: 100%;
    justify-content: center;
  }
`
const CoreValuesTitle = styled.h1`
  font-family: 'Alfa Slab One';
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 1235px) {
    text-align: center;
  }
`
const ValuesContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`
const ValuesColumn = styled.ul`
  list-style: none;
  margin: 0 3.5em;
  @media (max-width: 690px) {
    margin: 0;
  }
`
const Value = styled.li`
  color: #fff;
  text-transform: uppercase;
  font-family: 'Alfa Slab One';
  font-size: 1.4em;
  line-height: 1em;
  &::before {
    content: '■';
    padding-right: 10px;
    color: red;
  }
`

const CoreValues = () => (
  <CoreValuesContainer>
    <CoreValuesTitle>
      our core <br /> values
    </CoreValuesTitle>
    <ValuesContainer>
      <ValuesColumn>
        <Value>work ethic</Value>
        <Value>accountability</Value>
        <Value>dedication</Value>
        <Value>safety</Value>
      </ValuesColumn>
      <ValuesColumn>
        <Value>optimism</Value>
        <Value>trust</Value>
        <Value>integrity</Value>
        <Value>
          measurable <br /> performance
        </Value>
      </ValuesColumn>
    </ValuesContainer>
  </CoreValuesContainer>
)

export default CoreValues
