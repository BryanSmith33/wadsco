import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MobileNav from './MobileNav'

const Navbar = styled.nav`
  width: 100%;
  height: 4em;
  padding: 0 2em;
  background: #111111e3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 2;
`
const CompanyName = styled.div`
  text-transform: uppercase;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wadsworth = styled.div`
  font-family: 'Alfa Slab One';
  line-height: 7px;
`
const Construction = styled.div`
  font-family: 'Lato';
`
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ab0e17;
  }
`
const NavContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  @media (max-width: 750px) {
    display: none;
  }
`
const NavPageLink = styled.li`
  margin: 0;
  padding: 0 1em;
  font-family: 'Lato';
  font-weight: bold;
  font-size: .8em;
  text-transform: uppercase;
`

const Header = () => (
  <Navbar>
    <CompanyName>
      <NavLink to="/">
        <Wadsworth>Wadsworth</Wadsworth>
        <Construction>Construction</Construction>
      </NavLink>
    </CompanyName>
    <MobileNav />
    <NavContainer>
      <NavLink to="/about/" activeClassName="active-link">
        <NavPageLink>About RLW</NavPageLink>
      </NavLink>
      <NavLink to="/services/" activeClassName="active-link">
        <NavPageLink>Services</NavPageLink>
      </NavLink>
      <NavLink to="/careers/" activeClassName="active-link">
        <NavPageLink>Careers</NavPageLink>
      </NavLink>
      <NavLink to="/news/" activeClassName="active-link">
        <NavPageLink>News</NavPageLink>
      </NavLink>
      <NavLink to="/contact/" activeClassName="active-link">
        <NavPageLink>Contact</NavPageLink>
      </NavLink>
    </NavContainer>
  </Navbar>
)

export default Header
