import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.section`
  margin: 50px auto;
  max-width: 70%;

  h2 {
    margin-bottom: 50px;
  }

  p {
    line-height: 40px;
  }
`

const PrivacyPolicy = () => (
  <Layout>
    <SEO title="Privacy policy" />
    <Wrapper>
      <h2>
        <strong>Privacy Policy</strong>
      </h2>
      <p>
        <strong>Privacy policy</strong> voor Ketelfixer, eigenaar van
        https://www.ketelfixer.be/
      </p>
      <p>
        <strong>1&#41; Waarborgen Privacy</strong>
      </p>
      <p>
        Het waarborgen van de privacy van bezoekers van
        https://www.ketelfixer.be/ is een belangrijke taak voor ons. Daarom
        beschrijven we in onze privacy policy welke informatie we verzamelen en
        hoe we deze informatie gebruiken.
      </p>
      <p>
        <strong>2&#41; Toestemming</strong>
      </p>
      <p>
        Door de informatie en de diensten op https://www.ketelfixer.be/ te
        gebruiken, gaat u akkoord met onze privacy policy en de voorwaarden die
        wij hierin hebben opgenomen.
      </p>
      <p>
        <strong>3&#41; Vragen</strong>
      </p>
      <p>
        Als u meer informatie wilt ontvangen, of vragen hebt over de privacy
        policy van Ketelfixer en specifiek https://www.ketelfixer.be/, kunt u
        ons benaderen via e-mail. Ons e-mailadres is contact@ketelfixer.be.
      </p>
      <p>
        <strong>4&#41; Monitoren gedrag bezoeker</strong>
      </p>
      <p>
        https://www.ketelfixer.be/ maakt gebruik van verschillende technieken om
        bij te houden wie de website bezoekt, hoe deze bezoeker zich op de
        website gedraagt en welke pagina’s worden bezocht. Dat is een
        gebruikelijke manier van werken voor websites omdat het informatie
        oplevert op die bijdraagt aan de kwaliteit van de gebruikerservaring. De
        informatie die we, via cookies, registreren, bestaat uit onder meer
        IP-adressen, het type browser en de bezochte pagina’s.
      </p>
      <p>
        Tevens monitoren we waar bezoekers de website voor het eerst bezoeken en
        vanaf welke pagina ze vertrekken. Deze informatie houden we anoniem bij
        en is niet gekoppeld aan andere persoonlijke informatie.
      </p>
      <p>
        <strong>5&#41; Gebruik van cookies</strong>
      </p>
      <p>
        https://www.ketelfixer.be/ plaatst cookies bij bezoekers. Dat doen we om
        informatie te verzamelen over de pagina’s die gebruikers op onze website
        bezoeken, om bij te houden hoe vaak bezoekers terug komen en om te zien
        welke pagina’s het goed doen op de website. Ook houden we bij welke
        informatie de browser deelt.
      </p>
      <p>
        <strong>6&#41; Cookies uitschakelen</strong>
      </p>
      <p>
        U kunt er voor kiezen om cookies uit te schakelen. Dat doet u door
        gebruik te maken de mogelijkheden van uw browser. U vindt meer
        informatie over deze mogelijkheden op de website van de aanbieder van uw
        browser.
      </p>
    </Wrapper>
  </Layout>
)

export default PrivacyPolicy
