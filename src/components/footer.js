import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Slab', serif;
  color: rgb(0, 0, 0, 0.5);
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background-color: #363636;
  a {
    color: rgb(0, 0, 0, 0.5);
    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`

const Footer = () => (
  <StyledFooter>
    <Link to="/privacy">Privacy Policy</Link>&nbsp; - &copy;
    {new Date().getFullYear()} Ketelfixer
  </StyledFooter>
)

export default Footer
