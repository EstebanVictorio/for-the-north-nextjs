import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
const StyledSidebar = styled.aside`
  background-color: purple;
  height: calc(100vh - 60px);
  transition: width 0.1s linear;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: sidebar;
  &.open {
    width: 120px;
  }

  &.closed {
    width: 60px;
  }

  .toggle {
    height: 60px;
    box-sizing: border-box;
    background-color: transparent;
    background-position: center;
    background-size: 40px 40px;
    background-repeat: no-repeat;
    outline: none;
    border: none;
    transition: width 0.1s linear;
    filter: invert(1);
  }

  .toggle:hover {
    background-color: cyan;
    filter: none;
  }

  .open {
    width: 120px;
    background-image: url('/for-the-north-nextjs/img/arrow-left.svg');
  }

  .closed {
    width: 60px;
    background-image: url('/for-the-north-nextjs/img/arrow-right.svg');
  }


  .navigation-link {
    text-decoration: none;
    box-sizing: border-box;
    padding: 0.5em 1em;
    color: whitesmoke;
    font-size: 20px;
  }

  .nav-content {
    display: flex;
    align-items: center;
  }

  .nav-description {
    margin: 0 5px;
  }

  .navigation-link:hover {
    background-color: cyan;
    color: black;
  }

  .navigation-link:hover > .nav-content > .nav-icon {
    filter: none;
  }



  .nav-open {
    width: 120px;
  }

  .nav-closed > .nav-content > .nav-description {
    display: none;
  }

  .nav-closed {
    width: 60px;
  }

  .nav-icon {
    filter: invert(1);
  }
`

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const handleOpenClick = () => setOpen(!open)
  return (
    <StyledSidebar className={open ? 'open sidebar' : 'closed sidebar'}>
      <input className={open ? 'toggle open' : 'toggle closed'} type="button" onClick={handleOpenClick} />
        <Link className={open ? "navigation-link nav-open" : "navigation-link nav-closed"} to="/posts">
          <span className="nav-content">
            <img className="nav-icon" src="/for-the-north-nextjs/img/forum.svg"/>
            <span className="nav-description">Posts</span>
          </span>
        </Link>
        <Link className={open ? "navigation-link nav-open" : "navigation-link nav-closed"} to="/about">
          <span className="nav-content">
            <img className="nav-icon" src="/for-the-north-nextjs/img/help.svg"/>
            <span className="nav-description">About</span>
          </span>
        </Link>
    </StyledSidebar>
  )
}
export default Sidebar