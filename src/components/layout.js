/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Navbar"
import "normalize.css"
import "../styles/tailwind.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12">
      <Navbar />
      <main className="col-start-1 col-end-13 md:col-start-3 md:col-end-11">
        {children}
      </main>
      {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by @geekysrm
        </footer> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
