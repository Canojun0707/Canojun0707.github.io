async function loadPost() {
  const params = new URLSearchParams(location.search);
  const file = params.get('post');
  if (!file) return;
  const res = await fetch(`posts/${file}`);
  const text = await res.text();
  document.getElementById('content').innerHTML = marked.parse(text);
}

document.addEventListener('DOMContentLoaded', loadPost);
