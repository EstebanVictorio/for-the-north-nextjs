import React from 'react'
import styled from 'styled-components'


const StyledPostParagraph = styled.p`
  padding: 10px;
  font-size: 24px;
  font-weight: 700;
`


const PostParagraph = ({ children }) => (
  <StyledPostParagraph>
    { children }
  </StyledPostParagraph>
)

export default PostParagraph