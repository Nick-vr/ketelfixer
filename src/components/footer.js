import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background: blue;
`;

const Footer = () => (
  <Wrapper>&copy; {new Date().getFullYear()} Ketelfixer</Wrapper>
);

export default Footer;
