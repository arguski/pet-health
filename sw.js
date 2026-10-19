// 最小的 service worker：只讓瀏覽器把網站視為可安裝的 App，不做任何快取，避免畫面停在舊版本。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
