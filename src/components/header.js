import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import sideLogo from '../images/work_guy.svg';

const HeaderContainer = styled.header`
  height: 120px;
  color: white;
  background-color: #0e2f5a;
  display: flex;
`;

const AccountInfoWrapper = styled.div``;

const HeaderLogo = styled.div`
  width: 200px;
  height: 70px;
`;

const StickyNav = styled.nav`
  height: 100px;
  background-color: blue;
  position: sticky;
  top: 0;
`;

const Banner = styled.div``;

const Header = ({ siteTitle }) => (
  <>
    <HeaderContainer>
      <HeaderLogo>
        <img src={sideLogo} width="80px" alt="sfd" />
        {siteTitle}
      </HeaderLogo>
    </HeaderContainer>
    <StickyNav />
    <Banner />
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: `dsf`,
};

export default Header;
