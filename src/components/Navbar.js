import { Link } from "gatsby"
import React from "react"

const Navbar = () => (
  <header
    style={{
      // background: `#142850`,
      // background: `#192965`,
      // choose from https://colorhunt.co/palettes/blue
      background: `#4a47a3`,
    }}
    className="col-start-1 col-end-13"
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 className="text-xl">
        <Link to="/" className="no-underline text-white">
          SRM
        </Link>
      </h1>
    </div>
  </header>
)

export default Navbar
