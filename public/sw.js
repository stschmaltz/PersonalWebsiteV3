if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>a(e,c),o={module:{uri:c},exports:r,require:d};s[c]=Promise.all(i.map((e=>o[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-VwvT-yftFloj3YTCDxgoE.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/VwvT-yftFloj3YTCDxgoE/_buildManifest.js",revision:"50b1717586ebcd377424c5b5e12275ae"},{url:"/_next/static/VwvT-yftFloj3YTCDxgoE/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/203.a92547a29ded5f08.js",revision:"a92547a29ded5f08"},{url:"/_next/static/chunks/234-8c9cd29d4c40ff40.js",revision:"8c9cd29d4c40ff40"},{url:"/_next/static/chunks/235-503ef92b7f99d468.js",revision:"503ef92b7f99d468"},{url:"/_next/static/chunks/274-b2d4e2a6ae1414fb.js",revision:"b2d4e2a6ae1414fb"},{url:"/_next/static/chunks/441-981ae63748547324.js",revision:"981ae63748547324"},{url:"/_next/static/chunks/484-9df10932dc728f5e.js",revision:"9df10932dc728f5e"},{url:"/_next/static/chunks/488-0107a42ee597e551.js",revision:"0107a42ee597e551"},{url:"/_next/static/chunks/620-f3194a0f46600291.js",revision:"f3194a0f46600291"},{url:"/_next/static/chunks/639-d6240aa0f945d7ee.js",revision:"d6240aa0f945d7ee"},{url:"/_next/static/chunks/698-848d9d39f8718292.js",revision:"848d9d39f8718292"},{url:"/_next/static/chunks/74-29a3070e0153a222.js",revision:"29a3070e0153a222"},{url:"/_next/static/chunks/769-664efd5f1f36580c.js",revision:"664efd5f1f36580c"},{url:"/_next/static/chunks/894.8b3e79a97f1244f1.js",revision:"8b3e79a97f1244f1"},{url:"/_next/static/chunks/987-3622fccc4749da99.js",revision:"3622fccc4749da99"},{url:"/_next/static/chunks/a1a65adf-6bc4a7cc4a6a46ab.js",revision:"6bc4a7cc4a6a46ab"},{url:"/_next/static/chunks/bee240a3-01bd3f0e82b24a6c.js",revision:"01bd3f0e82b24a6c"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-bb4bcb7663fd29e5.js",revision:"bb4bcb7663fd29e5"},{url:"/_next/static/chunks/pages/_app-bca978d69f1854c1.js",revision:"bca978d69f1854c1"},{url:"/_next/static/chunks/pages/_error-4b61be14865575c5.js",revision:"4b61be14865575c5"},{url:"/_next/static/chunks/pages/_offline-30ae1aa72155b467.js",revision:"30ae1aa72155b467"},{url:"/_next/static/chunks/pages/edit-routine/%5Bid%5D-cd7cddc0a3ac9833.js",revision:"cd7cddc0a3ac9833"},{url:"/_next/static/chunks/pages/exercises/%5Bid%5D-feb77ad1c70b36e2.js",revision:"feb77ad1c70b36e2"},{url:"/_next/static/chunks/pages/index-0335848ec36e4ca4.js",revision:"0335848ec36e4ca4"},{url:"/_next/static/chunks/pages/new-routine-a37420a96e3b5271.js",revision:"a37420a96e3b5271"},{url:"/_next/static/chunks/pages/workout/%5Bid%5D-77c40e563af55b0e.js",revision:"77c40e563af55b0e"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-720a5155d68c326c.js",revision:"720a5155d68c326c"},{url:"/_next/static/css/77a9b13db2c54504.css",revision:"77a9b13db2c54504"},{url:"/_next/static/css/91cb1dd7d80ad9c8.css",revision:"91cb1dd7d80ad9c8"},{url:"/_next/static/css/a9b4be708fdc742a.css",revision:"a9b4be708fdc742a"},{url:"/_offline",revision:"VwvT-yftFloj3YTCDxgoE"},{url:"/favicon.ico",revision:"d04ee55540c98bba3dd1a3c42c3453b0"},{url:"/icons/android-icon-144x144.png",revision:"8e9a65aac6e9f986094af8b8f2a6f662"},{url:"/icons/android-icon-192x192.png",revision:"f2b13e983075362745d4e68a369780bd"},{url:"/icons/android-icon-36x36.png",revision:"1912c5cde4104337c994e10f84a6ba1c"},{url:"/icons/android-icon-48x48.png",revision:"c5f7277a18a9bd9fc7ff40fe1b7629d5"},{url:"/icons/android-icon-72x72.png",revision:"69b2f53e3803c7e13ae198189cd449e5"},{url:"/icons/android-icon-96x96.png",revision:"6d35ad4a987a26312d2439d3a6f464ee"},{url:"/icons/apple-icon-114x114.png",revision:"ffd66bc0de04cfc1bce077185e5f684a"},{url:"/icons/apple-icon-120x120.png",revision:"67fa08e746cd32b6dbe0f123f3d7736c"},{url:"/icons/apple-icon-144x144.png",revision:"8e9a65aac6e9f986094af8b8f2a6f662"},{url:"/icons/apple-icon-152x152.png",revision:"05af7ab7cb21d80b56aadb609e598c98"},{url:"/icons/apple-icon-180x180.png",revision:"d8390d94e9cc80108b082e71f5b4adbf"},{url:"/icons/apple-icon-57x57.png",revision:"93397914e7a1e815336587e99c02b449"},{url:"/icons/apple-icon-60x60.png",revision:"eefa03d3b40e5a7dbd1f527ed73223b6"},{url:"/icons/apple-icon-72x72.png",revision:"69b2f53e3803c7e13ae198189cd449e5"},{url:"/icons/apple-icon-76x76.png",revision:"62b3d3bd3fa975e073b64fda60db9d44"},{url:"/icons/apple-icon-precomposed.png",revision:"9de4f103b65281b4e3fe3afaaf56dfae"},{url:"/icons/apple-icon.png",revision:"9de4f103b65281b4e3fe3afaaf56dfae"},{url:"/icons/favicon-16x16.png",revision:"47f9857c73cc5ac205f4b65561a8404d"},{url:"/icons/favicon-32x32.png",revision:"2336b2f3b1cb9cfa03e0d2c01cfdb950"},{url:"/icons/favicon-96x96.png",revision:"6d35ad4a987a26312d2439d3a6f464ee"},{url:"/icons/favicon.ico",revision:"d04ee55540c98bba3dd1a3c42c3453b0"},{url:"/icons/ms-icon-144x144.png",revision:"8e9a65aac6e9f986094af8b8f2a6f662"},{url:"/icons/ms-icon-150x150.png",revision:"81093f48d858fe5e68a736b65adeae3c"},{url:"/icons/ms-icon-310x310.png",revision:"ed54f824ad9cf5ddd52d83b8c80f489a"},{url:"/icons/ms-icon-70x70.png",revision:"9631037f5a6b547f5cb4383ac74f3584"},{url:"/images/auth0.html",revision:"c37f64e06f5f025837a66e8268279e11"},{url:"/images/auth0_files/0c701ff7d190.js.download",revision:"cfbf77a09118e795280ea4cdc7ca56df"},{url:"/images/auth0_files/9122722",revision:"2088d719459d31098b4191e36c765a22"},{url:"/images/auth0_files/a0-hooks.css",revision:"6750c305fe346fd4ead6ae03a3e66973"},{url:"/images/auth0_files/a0-hooks.js.download",revision:"9436162918fe6931328430364f99dfa5"},{url:"/images/auth0_files/a0-hooks.vendors.js.download",revision:"c6ea4f4b55d4852df3026f008c463cff"},{url:"/images/auth0_files/all(1).css",revision:"116622ab57db7b4e12fa1213186e0c7c"},{url:"/images/auth0_files/all.css",revision:"3b9684a16ef99a568e9ffbd492be4c4d"},{url:"/images/auth0_files/auth0-metrics.min.js.download",revision:"1d4e969c9fd63cd2486df2bd876fd0e4"},{url:"/images/auth0_files/bundle.min.js.download",revision:"e40f166b5224c3d350f793ac67454650"},{url:"/images/auth0_files/extend-editor.js.download",revision:"9e9754280ce2a3608ff347e5c939b043"},{url:"/images/auth0_files/extension-gallery.standalone-3.3.min.js.download",revision:"8c6fc5b629a11d4609c75b2fec53de9e"},{url:"/images/auth0_files/gtm.js.download",revision:"0bc82185f03f4eefc1ce4c996f4c7d38"},{url:"/images/auth0_files/heap-1279799279.js.download",revision:"75157a81ba03ae0e5162683d28512eab"},{url:"/images/auth0_files/inner.html",revision:"ca58dd3151a17da0ff8827b8378372a9"},{url:"/images/auth0_files/logo-icon.png",revision:"d0ea329b81d76e0b1adb0fefd726e485"},{url:"/images/auth0_files/m-outer-8cb24ab2d649fd36a488d04d8c457933.js.download",revision:"f8f6a4584135f737b26927596ce6e0a7"},{url:"/images/auth0_files/m-outer-93afeeb17bc37e711759584dbfc50d47.html",revision:"34fae4fe29779cbf908cbc94b51033d3"},{url:"/images/auth0_files/main.js.download",revision:"80a540c2d2abb0078440a1a7480fa680"},{url:"/images/auth0_files/out-4.5.42.js.download",revision:"21df7244385e5c0bdf32da01d0dad6c0"},{url:"/images/auth0_files/pendo.js.download",revision:"cc96b4a180ebed6e96a226076a3095b2"},{url:"/images/auth0_files/saved_resource",revision:"e090991c8b07bf67e4048813006543e9"},{url:"/images/auth0_files/saved_resource(1).html",revision:"f03445f270d6a7df86f90f5ee6eda8ce"},{url:"/images/auth0_files/saved_resource.html",revision:"753899556190a6e413e42c1de67dbed5"},{url:"/images/auth0_files/tag.js.download",revision:"d22357820d7d5a694a7efe10569951a5"},{url:"/images/auth0_files/vendor.js.download",revision:"036355b5754f9609f50854f4695c8ad0"},{url:"/images/auth0_files/visual-cues-widget-0.12.2.min.js.download",revision:"9402ef40ae5a9672d08d5da64d3d23e1"},{url:"/images/profile.png",revision:"b17fa932304af7b0eb5262797fbd49e6"},{url:"/manifest.json",revision:"3366e15e972732425fe9c0ac031e6f91"},{url:"/qrcode_www.fitnessfam.app.png",revision:"c302f0f1c52ecc2c3e25da6da8ae2579"},{url:"/robots.txt",revision:"50a253da6bca5cefbb2f8e8bd67b0ac1"},{url:"/sitemap-0.xml",revision:"d96d5fb19b00231a61853d13939cc00f"},{url:"/sitemap.xml",revision:"17f8e20f57bcc0cd0f885f8f89a4a604"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
