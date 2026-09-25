import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({blogs}) => {
  const sortBlogs = [...blogs].sort((blog,b)=> b.readTime - blog.readTime)
  return (
    <div >
      <div>
        {sortBlogs.map(blog=> <BlogCard blog={blog}/>)}
      </div>
    </div>
  )
}

export default Blogs
