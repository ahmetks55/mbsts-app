const CACHE_NAME = 'mbsts-v11';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/questions.json',
  '/questions-ek.json',
  '/questions-2024.json',
  '/questions-2023.json',
  '/questions-2022.json',
  '/questions-2021.json',
  '/questions-2020.json',
  '/questions-2019.json',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        // app.js is never served from cache – always fresh from network
        if (event.request.url.includes('app.js')) return fetch(event.request);
        return cached;
      }
      return fetch(event.request).then((response) => {
        if (response.status === 200 && response.type === 'basic' && !event.request.url.includes('app.js')) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      if (event.request.destination === 'document') {
        return caches.match('/index.html');
      }
    })
  );
});
