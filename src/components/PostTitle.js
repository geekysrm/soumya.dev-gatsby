import React from "react"
import { Link } from "gatsby"
import { AiOutlineClockCircle } from "react-icons/ai"

const PostTitle = ({ title, icon, link, readTime }) => (
  <div className="flex mt-5 justify-between py-1">
    <div className="flex items-center">
      <div>
        <img alt="icon" src={icon} />
      </div>
      <div className="ml-5">
        <Link to={link}>{title}</Link>
      </div>
    </div>
    <div class="flex items-center">
      <AiOutlineClockCircle /> {readTime} read
    </div>
  </div>
)

export default PostTitle
