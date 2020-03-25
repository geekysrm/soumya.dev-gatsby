import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import LatestPosts from "../components/LatestPosts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <LatestPosts />
  </Layout>
)

export default IndexPage
