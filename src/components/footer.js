import React from 'react'
import styled from 'styled-components'

import prism from '../images/prism.png'

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0, 0.5);
  font-size: 0.8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-image: url(${prism});
`

const Footer = () => (
  <Wrapper>&copy; {new Date().getFullYear()} Ketelfixer</Wrapper>
)

export default Footer
