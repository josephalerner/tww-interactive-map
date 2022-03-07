importScripts("/tww-interactive-map/latest/precache-manifest.776191f4e004a7cab203ae0ab2b9626e.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* global workbox */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('updated', () => {
  self.skipWaiting();
});

self.addEventListener('message', (event) => {
  if (event.data.action == 'skipWaiting') self.skipWaiting();
});

