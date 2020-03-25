import React from "react"
import { Link } from "gatsby"

const Hero = ({ siteTitle }) => (
  <section className="px-64 py-10 bg-gray-200 w-full">
    <div className="w-1/2">
      <h1 className="font-semibold text-4xl">
        Hi, I'm Soumya
        <span role="img" aria-label="hi">
          👋
        </span>
      </h1>
      <p className="text-xl mt-5">
        I am a fullstack software developer <Link to="/blog">writing</Link> tech
        articles and creating{" "}
        <a
          href="https://github.com/geekysrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>{" "}
        projects.
      </p>
    </div>
  </section>
)

export default Hero
