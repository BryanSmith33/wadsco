import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 750px) {
    display: block;
  }
`
const Bar = styled.div`
  width: 30px;
  height: 3px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
`
const NavContainer = styled.div`
  background: #111111e3;
  color: #fff;
  height: ${props => (props.visible ? `235px` : 0)};
  width: 100%;
  position: absolute;
  left: 0;
  top: 90px;
  transition: height 0.7s;
`
const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0.5em 0;
  &:hover {
    color: #ab0e17;
  }
`
const MobileNavContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
`
const NavPageLink = styled.li`
  margin: 0;
  padding: 0 1em;
  font-family: 'Lato';
  font-weight: bold;
  font-size: 0.8em;
  text-transform: uppercase;
`

class MobileNav extends Component {
  state = {
    showMobileNav: false,
  }
  handleShowMobileNav = () => {
    this.setState(prevState => {
      return {
        showMobileNav: !prevState.showMobileNav,
      }
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <Hamburger onClick={this.handleShowMobileNav}>
          <Bar />
          <Bar />
          <Bar />
        </Hamburger>
        <NavContainer visible={this.state.showMobileNav}>
          <MobileNavContainer>
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
          </MobileNavContainer>
        </NavContainer>
      </>
    )
  }
}

export default MobileNav
