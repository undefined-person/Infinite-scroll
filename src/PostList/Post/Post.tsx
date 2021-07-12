import React from 'react'

import './post.css'

interface PostProps {
  title: string
  body: string
}

const Post = ({ title, body }: PostProps) => {
  return (
    <div className="post">
      <p className="post__title">{title}</p>
      <p className="post__body">{body}</p>
    </div>
  )
}

export default Post
