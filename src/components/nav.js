import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StickyNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80px;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  ul {
    display: flex;
    li {
      margin: 0 1.5rem;
      a {
        text-transform: uppercase;
        color: black;
        font-size: 1.3rem;
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
