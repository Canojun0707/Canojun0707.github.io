export default function PostList({ posts, onDelete }) {
  return (
    <ul className="post-list">
      {posts.map(p => (
        <li key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.content}</p>
          <button onClick={() => onDelete(p.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}
