import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
  background: linear-gradient(to bottom right,darkblue, purple);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  grid-area: navbar;
  .brand-navigation {
    color: whitesmoke;
    text-decoration: none;
    padding: 0 0.5em;
    font-size: 32px;
  }
`

const Navbar = () => (
  <StyledNavbar>
    <a className="brand-navigation" href="/">
      <span className="brand">FTN</span>
    </a>
  </StyledNavbar>
)

export default Navbar