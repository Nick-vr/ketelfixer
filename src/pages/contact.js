/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { ContactMail } from '@styled-icons/material-sharp/ContactMail'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ContactForm from '../components/contactForm'

const StyledContactMail = styled(ContactMail)`
  color: #b87333;
  width: 60px;
`

const StyledSection = styled.section`
  position: relative;
  margin-top: 60px;
  font-family: 'Roboto Slab', serif;
  svg {
    display: block;
    margin: 30px auto;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;

    ::after {
      content: '';
      width: 60px;
      height: 5px;
      background-color: #b87333;
      position: absolute;
      top: 160px;
      left: calc(50% - 30px);
    }
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" description="Contacteer ons" />
    <StyledSection>
      <StyledContactMail />
      <h1>Neem contact op</h1>
      <ContactForm />
    </StyledSection>
  </Layout>
)

export default ContactPage
