/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import styled from 'styled-components';
import { Mail } from '@styled-icons/entypo/Mail';
import { Phone } from '@styled-icons/boxicons-solid/Phone';

import logo from '../images/logo.png';

import Nav from './nav';

const HeaderContainer = styled.header`
  padding: 0 30px;
  height: 120px;
  color: #fff;
  /* background-color: #103661; */
  background-color: black;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  div:nth-child(2) {
    grid-column: 10;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneInfoWrapper = styled.div`
  border-right: 1px solid #696866;
  height: 70px;
  min-width: 200px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    display: flex;
    align-items: center;

    p {
      color: #b87333;
      margin: 0 0 0.1rem 0.3rem;
    }
  }

  p {
    font-family: 'Roboto Slab', serif;
    font-style: italic;
    text-align: left;
    margin-top: 5px;
  }
`;
const MailInfoWrapper = styled(PhoneInfoWrapper)`
  border-right: none;
`;

const StyledPhone = styled(Phone)`
  color: #b87333;
  width: 20px;
`;

const StyledMail = styled(Mail)`
  color: #b87333;
  width: 20px;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => (
  <>
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} height="35px" alt="logo" />
      </HeaderLogo>
      <ContactInfoWrapper>
        <PhoneInfoWrapper>
          <span>
            <StyledPhone />
            <p>Telefoon</p>
          </span>
          <p>+32 499 99 99</p>
        </PhoneInfoWrapper>
        <MailInfoWrapper>
          <span>
            <StyledMail />
            <p>Email</p>
          </span>
          <p>contact@ketelfixer.be</p>
        </MailInfoWrapper>
      </ContactInfoWrapper>
    </HeaderContainer>
    <Nav />
  </>
);

export default Header;
