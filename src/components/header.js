import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Mail } from '@styled-icons/entypo/Mail';
import { Phone } from '@styled-icons/boxicons-solid/Phone';

import logo from '../images/logo.png';

const HeaderContainer = styled.header`
  height: 120px;
  color: white;
  background-color: #103661;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  div:nth-child(2) {
    grid-column: 10;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
`;

const PhoneInfoWrapper = styled.div`
  border-right: 1px solid black;
`;
const MailInfoWrapper = styled.div``;

const StyledPhone = styled(Phone)`
  color: #b87333;
  width: 30px;
`;

const StyledMail = styled(Mail)`
  color: #b87333;
  width: 30px;
`;

const HeaderLogo = styled.div`
  height: 70px;
`;

const StickyNav = styled.nav`
  text-align: center;
  height: 80px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
`;

const Banner = styled.div`
  text-align: center;
  height: 500px;
  background-color: darkgray;
`;

const Header = () => (
  <>
    <HeaderContainer>
      <HeaderLogo>
        <img src={logo} height="35px" alt="logo" />
      </HeaderLogo>
      <ContactInfoWrapper>
        <PhoneInfoWrapper>
          <StyledPhone />
          <p>3246536</p>
        </PhoneInfoWrapper>
        <MailInfoWrapper>
          <StyledMail />
          <p>sfdsf@sdf</p>
        </MailInfoWrapper>
      </ContactInfoWrapper>
    </HeaderContainer>
    <StickyNav>
      <p>Sticky navigation</p>
    </StickyNav>
    <Banner>
      <h1>Banner</h1>
    </Banner>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `dsf`,
};

export default Header;
