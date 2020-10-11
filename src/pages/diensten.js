/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'

import Layout from '../components/layout'
import SEO from '../components/seo'

import MaintenanceIMG from '../components/images/maintenance'
import RenewingIMG from '../components/images/renewing'
// import RenovationIMG from '../components/images/renovation'

const StyledPlumbing = styled(Plumbing)`
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

const DienstenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 0 10px 0;

  @media (min-width: 1280px) {
    justify-content: center;
  }

  @media (min-width: 830px) {
    padding: 0 200px 0;
  }

  /* figure {
    margin: 40px;
  } */
`

const MaintenanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0 100px;
  max-width: 75%;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  figure {
    margin: auto 0;
  }

  div {
    padding: 0 60px 0;
    @media (max-width: 840px) {
      padding: 0;
    }

    h3 {
      @media (max-width: 850px) {
        text-align: center;
        margin: 50px 0 50px;
      }
      margin-bottom: 40px;
    }

    ul {
      margin: 40px 0;
      list-style-type: none;
      li {
        font-family: 'PT Sans', sans-serif;
        line-height: 25px;
      }
    }

    p {
      line-height: 25px;
    }
  }
`
const RenewingWrapper = styled(MaintenanceWrapper)`
  flex-direction: row-reverse;
`
// const RenovationWrapper = styled(MaintenanceWrapper)``

const OnzeDienstenPage = () => (
  <Layout>
    <SEO title="Diensten" description="Onze diensten" />
    <ServiceSection>
      <StyledPlumbing />
      <h1>Onze diensten</h1>
      <DienstenWrapper>
        <MaintenanceWrapper>
          <MaintenanceIMG />
          <div>
            <h3>Onderhoudsattesten</h3>
            <ul>
              <li>
                De verwarmingsketel open maken en visueel controleren op lekken
                of andere zichtbare defecten.
              </li>
              <li>De brander open maken en reinigen. </li>
              <li>Nieuwe dichtingen plaatsen waar nodig.</li>
              <li>Een rookgasanalyse met rendementsmeting uitvoeren. </li>
              <li>
                Eventuele tips in verband met veiligheid of verbruik met u
                delen.
              </li>
              <li>
                Een wettelijk reinigings- en verbrandingsattest afleveren.
              </li>
            </ul>
          </div>
        </MaintenanceWrapper>

        <RenewingWrapper>
          <RenewingIMG />
          <div>
            <h3>Vernieuwen Ketels</h3>
            <p>
              All-in formule, in de getoonde prijs zitten alle nodige uren en
              materialen inbegrepen om de nieuwe cv-ketel te plaatsen. Afbraak
              en verwijderen van de oude installatie is uiteraard inbegrepen.
            </p>

            <ul>
              <li>Afbraak wandketel € 75 </li>
              <li>Plaatsing nieuwe ketel: € 500 </li>
              <li>Forfait schouwaansluiting door gevel: € 150 </li>
              <li>Forfait aansluitmateriaal: € 310</li>
              <li>Keuring mét attest: € 250</li>
            </ul>

            <p>
              De getoonde prijs is exclusief btw. Is het gebouw ouder dan 10
              jaar en meer dan 50% privégebruik, wordt 6% btw gerekend. In alle
              andere gevallen wordt 21% btw gerekend.
            </p>
          </div>
        </RenewingWrapper>

        {/* <RenovationWrapper>
          <RenovationIMG />
          <div>
            <h3>Badkamer Renovatie</h3>
            <ul>
              <li>TODO</li>
            </ul>
          </div>
        </RenovationWrapper> */}
      </DienstenWrapper>
    </ServiceSection>
  </Layout>
)

export default OnzeDienstenPage
