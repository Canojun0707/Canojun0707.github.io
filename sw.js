const CACHE_NAME = 'canojun-blog-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/resume.html',
  '/post.html',
  '/css/blog.css',
  '/js/theme.js',
  '/js/blog.js',
  '/js/post.js',
  '/posts/posts.json',
  '/posts/welcome.md'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
