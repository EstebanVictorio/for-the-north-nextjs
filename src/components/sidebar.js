import React, {useState} from 'react'
import styled from 'styled-components'

const StyledSidebar = styled.aside`
  background-color: purple;
  height: 100vh;
  transition: width 0.1s linear;
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
    outline: none;
    border: 1px solid gray;
    transition: width 0.1s linear;
  }

  .open {
    width: 120px;
  }

  .closed {
    width: 60px;
  }
`

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const handleOpenClick = () => setOpen(!open)
  return (
    <StyledSidebar className={open ? 'open' : 'closed'}>
      <input className={open ? 'toggle open' : 'toggle closed'} type="button" onClick={handleOpenClick} />
    </StyledSidebar>
  )
}
export default Sidebar