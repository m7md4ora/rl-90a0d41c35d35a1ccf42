// retired: this address moved to https://m7md4ora.github.io/alrowad-lab/
const N = 'https://m7md4ora.github.io/alrowad-lab/'
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil((async () => {
  try { for (const k of await caches.keys()) await caches.delete(k) } catch (_) {}
  const cs = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
  try { await self.registration.unregister() } catch (_) {}
  for (const c of cs) { try { const u = new URL(c.url); c.navigate(N + u.search + u.hash) } catch (_) {} }
})()))
self.addEventListener('fetch', () => {})
