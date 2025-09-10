import { useEffect, useState } from 'react'

export default function Portfolio({ apiBase }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${apiBase}/portfolio`)
      .then(res => res.json())
      .then(setItems)
  }, [apiBase])

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {items.map(item => (
          <li key={item}>
            <a href={`/${item}`} target="_blank" rel="noopener noreferrer">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
