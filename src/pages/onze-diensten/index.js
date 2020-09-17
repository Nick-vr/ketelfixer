/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'
import { Construction } from '@styled-icons/material-sharp/Construction'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ProjectsBox from '../../components/projectsBox'

// import Banner from '../components/images/banner'
import Maintenance from '../../components/images/maintenance'
import Renewing from '../../components/images/renewing'
import Renovation from '../../components/images/renovation'

const StyledPlumbing = styled(Plumbing)`
  color: #b87333;
  width: 60px;
`

const StyledConstruction = styled(Construction)`
  color: #b87333;
  width: 60px;
`

const Section = styled.section`
  position: relative;
  margin-top: 60px;
`

const ServiceSection = styled(Section)`
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

const ProjectSection = styled(ServiceSection)``

const DienstenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }

  figure {
    margin: 40px;
  }
`

const OnzeDienstenPage = () => (
  <Layout>
    <SEO title="Contact" description="YEEEEEET" />
    <ServiceSection>
      <StyledPlumbing />
      <h1>Onze diensten</h1>
      <DienstenWrapper>
        <Maintenance />
        <Renewing />
        <Renovation />
      </DienstenWrapper>
    </ServiceSection>
    <div>
      <p>
        - de verwarmingsketel open maken en visueel controleren op lekken of
        andere zichtbare defecten.
      </p>
      <p>- de brander open maken en reinigen.</p>
      <p>- nieuwe dichtingen plaatsen waar nodig. (inbegrepen)</p>
      <p>- een rookgasanalyse met rendementsmeting uitvoeren.</p>
      <p>- eventuele tips in verband met veiligheid of verbruik met u delen.</p>
      <p>- een wettelijk reinigings- en verbrandingsattest afleveren.</p>
    </div>
  </Layout>
)

export default OnzeDienstenPage
