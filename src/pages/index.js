import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Hi{" "}
      <span role="img" aria-label="hi">
        👋
      </span>
    </h1>
    <p>
      Welcome to my corner of the web.
      <br />
      Website is still in progress
      <span role="img" aria-label="wip">
        🛠
      </span>
      .
    </p>
  </Layout>
)

export default IndexPage
