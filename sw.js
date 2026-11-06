const CACHE='diadoevento-v1.43.3';
const ASSETS=['./','./index.html','./css/app.css','./js/app.js','./manifest.json','./assets/icons/logo.png','./assets/icons/icon192.png','./assets/icons/apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>Promise.all(ASSETS.map(u=>fetch(u,{cache:'no-store'}).then(r=>r.ok&&c.put(u,r))))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request)))})
