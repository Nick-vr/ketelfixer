/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Mail } from '@styled-icons/entypo/Mail'
import { Phone } from '@styled-icons/boxicons-solid/Phone'

const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 735px) {
    justify-content: center;
    padding-bottom: 20px;
  }
  @media (max-width: 900px) {
    p {
      font-size: 15px;
    }
  }
  @media (max-width: 415px) {
    p {
      font-size: 13px;
    }
  }
`

const PhoneInfoWrapper = styled.div`
  border-right: 1px solid #696866;
  height: 70px;
  min-width: 200px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 735px) {
    min-width: 180px;
  }

  span {
    display: flex;
    align-items: center;

    p {
      color: #b87333;
      margin: 0 0 0.1rem 0.3rem;
    }
  }

  p,
  a {
    font-family: 'Roboto Slab', serif;
    font-style: italic;
    text-align: left;
    margin-top: 5px;
  }
`
const MailInfoWrapper = styled(PhoneInfoWrapper)`
  border-right: none;
`

const StyledPhone = styled(Phone)`
  color: #b87333;
  width: 20px;
`

const StyledMail = styled(Mail)`
  color: #b87333;
  width: 20px;
`

const ContactInfo = () => (
  <ContactInfoWrapper>
    <PhoneInfoWrapper>
      <span>
        <StyledPhone />
        <p>Telefoon</p>
      </span>
      <a href="tel:+32499151044">+32 499 15 10 44</a>
    </PhoneInfoWrapper>
    <MailInfoWrapper>
      <span>
        <StyledMail />
        <p>Email</p>
      </span>
      <a href="mailto:contact@ketelfixer.be">contact@ketelfixer.be</a>
    </MailInfoWrapper>
  </ContactInfoWrapper>
)

export default ContactInfo
