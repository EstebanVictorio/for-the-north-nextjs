import React from 'react'
import Layout from 'components/layout'

const StyledIntro = styled.p`
  box-sizing: border-box;
  margin: 10px;
`


const About = () => <Layout>
  <StyledIntro>
    A way to introduce yourself into React without much of a hassle.
  </StyledIntro>
</Layout>

export default About