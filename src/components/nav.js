import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StickyNav = styled.nav`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 3.5rem;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  box-shadow: inset 0px -11px 3px -11px #ccc;
  ul {
    display: flex;
    li {
      margin: 0 1.5rem;
      a {
        text-transform: uppercase;
        color: black;
        font-size: 1.2rem;
        transition: all 0.5s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #000;
          color: #fff;
        }
      }
    }
  }
`;

const navList = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Over Ons',
    link: '/over-ons',
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
  <li key={index}>
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
