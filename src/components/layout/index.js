import React,{ useState , useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Media from 'components/media'
import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: #282c44;
  }
`

const StyledLayout = styled.main`
  color: whitesmoke;
`

const useMedia = () => {
  const [media, setMedia] = useState('xs')
  useEffect(() => {
    if(window.matchMedia("min-width: 144px").matches){
      setMedia('xs')
    } else if(window.matchMedia("min-width: 240px").matches) {
      setMedia('sm')
    } else if(window.matchMedia("min-width: 420px").matches) {
      setMedia('md')
    } else if(window.matchMedia("min-width: 720px").matches) {
      setMedia('lg')
    } else if(window.matchMedia("min-width: 1080px").matches) {
      setMedia('xl')
    }
  }, window.innerWidth)
  return media
}

const Layout = ({ children }) => {
  const media = useMedia()
  
  return (
    <>
      <GlobalStyle />
      <Media media={media} />
        <StyledLayout>
          <Navbar />
          <Sidebar />
          { children }
        </StyledLayout>
    </>
  )
}

export default Layout