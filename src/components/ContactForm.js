import React from 'react'
import styled from 'styled-components'
import ContactBackground from '../images/contact_background.jpg'

const ContactContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 850px) {
    height: 620px;
  }
`
const ContactBackgroundImg = styled.img`
  position: absolute;
  filter: grayscale(1) brightness(25%);
  top: 0;
  margin: 0;
  width: 100%;
  @media (max-width: 850px) {
    height: 100%;
  }
`
const Form = styled.form`
  margin: 0;
  z-index: 1;
  font-family: 'Lato', sans-serif;
`
const FormInfoContainer = styled.div`
  display: flex;
  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
`
const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1em;
  @media (max-width: 850px) {
    justify-content: center;
    margin: 1em auto;
  }
  @media (max-width: 450px) {
    justify-content: center;
    margin: 1em 0;
  }
`
const FormInput = styled.input`
  height: 50px;
  width: 350px;
  background: #111;
  padding: 0.75em;
  border: 0.0025em solid #eee;
  color: #fff;
  @media (max-width: 850px) {
    margin: 0.5em 0;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`
const FormTextBox = styled.textarea`
  width: 350px;
  background: #111;
  padding: 0.75em;
  border: 0.0025em solid #eee;
  color: #fff;
  resize: none;
  @media (max-width: 450px) {
    width: 100%;
  }
`
const FormBtn = styled.button`
  margin: 1em 0;
  padding: 0.5em;
  background: #ab0e17;
  color: #fff;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  float: right;
  font-family: 'Lato', sans-serif;
  @media (max-width: 450px) {
    width: 100%;
  }
`

const ContactForm = () => (
  <ContactContainer>
    <ContactBackgroundImg src={ContactBackground} />
    <Form action="">
      <FormInfoContainer>
        <InputHolder>
          <FormInput placeholder="Name" type="text" />
          <FormInput placeholder="Subject" type="text" />
          <FormInput placeholder="Email" type="text" />
        </InputHolder>
        <FormTextBox
          placeholder="Your Message"
          name=""
          id=""
          cols="40"
          rows="8"
        />
      </FormInfoContainer>
      <FormBtn>send</FormBtn>
    </Form>
  </ContactContainer>
)

export default ContactForm
