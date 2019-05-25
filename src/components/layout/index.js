import React,{ useState , useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Media from 'components/media'
import Navbar from 'components/navbar'
import Sidebar from 'components/sidebar'

const GlobalStyle = createGlobalStyle`
  @font-face {
      src: url('/for-the-north-nextjs/fonts/Neutra-Text-Bold.otf') format('opentype');
      font-family: bFont;
  }
  html, body {
    margin: 0;
    padding: 0;
    background-color: #282c44;
    font-family: bFont;
  }
  
`

const StyledLayout = styled.main`
  color: whitesmoke;
  display: grid;

  .content {
    grid-area: main-content;
    overflow-y: auto;
  }

  @media screen and (min-width: 144px) {
    grid-template-areas:
    "navbar"
    "sidebar"
    "main-content";
    grid-template-columns: none;
    .sidebar {
      height: unset;
      width: 100%;

      .toggle {
        display: none;
      }

      .navigation-link {
        width: 100%;
        display: flex;
        justify-content: center; 
        .nav-description {
          display: inline-block;
        }
      }
    }
    .content {
      height: calc(100vh - 146px);
    }
  }

  @media screen and (min-width: 1024px){
    grid-template-areas:
    "navbar navbar"
    "sidebar main-content";
    grid-template-columns: minmax(min-content,max-content) 1fr;
    grid-template-rows: repeat(minmax(min-content,max-content),2);

    .content {
      height: calc(100vh - 60px);
    }
  }

`

const useMedia = () => {
  const [media, setMedia] = useState('xl')
  // useEffect(() => {
  //   if(window.matchMedia("min-width: 144px").matches){
  //     setMedia('xs')
  //   } else if(window.matchMedia("min-width: 240px").matches) {
  //     setMedia('sm')
  //   } else if(window.matchMedia("min-width: 420px").matches) {
  //     setMedia('md')
  //   } else if(window.matchMedia("min-width: 720px").matches) {
  //     setMedia('lg')
  //   } else if(window.matchMedia("min-width: 1080px").matches) {
  //     setMedia('xl')
  //   }
  // }, window.innerWidth)
  return media
}

const Layout = ({ children }) => {
  const selectedMedia = useMedia()
  
  return (
    <>
      <GlobalStyle />
      <Media media={selectedMedia} />
        <StyledLayout>
          <Navbar />
          <Sidebar />
            <div className="content">
              { children }
            </div>
        </StyledLayout>
    </>
  )
}

export default Layout