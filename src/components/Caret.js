import React from 'react'
import styled from 'styled-components'

const CaretContainer = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 25px 15px;
  border-color: transparent transparent #ab0e17 transparent;
  transform: rotate(${props => (props.rotate ? props.rotate : 0)}deg);
`

const Caret = ({rotate}) => {
  return <CaretContainer rotate={rotate}/>
}

export default Caret
