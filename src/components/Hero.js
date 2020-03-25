import React from "react"

const Hero = ({ siteTitle }) => (
  <section className="px-64 py-6 bg-gray-200 w-full">
    <h1 className="font-semibold text-4xl">
      <span role="img" aria-label="hi">
        👋
      </span>
      <br />
      Hi, {/* <br /> */}
      I'm Soumya.
    </h1>
    <p className="">
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
