from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from pathlib import Path
import json

app = FastAPI()

DATA_FILE = Path(__file__).parent / "posts.json"
if not DATA_FILE.exists():
    DATA_FILE.write_text("[]")

class Post(BaseModel):
    id: int | None = None
    title: str
    content: str

def read_posts():
    return json.loads(DATA_FILE.read_text())

def write_posts(posts):
    DATA_FILE.write_text(json.dumps(posts))

@app.get("/posts")
def get_posts():
    return read_posts()

@app.post("/posts", status_code=201)
def create_post(post: Post):
    posts = read_posts()
    new_id = max([p["id"] for p in posts], default=0) + 1
    new_post = {"id": new_id, "title": post.title, "content": post.content}
    posts.append(new_post)
    write_posts(posts)
    return new_post

@app.delete("/posts/{post_id}", status_code=204)
def delete_post(post_id: int):
    posts = read_posts()
    new_posts = [p for p in posts if p["id"] != post_id]
    if len(posts) == len(new_posts):
        raise HTTPException(status_code=404, detail="Post not found")
    write_posts(new_posts)
    return

@app.get("/portfolio")
def get_portfolio():
    root = Path(__file__).resolve().parent.parent
    files = []
    for ext in ["png", "jpg", "jpeg", "pptx", "zip"]:
        files.extend([str(p.relative_to(root)) for p in root.glob(f"*.{ext}")])
        files.extend([str(p.relative_to(root)) for p in root.glob(f"*/**/*.{ext}")])
    return files
