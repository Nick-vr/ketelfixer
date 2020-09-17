import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import navlist from '../utils/navlist'

const MobileNav = styled.nav`
  z-index: 2;
  display: flex;
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};
  opacity: ${props => (props.opened ? '1' : '0')};
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  color: red;
  transition: all 0.5s ease-out;

  span {
    display: block;
    color: #1e1e1e;
    font-size: 25px;
    padding: 20px 0;
    transition: all 0.5s ease;

    &:hover {
      color: #faebd7;
    }
  }
`

const Burger = styled.div`
  z-index: 2;
  display: inline-block;
  position: fixed;
  cursor: pointer;
  right: 30px;
  bottom: 30px;
  background-color: #b87333;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding: 7px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15), -4px 4px 4px rgba(0, 0, 0, 0.15),
    4px 4px 4px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: blue;
  }

  @media (max-width: 768px) {
    right: 15px;
    bottom: 15px;
  }
`

const Bar1 = styled.div`
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  transform: ${props =>
    props.opened ? 'rotate(-45deg) translate(-6px, 6px)' : ''};
`
const Bar2 = styled.div`
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  opacity: ${props => (props.opened ? 0 : 1)};
`
const Bar3 = styled.div`
  width: 25px;
  height: 2px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  transform: ${props =>
    props.opened ? 'rotate(45deg) translate(-5px, -6px)' : ''};
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

const Nav = () => {
  const [opened, setOpened] = useState(false)
  const toggleOpened = () => {
    const currentState = opened
    setOpened(!currentState)
  }
  return (
    <>
      <Burger opened={opened} onClick={toggleOpened}>
        <Bar1 opened={opened} />
        <Bar2 opened={opened} />
        <Bar3 opened={opened} />
      </Burger>
      <MobileNav>
        <p>nav</p>
        <h1>sdfsddgs</h1>
      </MobileNav>
    </>
  )
}

export default Nav
