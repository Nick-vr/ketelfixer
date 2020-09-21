import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import navlist from '../utils/navlist'

const StickyNav = styled.nav`
  z-index: 100;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 3.5rem;
  background-color: #ffffff;
  box-shadow: inset 0px -11px 3px -11px #ccc;

  ul {
    display: flex;
    li {
      margin: 0 1.5rem;
      @media (max-width: 735px) {
        margin: 0 0.8rem;
      }
      a {
        text-transform: uppercase;
        color: black;
        font-size: 1.2rem;
        transition: all 0.5s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #353535;
          color: #fff;
        }
        @media (max-width: 735px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`

const navListItems = navlist.map((item, index) => (
  <li key={index}>
    <Link
      to={item.link}
      activeStyle={{ backgroundColor: '#353535', color: '#fff' }}
    >
      {item.name}
    </Link>
  </li>
))

const Nav = () => (
  <>
    <StickyNav>
      <ul>{navListItems}</ul>
    </StickyNav>
  </>
)

export default Nav
