import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Mail } from '@styled-icons/entypo/Mail';
import { Phone } from '@styled-icons/boxicons-solid/Phone';

import logo from '../images/logo.png';

const HeaderContainer = styled.header`
  height: 120px;
  color: white;
  background-color: #0e2f5a;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContactInfoWrapper = styled.div`
  align-self: flex-start;
`;

const StyledPhone = styled(Phone)`
  color: pink;
`;

const HeaderLogo = styled.div`
  height: 70px;
  background-color: lightpink;
  align-self: flex-start;
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
        <StyledPhone />
        <Mail />
        sfggf
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
