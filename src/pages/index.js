import React from 'react'
import Layout from 'components/layout'
import styled from 'styled-components'


const StyledIntro = styled.p`
  box-sizing: border-box;
  margin: 10px;
`

const Home = () => <Layout>
  <StyledIntro>
    A blog about how to React with NextJS
  </StyledIntro>
</Layout>

export default Home