import React from "react"
import { Link } from "gatsby"
import PostTitle from "./PostTitle"

const LatestPosts = () => (
  <section className="px-64 py-10 bg-blue-200 w-full">
    <div className="flex justify-between items-baseline">
      <h1 className="text-xl font-semibold">Latest Posts</h1>
      <Link to="/blog">View all</Link>
    </div>

    {[1, 2, 3, 4, 5].map(post => (
      <PostTitle
        title="How to use React"
        icon="https://image.flaticon.com/icons/svg/37/37150.svg"
        link="/react"
        readTime={"2 min"}
      />
    ))}
  </section>
)

export default LatestPosts
