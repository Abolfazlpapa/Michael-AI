const CACHE_NAME = "michael-ai-v1";

const filesToCache = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "icon.svg"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});