import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout'
import PostHeading from 'components/post-heading'
import PostParagraph from 'components/post-paragraph'
import List from 'components/list'

const StyledLink = styled.a`
  color: whitesmoke;
`

const StyledImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Basics = () => {
  const exampleListPoints = [
    'A Home page, describing highlights of the product.',
    'An About page, describing why this product exists.',
    "A Contact page, letting you know the whereabouts of the"+
    "product's owners and how you might acquire the product."
  ]

  const prerequisitePoints = [
    'Node JS',
    'npm/yarn'
  ]

  const packageJsonConfig = `
  {
    "dependencies":{
      "react": "16.8.6",
      "react-dom": "16.8.6",
      "next": "8.1.0"
    },
    "scripts": {
      "dev" : "next"
    }
  }
  `

  const indexSample = `
    import Layout from './../layout'

    const Home = () => (
      <Layout>
        <h1>Distraction is over. Meet: The super lettuce.</h1>
        <p>
          A bio-engineered super lettuce capable of super concentration powers.
        </p>
      </Layout>
    )
  
    export default Home
  `


  const aboutSample = `
    import Layout from './../layout'

    const About = () => (
      <Layout>
        <h4>
          About the super lettuce.
        </h4>
        <div>
          The super lettuce will grant you inimaginable concentration powers.
          You will be able to program for hours and not losing a single drop of
          focus in your entire rush. It is proposed to combat one of many problems
          in the world: Concentration Loss.
        </div>
      </Layout>
    )

    export default About
  `

  const contactSample = `
    import Layout from './../layout'

    const Contact = () => (
      <Layout>
        <div>Contact us!</div>
        <a href="mailto:sample@superlettuce.com">
          Reach us at our company email!
        </a>
      </Layout>
    )

    export default Contact
  `

  const folderStructure = `
    node_modules
    yarn.lock
    package.json
    layout.js
    /pages
      index.js
      about.js
      contact.js
  `

  const nextJSFolderStructure = `
    .next // This is new!
    node_modules
    yarn.lock
    package.json
    layout.js
    /pages
      index.js
      about.js
      contact.js
`

  const layoutComponentSample = `
    import Link from 'next/link'
    const Layout = ({ children }) => (
      <main>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        { children }
      </main>
    )
  
    export default Layout
  `

  const layoutCommentComponentSample = `
  // Layout component in layout.js
  import Layout from './../layout'

  const Home = () => (
    <Layout> // Wraps 'div'.
      <div>Home page</div> // <-- Children set
    </Layout>
  )

  export default Home

  // Home page component in /pages/index.js
  import Link from 'next/link'
  const Layout = ({ children }) => ( // <--- Unwraps children via destructuring
    <main>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      { children } // <--- Children rendered
    </main>
  )

  export default Layout
`
    const buildMsgs = `
    [ wait ]  compiling ...
    [ ready ] compiled successfully
    [ info ]  ready on http://localhost:3000
    `

  return (
    <Layout>
      <PostHeading>
        How to React really fast - Part 1: Pages
      </PostHeading>
      <PostParagraph>
        Have you ever found yourself in practicing some React,
        in your environment, but felt like it was way too much setup
        for some simple practicing? No worries.
      </PostParagraph>
      <PostParagraph>
        <StyledLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
        >
          NextJS
        </StyledLink> got you covered.
      </PostParagraph>
      <PostParagraph>
        How come do we need to Webpack everytime you ask? That might be the case,
        but that particular task doesn't everytime land on you, dear developer.
        We just need to reach out our research a little longer or further.
        Enter NextJS.
      </PostParagraph>
      <PostParagraph>
        NextJS is a React framework that allows you to deliver your React apps
        faster.
      </PostParagraph>
      <PostParagraph>
        Let's jump into it. You never buy someone's idea or suggestion without a
        showcase of it. So... Let's say we want to build just a veeery basic
        but descriptive page about a product. This might be composed of
        the following:
        <List elements={exampleListPoints} />
      </PostParagraph>
      <PostParagraph>
        Before getting onto this, there are two pre-requisites that you need to
        have installed on your machine:
      </PostParagraph>
      <List elements={prerequisitePoints} />
      <PostParagraph>
        Being able to start is pretty easy. Open the editor of your choice,
        choose a folder to work from, and open a terminal on your computer
        as well. After these minor steps, run any of the following:
        <PostParagraph>
        <code>
          npm i --save next react react-dom
        </code>
        <PostParagraph>
          Or, if you prefer...
        </PostParagraph>
        <code>
          yarn add next react react-dom
        </code>
        </PostParagraph>
      </PostParagraph>
      <PostParagraph>
        Now, before beginning to code our pages, there is a tiny step we should
        do if we do not want to use the terminal (very often). NextJS allows you
        to start a server which serves your app and your pages along with it, as
        well as helping you with hot reloading so you don't have to start the
        server as many times as you would do everytime you performn an update
        to your code.
      </PostParagraph>
      <PostParagraph>
      To do this, we can add the following line to
        the <code>scripts</code> field in <code>package.json</code>:
      </PostParagraph>
        <PostParagraph>
          <pre>
            { packageJsonConfig }
          </pre>
        </PostParagraph>
      <PostParagraph>
        This config allows us to run NextJS in development mode, so we can
        run <pre><code>yarn dev</code></pre> in the terminal. This is a preference and
        you might as well use <pre><code>yarn next</code></pre>.
      </PostParagraph>
      <PostParagraph>
        Now we're all set to start. The following step is to create a folder
        named <code>pages</code>, as well as a <code>layout</code> component
        in our root directory, so we create the following file structure:
        <pre>
          <code>
            { folderStructure }
           </code>
        </pre>
      </PostParagraph>
      <PostParagraph>
        Now, we can proceed to code our very first NextJS-based React app.
        As our main component driving navigation towards the app, we'll build
        the <code>Layout</code> component:
        <pre>
          { layoutComponentSample }
        </pre>
      </PostParagraph>
      <PostParagraph>
        Let's dive a little into what happens here. First, we need a way to
        navigate across the site. Of course, we could do this purely with <code>
          anchor
        </code> tags, but since we are in a framework, we'll take advantage of
        the <code>Link</code> component that NextJS provides.
        This component allows the navigation as if it were an single page app.
        So, loading will look seamless. Currently, NextJS encourages you to
        still enclose the text content inside an <code>anchor</code> tag
        due to deprecation using text-only, but that makes no harm to the
        navigation.
      </PostParagraph>
      <PostParagraph>
        Something to point out here is that we're using a very particular
        syntax here, called <code>destructuring assignment</code>. We're
        not diving here too deep into that, but this is a feature of the
        ES6 standard, which lets you unwrap the property values you send/inject
        to a component in an attribute-like manner in your code. Since React
        wraps everything into the <code>props</code> argument, using
        destructuring the <code>props</code> object will give you access to
        all of the properties you provided. If you try to unwrap a property
        that's not injected, you will get the <code>undefined</code> value.
        This is JavaScript behavior itself, not a React one.
      </PostParagraph>
      <PostParagraph>
        One last thing here that allows us to have the <code>nav</code>
        element in all pages is the property <code>children</code>.
        This property represents the elements that are wrapped inside a
        component when used:
        <pre>
        { layoutCommentComponentSample }
        </pre>
      </PostParagraph>
      <PostParagraph>
        Now, for our first page, there's <code>index.js</code>, which will respond
        automatically to the <code>/</code> route. We would write something
        like:
        <pre>
          {
            indexSample
          }
        </pre>
        This would tell NextJS that this is our first page module.
      </PostParagraph>
      <PostParagraph>
        Then, we'll write our <code>/about</code> page code, describing the
        product:
        <pre>
          { aboutSample }
        </pre>
      </PostParagraph>
      <PostParagraph>
        And finally, the last page, where we'll let our users to check where
        they can reach the company out, the <code>/contact</code> page:
        <pre>
          { contactSample }
        </pre>
      </PostParagraph>
      <PostParagraph>
        After this, we can run the command we set at the
        <code>scripts</code> field in <code>package.json</code>,
        which is <code>npm dev</code> or <code>yarn dev</code>,
        depending on your package manager.
        Running that command will lead you to having the following structure:
        <pre>
        {
          nextJSFolderStructure
        }
        </pre>
      </PostParagraph>
      <PostParagraph>
        When that folder appears, it means that Next built your app, which
        means that you also got some messages like the following:
        <pre>
          {
            buildMsgs
          }
        </pre>
      </PostParagraph>
      <PostParagraph>
        This means that your app is ready to be used, and you can access it via 
        entering <code>http://localhost:3000</code> in the address bar,
        which will lead to something like this:
      </PostParagraph>
      <StyledImgWrapper>
      <img src="https://media.giphy.com/media/LOzodNjCkZ2ufrk7Vo/giphy.gif" />
      </StyledImgWrapper>
      <PostParagraph>
        What happened is that Next took care of using Webpack under the hood
        for the required dependencies to create and develop our app, so we can
        completely focus on the features rather than the setup. This is a way
        we can at least get some momentum on diving deep in case we want to
        learn further or analyze our options at the time of choosing how we want
        to React in different use cases. This one of those, and it lets us
        step forward relatively fast.
      </PostParagraph>
      <PostParagraph>
        And that's it! You created a web app that has a tiny setup letting you
        develop your features in a comfortable way!
      </PostParagraph>
    </Layout>
  )
}


export default Basics