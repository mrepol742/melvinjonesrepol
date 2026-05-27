/* eslint-disable no-restricted-globals */

const IMAGE_CACHE = "image-cache-v2.1";
const FONT_CACHE = "font-cache-v2.1";
const STATIC_CACHE = "static-cache-v2.1";

const MAX_ENTRIES = 80;
const NETWORK_TIMEOUT_MS = 2500;

const CORE_ASSETS = [
  "/",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/apple-touch-icon.png",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(CORE_ASSETS)),
  );
  self.skipWaiting();
});

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
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
    return;
  }

  if (
    request.destination === "font" ||
    /\.(woff2?|ttf|otf)$/i.test(request.url)
  ) {
    event.respondWith(staleWhileRevalidate(request, FONT_CACHE));
    return;
  }

  if (request.url.includes("/_next/static/")) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }
});

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetchWithTimeout(request, NETWORK_TIMEOUT_MS)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
        trimCache(cacheName, MAX_ENTRIES);
      }
      return response;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}

async function fetchWithTimeout(request, timeoutMs) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(
      () => reject(new Error("Network timeout")),
      timeoutMs,
    );

    fetch(request)
      .then((response) => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;

  await cache.delete(keys[0]);
  return trimCache(cacheName, maxEntries);
}
