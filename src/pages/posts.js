import React from 'react'
import { Link } from 'gatsby'
import Layout from 'components/layout'
import List from 'components/list'


const Posts = () => {
  const posts = [
    <Link className="navigation-link" to="/basics">How to React, really fast - Part 1: Pages</Link>
  ]


  return (
    <Layout>
      <List ordered elements={posts}/>
    </Layout>
  )
}

export default Posts