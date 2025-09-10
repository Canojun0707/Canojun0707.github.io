import { useEffect, useState } from 'react'
import PostForm from './PostForm'
import PostList from './PostList'
import Portfolio from './Portfolio'

const API_BASE = 'http://localhost:8000'

export default function App() {
  const [posts, setPosts] = useState([])

  const refresh = () => {
    fetch(`${API_BASE}/posts`)
      .then(res => res.json())
      .then(setPosts)
  }

  useEffect(() => {
    refresh()
  }, [])

  const createPost = data =>
    fetch(`${API_BASE}/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }).then(refresh)

  const deletePost = id =>
    fetch(`${API_BASE}/posts/${id}`, { method: 'DELETE' })
      .then(refresh)

  return (
    <div className="container">
      <h1>Portfolio & Board</h1>
      <Portfolio apiBase={API_BASE} />
      <PostForm onSubmit={createPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  )
}
