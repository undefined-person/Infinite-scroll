import React, { useState } from 'react'
import { gql, useQuery } from '@apollo/client'

import PostList from './PostList/PostList'
import { IPost } from './types/Post'

const App = () => {
  const GET_POSTS = gql`
    query ($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
          body
        }
      }
    }
  `

  const [page, setPage] = useState<number>(1)
  const [posts, setPosts] = useState<Array<IPost>>([])

  const { refetch } = useQuery(GET_POSTS, {
    variables: {
      options: {
        paginate: {
          page,
          limit: 10,
        },
      },
    },
    onCompleted: (data: any) => setPosts([...posts, ...data?.posts.data]),
  })
  const fetchNewValues = () => {
    refetch()
    setPage(page + 1)
  }

  return <PostList posts={posts} fetchNewValues={fetchNewValues} />
}

export default App
