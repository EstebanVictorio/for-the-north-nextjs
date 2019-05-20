import React from 'react'
import styled from 'styled-components'

const StyledList = styled.ul`
`

const StyledOrderedList = styled.ol`
  .navigation-link {
    box-sizing: border-box;
    padding: 0.5em 1em;
    color: whitesmoke;
    font-size: 20px;
  }
`

const List = ({ elements, ordered }) => (
  ordered ? (
    <StyledOrderedList>
      { elements.map(element => <li>{element}</li>) }
    </StyledOrderedList>
  ) : (
    <StyledList>
    { elements.map(element => <li>{element}</li>) }
    </StyledList>
  )
)

export default List