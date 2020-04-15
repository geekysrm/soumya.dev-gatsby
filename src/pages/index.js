import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import LatestPosts from "../components/LatestPosts"
import Projects from "../components/Projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <LatestPosts />
    {/*<Projects /> */}
  </Layout>
)

export default IndexPage
