# Canojun Tech Blog

This repository hosts the source for my GitHub Pages tech blog built with modern web technologies.

## Features
- Dynamic post loading from a JSON file
- Markdown rendering via [marked](https://github.com/markedjs/marked)
- Light/Dark theme toggle with preference persistence
- Service worker for basic offline support

## Adding a New Post
1. Add a markdown file in `posts/`.
2. Append an entry in `posts/posts.json` with its title, ISO date, and filename.

## Development

### Backend
```bash
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```
The React app works with the FastAPI server to manage posts and display portfolio files.
