const cacheName = "v1";

const cacheAssets = ["index.html"];

/**
 *
 * install event
 */
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

/**
 *
 * activate event
 */
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames.map((c) => {
          if (c !== cacheName) {
            return caches.delete(c);
          }
        })
      );
    })
  );
});

/**
 *
 * fetch event
 */

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response
        ? response
        : fetch(e.request).then((response) => {
            return response;
          });
    })
  );
  // e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
