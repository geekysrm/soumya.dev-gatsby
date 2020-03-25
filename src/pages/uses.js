import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Uses = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Hi from the uses page</h1>
    <p>Here you will find some of the tools and tech that I am using right now.</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Uses
