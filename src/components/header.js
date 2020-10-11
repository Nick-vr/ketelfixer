import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import logo from '../images/logo.png'
import prism from '../images/prism.png'

import ContactInfo from './contactInfo'
import Nav from './nav'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 0 30px;
  height: 120px;
  color: #fff;
  background-image: url(${prism});
  div:nth-child(2) {
    grid-column: 10;
  }

  @media (max-width: 735px) {
    height: 200px;
    flex-direction: column;
  }
`

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 735px) {
    padding-top: 30px;
  }
`

const Header = () => (
  <>
    <HeaderContainer>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} height="60px" alt="logo" />
        </Link>
      </HeaderLogo>
      <ContactInfo />
    </HeaderContainer>
    <Nav />
  </>
)

export default Header
