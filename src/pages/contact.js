/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { ContactMail } from '@styled-icons/material-sharp/ContactMail'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsBox from '../components/projectsBox'

const StyledContactMail = styled(ContactMail)`
  color: #b87333;
  width: 60px;
`

const Section = styled.section`
  position: relative;
  margin-top: 60px;
`

const ProjectSection = styled(Section)`
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
    <ProjectSection>
      <StyledContactMail />
      <h1>Neem contact op</h1>
      <p>blkabla</p>
    </ProjectSection>
  </Layout>
)

export default ContactPage
