import { Link } from "gatsby"
import React from "react"

const Navbar = ({ siteTitle }) => (
  <header
    className=""
    style={{
      // background: `#142850`,
      // background: `#192965`,
      // choose from https://colorhunt.co/palettes/blue
      background: `#4a47a3`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="text-xl">
        <Link to="/" className="text-white">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Navbar
