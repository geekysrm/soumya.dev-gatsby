import React from "react"

const Hero = ({ siteTitle }) => (
  <section className="px-4 py-6 bg-gray-200 w-full">
    <h1 className="text-xl">
      Hi{" "}
      <span role="img" aria-label="hi">
        👋
      </span>{" "}
      <br />
      I'm Soumya.
    </h1>
    <p className="text-red-500">
      Welcome to my little corner of the web.
      <br />
      Website is still WIP
      <span role="img" aria-label="wip">
        🛠
      </span>
      .
    </p>
  </section>
)

export default Hero
