import React from 'react'

import Post from './Post/Post'
import { IPost } from '../types/Post'

import './postList.css'

interface PostListProps {
  posts: Array<IPost>
  fetchNewValues: () => void
}

const PostList = ({ posts, fetchNewValues }: PostListProps) => {
  const handleScroll = (currentTarget: any) => {
    currentTarget.scrollTop + currentTarget.clientHeight >=
      currentTarget.scrollHeight && fetchNewValues()
  }

  return (
    <div
      className="post__container"
      onScroll={(e) => handleScroll(e.currentTarget)}
    >
      {posts.map((post: any, index: number) => (
        <Post
          key={`${post.id}__${index}`}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  )
}

export default PostList
