import React from 'react'
import styled from 'styled-components'


const StyledPostHeading = styled.h1`
  padding: 20px;
  width: 100%;
  font-size: 60px;
  box-sizing: border-box;
`


const PostHeading = ({ children }) => (
  <StyledPostHeading>
    { children }
  </StyledPostHeading>
)


export default PostHeading