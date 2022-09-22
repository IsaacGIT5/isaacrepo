const cacheName = 'mrepol742v2';

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(cacheName));
});

self.addEventListener('fetch', async (event) => {
  if ((event.request.destination === 'image' || event.request.url.includes("/assets/")) && event.request.url.includes(atob("aHR0cHM6Ly9tcmVwb2w3NDIuZ2l0aHViLmlv"))) {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());
          return fetchedResponse;
        });
      });
    }));
  } else {
    return;
  }
});