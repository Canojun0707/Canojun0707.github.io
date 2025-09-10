async function loadPosts() {
  try {
    const res = await fetch('posts/posts.json');
    const posts = await res.json();
    const container = document.getElementById('posts');
    posts.forEach(post => {
      const article = document.createElement('article');
      article.innerHTML = `<h2><a href="post.html?post=${encodeURIComponent(post.file)}">${post.title}</a></h2>` +
        `<time datetime="${post.date}">${new Date(post.date).toLocaleDateString()}</time>`;
      container.appendChild(article);
    });
  } catch (err) {
    console.error('Failed to load posts', err);
  }
}

loadPosts();
