import React from "react"
import { Link } from "gatsby"

const Hero = () => (
  <section className="w-full">
    <div className="">
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
    {/* Add newsletter subscription here? */}
  </section>
)

export default Hero
