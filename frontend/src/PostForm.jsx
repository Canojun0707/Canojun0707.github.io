import { useState } from 'react'

export default function PostForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ title, content })
    setTitle('')
    setContent('')
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Add</button>
    </form>
  )
}
