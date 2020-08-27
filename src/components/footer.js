import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import prism from '../images/prism.png'
import ContactInfo from './contactInfo'

const Wrapper = styled.footer`
  /* background-image: url(${prism}); */
  display: flex;
  flex-direction: column;
  color: rgb(0, 0, 0, 0.5);
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 3.5rem;
  width: 100%;
  background-color: rgb(184, 115, 51, 0.85);
`

const FooterBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  background-color: #363636;
`

const Footer = () => (
  <Wrapper>
    <FooterTop>dfghdfg</FooterTop>
    <FooterBot>
      <Link to="/privacy">Privacy Policy</Link>&nbsp; - &copy;
      {new Date().getFullYear()} Ketelfixer
    </FooterBot>
  </Wrapper>
)

export default Footer
