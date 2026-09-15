const CACHE_NAME = 'mbsts-v59';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/questions.json',
  '/questions-2025.json',
  '/questions-ek.json',
  '/questions-2024.json',
  '/questions-2023.json',
  '/questions-2022.json',
  '/questions-2021.json',
  '/questions-2020.json',
  '/questions-2019.json',
  '/questions-2018.json',
  '/questions-2017.json',
  '/questions-2015.json',
  '/questions-2014.json',
  '/questions-2013.json',
  '/questions-2012.json',
  '/questions-2011.json',
  '/questions-2010.json',
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
  // Navigasyon istekleri (sayfa yenileme, URL girme) - her zaman cache'den ana sayfayı ver
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match('/index.html').then((cached) => {
        return cached || fetch(event.request);
      })
    );
    return;
  }

  // Diğer istekler - cache-first
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
