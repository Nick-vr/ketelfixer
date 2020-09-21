/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

// import Banner from '../components/images/banner'
import MaintenanceIMG from '../../components/images/maintenance'
import RenewingIMG from '../../components/images/renewing'
import RenovationIMG from '../../components/images/renovation'

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

  /* figure {
    margin: 40px;
  } */
`

const MaintenanceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0 100px;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div {
    padding-left: 30px;

    h3 {
      @media (max-width: 850px) {
        text-align: center;
        margin: 50px 0 50px;
      }
      margin-bottom: 20px;
    }

    ul {
      list-style-type: circle;
      li {
        font-family: 'PT Sans', sans-serif;
        line-height: 25px;
      }
    }
  }
`
const RenewingWrapper = styled(MaintenanceWrapper)`
  flex-direction: row-reverse;
`
const RenovationWrapper = styled(MaintenanceWrapper)``

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
            <h3>Onderhoud & Keuringen</h3>
            <ul>
              <li>
                de verwarmingsketel open maken en visueel controleren op lekken
                of andere zichtbare defecten.
              </li>
              <li>de brander open maken en reinigen. </li>
              <li>nieuwe dichtingen plaatsen waar nodig. (inbegrepen) </li>
              <li>een rookgasanalyse met rendementsmeting uitvoeren. </li>
              <li>
                eventuele tips in verband met veiligheid of verbruik met u
                delen.
              </li>
              <li>
                een wettelijk reinigings- en verbrandingsattest afleveren.
              </li>
            </ul>
          </div>
        </MaintenanceWrapper>

        <RenewingWrapper>
          <RenewingIMG />
          <div>
            <h3>Vernieuwen Ketels</h3>
            <ul>
              <li>
                de verwarmingsketel open maken en visueel controleren op lekken
                of andere zichtbare defecten.
              </li>
              <li>de brander open maken en reinigen. </li>
              <li>nieuwe dichtingen plaatsen waar nodig. (inbegrepen) </li>
              <li>een rookgasanalyse met rendementsmeting uitvoeren. </li>
              <li>
                eventuele tips in verband met veiligheid of verbruik met u
                delen.
              </li>
              <li>
                een wettelijk reinigings- en verbrandingsattest afleveren.
              </li>
            </ul>
          </div>
        </RenewingWrapper>

        <RenovationWrapper>
          <RenovationIMG />
          <div>
            <h3>Badkamer Renovatie</h3>
            <ul>
              <li>
                de verwarmingsketel open maken en visueel controleren op lekken
                of andere zichtbare defecten.
              </li>
              <li>de brander open maken en reinigen. </li>
              <li>nieuwe dichtingen plaatsen waar nodig. (inbegrepen) </li>
              <li>een rookgasanalyse met rendementsmeting uitvoeren. </li>
              <li>
                eventuele tips in verband met veiligheid of verbruik met u
                delen.
              </li>
              <li>
                een wettelijk reinigings- en verbrandingsattest afleveren.
              </li>
            </ul>
          </div>
        </RenovationWrapper>
      </DienstenWrapper>
    </ServiceSection>
  </Layout>
)

export default OnzeDienstenPage
