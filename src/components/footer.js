import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.footer`
  font-family: 'Roboto Slab', serif;
  display: flex;
  flex-direction: row;
  color: rgb(0, 0, 0, 0.5);
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #363636;
  a {
    color: rgb(0, 0, 0, 0.5);
  }
`

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  height: 2.5rem;
  width: 50%;
`

const FooterRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  height: 2.5rem;
  width: 50%;
`

const Footer = () => (
  <Wrapper>
    <FooterLeft>
      <Link to="/privacy">Privacy Policy</Link>&nbsp; - &copy;
      {new Date().getFullYear()} Ketelfixer
    </FooterLeft>
    <FooterRight>
      Tel: +32 499 99 99
      <br />
      Email: contact@ketelfixer.be
    </FooterRight>
  </Wrapper>
)

export default Footer
