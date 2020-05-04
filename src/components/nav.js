import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StickyNav = styled.nav`
  text-align: center;
  height: 80px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  ul {
    display: flex;
    li {
      a {
        color: black;
      }
    }
  }
`;

const navList = [
  {
    name: 'Startpagina',
    link: '/',
  },
  {
    name: 'Over Ketelfixer',
    link: '/over-ketelfixer',
  },
  {
    name: 'Realisaties',
    link: '/realisaties',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const navListItems = navList.map((item, index) => (
  <li>
    <Link
      to={item.link}
      activeStyle={{ backgroundColor: '#000', color: '#FFF' }}
    >
      {item.name}
    </Link>
  </li>
));

const Nav = () => (
  <>
    <StickyNav>
      <ul>{navListItems}</ul>
    </StickyNav>
  </>
);

export default Nav;
