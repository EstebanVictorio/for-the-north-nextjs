(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(e,n,t){"use strict";t.r(n);var a=t(146),o=t.n(a),r=t(0),l=t.n(r),i=t(147),c=t(151);function u(){var e=o()(["\n  padding: 20px;\n  width: 100%;\n  font-size: 60px;\n  box-sizing: border-box;\n"]);return u=function(){return e},e}var s=i.b.h1(u()),d=function(e){var n=e.children;return l.a.createElement(s,null,n)};function m(){var e=o()(["\n  padding: 10px;\n  font-size: 24px;\n  font-weight: 700;\n"]);return m=function(){return e},e}var p=i.b.p(m()),h=function(e){var n=e.children;return l.a.createElement(p,null,n)},g=t(152);function f(){var e=o()(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);return f=function(){return e},e}function v(){var e=o()(["\n  color: whitesmoke;\n"]);return v=function(){return e},e}var y=i.b.a(v()),w=i.b.div(f());n.default=function(){return l.a.createElement(c.a,null,l.a.createElement(d,null,"How to React really fast - Part 1: Pages"),l.a.createElement(h,null,"Have you ever found yourself in practicing some React, in your environment, but felt like it was way too much setup for some simple practicing? No worries."),l.a.createElement(h,null,l.a.createElement(y,{target:"_blank",rel:"noopener noreferrer",href:"https://nextjs.org/"},"NextJS")," got you covered."),l.a.createElement(h,null,"How come do we need to Webpack everytime you ask? That might be the case, but that particular task doesn't everytime land on you, dear developer. We just need to reach out our research a little longer or further. Enter NextJS."),l.a.createElement(h,null,"NextJS is a React framework that allows you to deliver your React apps faster."),l.a.createElement(h,null,"Let's jump into it. You never buy someone's idea or suggestion without a showcase of it. So... Let's say we want to build just a veeery basic but descriptive page about a product. This might be composed of the following:",l.a.createElement(g.a,{elements:["A Home page, describing highlights of the product.","An About page, describing why this product exists.","A Contact page, letting you know the whereabouts of theproduct's owners and how you might acquire the product."]})),l.a.createElement(h,null,"Before getting onto this, there are two pre-requisites that you need to have installed on your machine:",l.a.createElement(g.a,{elements:["Node JS","npm/yarn"]})),l.a.createElement(h,null,"Being able to start is pretty easy. Open the editor of your choice, choose a folder to work from, and open a terminal on your computer as well. After these minor steps, run any of the following:",l.a.createElement(h,null,l.a.createElement("code",null,"npm i --save next react react-dom"),l.a.createElement(h,null,"Or, if you prefer..."),l.a.createElement("code",null,"yarn add next react react-dom"))),l.a.createElement(h,null,"Now, before beginning to code our pages, there is a tiny step we should do if we do not want to use the terminal (very often). NextJS allows you to start a server which serves your app and your pages along with it, as well as helping you with hot reloading so you don't have to start the server as many times as you would do everytime you performn an update to your code. To do this, we can add the following line to the ",l.a.createElement("code",null,"scripts")," field in ",l.a.createElement("code",null,"package.json"),":",l.a.createElement(h,null,l.a.createElement("pre",null,'\n  {\n    "dependencies":{\n      "react": "16.8.6",\n      "react-dom": "16.8.6",\n      "next": "8.1.0"\n    },\n    "scripts": {\n      "dev" : "next"\n    }\n  }\n  '),"This config allows us to run NextJS in development mode, so we can run ",l.a.createElement("code",null,"yarn dev")," in the terminal. This is a preference and you might as well use ",l.a.createElement("code",null,"yarn next"),".")),l.a.createElement(h,null,"Now we're all set to start. The following step is to create a folder named ",l.a.createElement("code",null,"pages"),", as well as a ",l.a.createElement("code",null,"layout")," component in our root directory, so we create the following file structure:",l.a.createElement("pre",null,l.a.createElement("code",null,"\n    node_modules\n    yarn.lock\n    package.json\n    layout.js\n    /pages\n      index.js\n      about.js\n      contact.js\n  "))),l.a.createElement(h,null,"Now, we can proceed to code our very first NextJS-based React app. As our main component driving navigation towards the app, we'll build the ",l.a.createElement("code",null,"Layout")," component:",l.a.createElement("pre",null,'\n    import Link from \'next/link\'\n    const Layout = ({ children }) => (\n      <main>\n        <nav>\n          <ul>\n            <li>\n              <Link href="/">\n                <a>Home</a>\n              </Link>\n            </li>\n            <li>\n              <Link href="/about">\n                <a>About</a>\n              </Link>\n            </li>\n            <li>\n              <Link href="/contact">\n                <a>Contact</a>\n              </Link>\n            </li>\n          </ul>\n        </nav>\n        { children }\n      </main>\n    )\n  \n    export default Layout\n  ')),l.a.createElement(h,null,"Let's dive a little into what happens here. First, we need a way to navigate across the site. Of course, we could do this purely with ",l.a.createElement("code",null,"anchor")," tags, but since we are in a framework, we'll take advantage of the ",l.a.createElement("code",null,"Link")," component that NextJS provides. This component allows the navigation as if it were an single page app. So, loading will look seamless. Currently, NextJS encourages you to still enclose the text content inside an ",l.a.createElement("code",null,"anchor")," tag due to deprecation using text-only, but that makes no harm to the navigation."),l.a.createElement(h,null,"Something to point out here is that we're using a very particular syntax here, called ",l.a.createElement("code",null,"destructuring assignment"),". We're not diving here too deep into that, but this is a feature of the ES6 standard, which lets you unwrap the property values you send/inject to a component in an attribute-like manner in your code. Since React wraps everything into the ",l.a.createElement("code",null,"props")," argument, using destructuring the ",l.a.createElement("code",null,"props")," object will give you access to all of the properties you provided. If you try to unwrap a property that's not injected, you will get the ",l.a.createElement("code",null,"undefined")," value. This is JavaScript behavior itself, not a React one."),l.a.createElement(h,null,"One last thing here that allows us to have the ",l.a.createElement("code",null,"nav"),"element in all pages is the property ",l.a.createElement("code",null,"children"),". This property represents the elements that are wrapped inside a component when used:",l.a.createElement("pre",null,"\n  // Layout component in layout.js\n  import Layout from './../layout'\n\n  const Home = () => (\n    <Layout> // Wraps 'div'.\n      <div>Home page</div> // <-- Children set\n    </Layout>\n  )\n\n  export default Home\n\n  // Home page component in /pages/index.js\n  import Link from 'next/link'\n  const Layout = ({ children }) => ( // <--- Unwraps children via destructuring\n    <main>\n      <nav>\n        <ul>\n          <li>\n            <Link href=\"/\">\n              <a>Home</a>\n            </Link>\n          </li>\n          <li>\n            <Link href=\"/about\">\n              <a>About</a>\n            </Link>\n          </li>\n          <li>\n            <Link href=\"/contact\">\n              <a>Contact</a>\n            </Link>\n          </li>\n        </ul>\n      </nav>\n      { children } // <--- Children rendered\n    </main>\n  )\n\n  export default Layout\n")),l.a.createElement(h,null,"Now, for our first page, there's ",l.a.createElement("code",null,"index.js"),", which will respond automatically to the ",l.a.createElement("code",null,"/")," route. We would write something like:",l.a.createElement("pre",null,"\n    import Layout from './../layout'\n\n    const Home = () => (\n      <Layout>\n        <h1>Distraction is over. Meet: The super lettuce.</h1>\n        <p>\n          A bio-engineered super lettuce capable of super concentration powers.\n        </p>\n      </Layout>\n    )\n  \n    export default Home\n  "),"This would tell NextJS that this is our first page module."),l.a.createElement(h,null,"Then, we'll write our ",l.a.createElement("code",null,"/about")," page code, describing the product:",l.a.createElement("pre",null,"\n    import Layout from './../layout'\n\n    const About = () => (\n      <Layout>\n        <h4>\n          About the super lettuce.\n        </h4>\n        <div>\n          The super lettuce will grant you inimaginable concentration powers.\n          You will be able to program for hours and not losing a single drop of\n          focus in your entire rush. It is proposed to combat one of many problems\n          in the world: Concentration Loss.\n        </div>\n      </Layout>\n    )\n\n    export default About\n  ")),l.a.createElement(h,null,"And finally, the last page, where we'll let our users to check where they can reach the company out, the ",l.a.createElement("code",null,"/contact")," page:",l.a.createElement("pre",null,"\n    import Layout from './../layout'\n\n    const Contact = () => (\n      <Layout>\n        <div>Contact us!</div>\n        <a href=\"mailto:sample@superlettuce.com\">\n          Reach us at our company email!\n        </a>\n      </Layout>\n    )\n\n    export default Contact\n  ")),l.a.createElement(h,null,"After this, we can run the command we set at the",l.a.createElement("code",null,"scripts")," field in ",l.a.createElement("code",null,"package.json"),", which is ",l.a.createElement("code",null,"npm dev")," or ",l.a.createElement("code",null,"yarn dev"),", depending on your package manager. Running that command will lead you to having the following structure:",l.a.createElement("pre",null,"\n    .next // This is new!\n    node_modules\n    yarn.lock\n    package.json\n    layout.js\n    /pages\n      index.js\n      about.js\n      contact.js\n")),l.a.createElement(h,null,"When that folder appears, it means that Next built your app, which means that you also got some messages like the following:",l.a.createElement("pre",null,"\n    [ wait ]  compiling ...\n    [ ready ] compiled successfully\n    [ info ]  ready on http://localhost:3000\n    ")),l.a.createElement(h,null,"This means that your app is ready to be used, and you can access it via entering ",l.a.createElement("code",null,"http://localhost:300")," in the address bar, which will lead to something like this:"),l.a.createElement(w,null,l.a.createElement("img",{src:"https://media.giphy.com/media/LOzodNjCkZ2ufrk7Vo/giphy.gif"})),l.a.createElement(h,null,"What happened is that Next took care of using Webpack under the hood for the required dependencies to create and develop our app, so we can completely focus on the features rather than the setup. This is a way we can at least get some momentum on diving deep in case we want to learn further or analyze our options at the time of choosing how we want to React in different use cases. This one of those, and it lets us step forward relatively fast."),l.a.createElement(h,null,"And that's it! You created a web app that has a tiny setup letting you develop your features in a comfortable way!"))}},148:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(4),l=t.n(r),i=t(33),c=t.n(i);t.d(n,"a",function(){return c.a});t(149),o.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},149:function(e,n,t){var a;e.exports=(a=t(150))&&a.default||a},150:function(e,n,t){"use strict";t.r(n);t(34);var a=t(0),o=t.n(a),r=t(4),l=t.n(r),i=t(55),c=t(2),u=function(e){var n=e.location,t=c.default.getResourcesForPathnameSync(n.pathname);return t?o.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},n.default=u},151:function(e,n,t){"use strict";var a=t(146),o=t.n(a),r=t(0),l=t.n(r),i=t(147);function c(){var e=o()([""]);return c=function(){return e},e}var u=Object(i.a)(c());function s(){var e=o()([""]);return s=function(){return e},e}var d=Object(i.a)(s());function m(){var e=o()([""]);return m=function(){return e},e}var p=Object(i.a)(m());function h(){var e=o()([""]);return h=function(){return e},e}var g=Object(i.a)(h());function f(){var e=o()([""]);return f=function(){return e},e}var v=Object(i.a)(f()),y=function(e){var n=e.media,t=e.children,a=function(e){switch(e){case"sm":return u;case"md":return p;case"lg":return g;case"xl":return v;case"xs":default:return d}}(n);return l.a.createElement(a,null,t)},w=t(148);function b(){var e=o()(["\n  background: linear-gradient(to bottom right,darkblue, purple);\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  grid-area: navbar;\n  .brand-navigation {\n    color: whitesmoke;\n    text-decoration: none;\n    padding: 0 0.5em;\n    font-size: 32px;\n  }\n"]);return b=function(){return e},e}var E=i.b.nav(b()),x=function(){return l.a.createElement(E,null,l.a.createElement(w.a,{className:"brand-navigation",to:"/"},l.a.createElement("span",{className:"brand"},"FTN")))};function k(){var e=o()(["\n  background-color: purple;\n  height: calc(100vh - 60px);\n  transition: width 0.1s linear;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  grid-area: sidebar;\n  &.open {\n    width: 120px;\n  }\n\n  &.closed {\n    width: 60px;\n  }\n\n  .toggle {\n    height: 60px;\n    box-sizing: border-box;\n    background-color: transparent;\n    background-position: center;\n    background-size: 40px 40px;\n    background-repeat: no-repeat;\n    outline: none;\n    border: none;\n    transition: width 0.1s linear;\n    filter: invert(1);\n  }\n\n  .toggle:hover {\n    background-color: cyan;\n    filter: none;\n  }\n\n  .open {\n    width: 120px;\n    background-image: url('./img/arrow-left.svg');\n  }\n\n  .closed {\n    width: 60px;\n    background-image: url('./img/arrow-right.svg');\n  }\n\n\n  .navigation-link {\n    text-decoration: none;\n    box-sizing: border-box;\n    padding: 0.5em 1em;\n    color: whitesmoke;\n    font-size: 20px;\n  }\n\n  .nav-content {\n    display: flex;\n    align-items: center;\n  }\n\n  .nav-description {\n    margin: 0 5px;\n  }\n\n  .navigation-link:hover {\n    background-color: cyan;\n    color: black;\n  }\n\n  .navigation-link:hover > .nav-content > .nav-icon {\n    filter: none;\n  }\n\n\n\n  .nav-open {\n    width: 120px;\n  }\n\n  .nav-closed > .nav-content > .nav-description {\n    display: none;\n  }\n\n  .nav-closed {\n    width: 60px;\n  }\n\n  .nav-icon {\n    filter: invert(1);\n  }\n"]);return k=function(){return e},e}var L=i.b.aside(k()),j=function(){var e=Object(r.useState)(!0),n=e[0],t=e[1];return l.a.createElement(L,{className:n?"open":"closed"},l.a.createElement("input",{className:n?"toggle open":"toggle closed",type:"button",onClick:function(){return t(!n)}}),l.a.createElement(w.a,{className:n?"navigation-link nav-open":"navigation-link nav-closed",to:"/posts"},l.a.createElement("span",{className:"nav-content"},l.a.createElement("img",{className:"nav-icon",src:"img/forum.svg"}),l.a.createElement("span",{className:"nav-description"},"Posts"))),l.a.createElement(w.a,{className:n?"navigation-link nav-open":"navigation-link nav-closed",to:"/about"},l.a.createElement("span",{className:"nav-content"},l.a.createElement("img",{className:"nav-icon",src:"img/help.svg"}),l.a.createElement("span",{className:"nav-description"},"About"))))};function N(){var e=o()(['\n  color: whitesmoke;\n  display: grid;\n  grid-template-areas:\n    "navbar navbar"\n    "sidebar main-content";\n  grid-template-columns: minmax(min-content,max-content) 1fr;\n  grid-template-rows: repeat(minmax(min-content,max-content),2) ;\n\n  .content {\n    grid-area: main-content;\n    height: calc(100vh - 60px);\n    overflow-y: auto;\n  }\n']);return N=function(){return e},e}function T(){var e=o()(["\n  @font-face {\n      src: url('./fonts/Neutra-Text-Bold.otf') format('opentype');\n      font-family: bFont;\n  }\n  html, body {\n    margin: 0;\n    padding: 0;\n    background-color: #282c44;\n    font-family: bFont;\n  }\n  \n"]);return T=function(){return e},e}var S=Object(i.a)(T()),A=i.b.main(N());n.a=function(e){var n,t=e.children,a=((n=Object(r.useState)("xs"))[0],void n[1]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(S,null),l.a.createElement(y,{media:a}),l.a.createElement(A,null,l.a.createElement(x,null),l.a.createElement(j,null),l.a.createElement("div",{className:"content"},t)))}},152:function(e,n,t){"use strict";var a=t(146),o=t.n(a),r=t(0),l=t.n(r),i=t(147);function c(){var e=o()(["\n  .navigation-link {\n    box-sizing: border-box;\n    padding: 0.5em 1em;\n    color: whitesmoke;\n    font-size: 20px;\n  }\n"]);return c=function(){return e},e}function u(){var e=o()(["\n"]);return u=function(){return e},e}var s=i.b.ul(u()),d=i.b.ol(c());n.a=function(e){var n=e.elements;return e.ordered?l.a.createElement(d,null,n.map(function(e){return l.a.createElement("li",null,e)})):l.a.createElement(s,null,n.map(function(e){return l.a.createElement("li",null,e)}))}}}]);
//# sourceMappingURL=component---src-pages-basics-js-39b098d2d9650982264f.js.map