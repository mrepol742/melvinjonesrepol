/* eslint-disable no-restricted-globals */

const IMAGE_CACHE = "image-cache-v1";
const FONT_CACHE = "font-cache-v1";
const STATIC_CACHE = "static-cache-v1";

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (![IMAGE_CACHE, FONT_CACHE, STATIC_CACHE].includes(key)) {
            return caches.delete(key);
          }
        }),
      ),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (
    request.destination === "image" ||
    /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(request.url)
  ) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  if (
    request.destination === "font" ||
    /\.(woff2?|ttf|otf)$/i.test(request.url)
  ) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  if (request.url.includes("/_next/static/")) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }
});

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  return response;
}
