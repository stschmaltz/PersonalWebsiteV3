if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, n) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let r = {};
    const d = (e) => a(e, c),
      o = { module: { uri: c }, exports: r, require: d };
    s[c] = Promise.all(i.map((e) => o[e] || d(e))).then((e) => (n(...e), r));
  };
}
define(['./workbox-588899ac'], function (e) {
  'use strict';
  importScripts('fallback--u30udWK-dfpS4QNVGDAY.js'),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/-u30udWK-dfpS4QNVGDAY/_buildManifest.js',
          revision: '51170628daa089ac8b99576a0ec59e9f',
        },
        {
          url: '/_next/static/-u30udWK-dfpS4QNVGDAY/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/203.a92547a29ded5f08.js',
          revision: 'a92547a29ded5f08',
        },
        {
          url: '/_next/static/chunks/286-5fe7599421caf181.js',
          revision: '5fe7599421caf181',
        },
        {
          url: '/_next/static/chunks/317-4c9ee7bfba7c09ce.js',
          revision: '4c9ee7bfba7c09ce',
        },
        {
          url: '/_next/static/chunks/554-e1bf7efa5e2ca74b.js',
          revision: 'e1bf7efa5e2ca74b',
        },
        {
          url: '/_next/static/chunks/558-dce261819a6e9079.js',
          revision: 'dce261819a6e9079',
        },
        {
          url: '/_next/static/chunks/639-d6240aa0f945d7ee.js',
          revision: 'd6240aa0f945d7ee',
        },
        {
          url: '/_next/static/chunks/894.8b3e79a97f1244f1.js',
          revision: '8b3e79a97f1244f1',
        },
        {
          url: '/_next/static/chunks/912-1e03bfb9064ebc8c.js',
          revision: '1e03bfb9064ebc8c',
        },
        {
          url: '/_next/static/chunks/a1a65adf-6bc4a7cc4a6a46ab.js',
          revision: '6bc4a7cc4a6a46ab',
        },
        {
          url: '/_next/static/chunks/bee240a3-01bd3f0e82b24a6c.js',
          revision: '01bd3f0e82b24a6c',
        },
        {
          url: '/_next/static/chunks/framework-3b5a00d5d7e8d93b.js',
          revision: '3b5a00d5d7e8d93b',
        },
        {
          url: '/_next/static/chunks/main-bb4bcb7663fd29e5.js',
          revision: 'bb4bcb7663fd29e5',
        },
        {
          url: '/_next/static/chunks/pages/_app-ebfd851eeca1626a.js',
          revision: 'ebfd851eeca1626a',
        },
        {
          url: '/_next/static/chunks/pages/_error-4b61be14865575c5.js',
          revision: '4b61be14865575c5',
        },
        {
          url: '/_next/static/chunks/pages/_offline-30ae1aa72155b467.js',
          revision: '30ae1aa72155b467',
        },
        {
          url: '/_next/static/chunks/pages/exercises-a3d9798273ad66ae.js',
          revision: 'a3d9798273ad66ae',
        },
        {
          url: '/_next/static/chunks/pages/exercises/%5Bid%5D-57d8e07b04b4785e.js',
          revision: '57d8e07b04b4785e',
        },
        {
          url: '/_next/static/chunks/pages/explore-195df84b33a60501.js',
          revision: '195df84b33a60501',
        },
        {
          url: '/_next/static/chunks/pages/index-403ae40cf126a598.js',
          revision: '403ae40cf126a598',
        },
        {
          url: '/_next/static/chunks/pages/new-routine-f2f66f982f4ecbab.js',
          revision: 'f2f66f982f4ecbab',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-9668e9c470e51099.js',
          revision: '9668e9c470e51099',
        },
        {
          url: '/_next/static/css/6afb9bc5734e0f63.css',
          revision: '6afb9bc5734e0f63',
        },
        {
          url: '/_next/static/css/77a9b13db2c54504.css',
          revision: '77a9b13db2c54504',
        },
        {
          url: '/_next/static/css/f0261465f1768c79.css',
          revision: 'f0261465f1768c79',
        },
        { url: '/_offline', revision: '-u30udWK-dfpS4QNVGDAY' },
        { url: '/favicon.ico', revision: '2123f1d78e671653d5af8a37be9a92cd' },
        {
          url: '/icons/android-icon-144x144.png',
          revision: '17a8c3d08335f50f81a53f952d923705',
        },
        {
          url: '/icons/android-icon-192x192.png',
          revision: 'db2229b305bd620d889928cd15b27fa0',
        },
        {
          url: '/icons/android-icon-36x36.png',
          revision: '72a817fff549a5d3a60cc70e8dd1e666',
        },
        {
          url: '/icons/android-icon-48x48.png',
          revision: '11b532fd32fdf08e20edbaf4083e1db1',
        },
        {
          url: '/icons/android-icon-72x72.png',
          revision: 'b3c0a267a9a3d47027eb3967a501b87f',
        },
        {
          url: '/icons/android-icon-96x96.png',
          revision: '67947e0e574053cb158993497ba3367b',
        },
        {
          url: '/icons/apple-icon-114x114.png',
          revision: 'b4672168c8f1e0f5ed5567f3e1a14e02',
        },
        {
          url: '/icons/apple-icon-120x120.png',
          revision: 'cd8db891f25e8ff5bafff5788a8d572d',
        },
        {
          url: '/icons/apple-icon-144x144.png',
          revision: '17a8c3d08335f50f81a53f952d923705',
        },
        {
          url: '/icons/apple-icon-152x152.png',
          revision: '94bd045024732e9ecd26703e71b44ed6',
        },
        {
          url: '/icons/apple-icon-180x180.png',
          revision: 'c5b6619d20a38df79fbb368aa4b904f0',
        },
        {
          url: '/icons/apple-icon-57x57.png',
          revision: '37984abe7b75bc6c3659b8604bd71057',
        },
        {
          url: '/icons/apple-icon-60x60.png',
          revision: '5f6282f2e5b03bf943a84b18bd707f29',
        },
        {
          url: '/icons/apple-icon-72x72.png',
          revision: 'b3c0a267a9a3d47027eb3967a501b87f',
        },
        {
          url: '/icons/apple-icon-76x76.png',
          revision: '3cdead043cc948d79ea3847db25b78e2',
        },
        {
          url: '/icons/apple-icon-precomposed.png',
          revision: '4ae4dc1de4c8907b54bd65b61d22e381',
        },
        {
          url: '/icons/apple-icon.png',
          revision: '4ae4dc1de4c8907b54bd65b61d22e381',
        },
        {
          url: '/icons/browserconfig.xml',
          revision: '653d077300a12f09a69caeea7a8947f8',
        },
        {
          url: '/icons/favicon-16x16.png',
          revision: '907a93cb97118b09f199adc13f4133dd',
        },
        {
          url: '/icons/favicon-32x32.png',
          revision: 'ad315ead7f748d5e912eda147760e0da',
        },
        {
          url: '/icons/favicon-96x96.png',
          revision: '67947e0e574053cb158993497ba3367b',
        },
        {
          url: '/icons/ms-icon-144x144.png',
          revision: '17a8c3d08335f50f81a53f952d923705',
        },
        {
          url: '/icons/ms-icon-150x150.png',
          revision: '86653882c5afc10c18dc56abb61fe108',
        },
        {
          url: '/icons/ms-icon-310x310.png',
          revision: 'bca9f8eef271f8bb0e79db6a69a5e0d3',
        },
        {
          url: '/icons/ms-icon-70x70.png',
          revision: 'a7b6d064406e8dbe2326855bceb68c5b',
        },
        {
          url: '/images/4aa7b5ec0ebe749d179506cf057c2ca2.ico.zip',
          revision: '29fb782156551be0025a79bf10fea330',
        },
        {
          url: '/images/a3834b4d5a13b422006cc692c69f1c9a.ico.zip',
          revision: '79f06e93d4199f435f3f0e168fbc1466',
        },
        {
          url: '/images/auth0.html',
          revision: 'c37f64e06f5f025837a66e8268279e11',
        },
        {
          url: '/images/auth0_files/0c701ff7d190.js.download',
          revision: 'cfbf77a09118e795280ea4cdc7ca56df',
        },
        {
          url: '/images/auth0_files/9122722',
          revision: '2088d719459d31098b4191e36c765a22',
        },
        {
          url: '/images/auth0_files/a0-hooks.css',
          revision: '6750c305fe346fd4ead6ae03a3e66973',
        },
        {
          url: '/images/auth0_files/a0-hooks.js.download',
          revision: '9436162918fe6931328430364f99dfa5',
        },
        {
          url: '/images/auth0_files/a0-hooks.vendors.js.download',
          revision: 'c6ea4f4b55d4852df3026f008c463cff',
        },
        {
          url: '/images/auth0_files/all(1).css',
          revision: '116622ab57db7b4e12fa1213186e0c7c',
        },
        {
          url: '/images/auth0_files/all.css',
          revision: '3b9684a16ef99a568e9ffbd492be4c4d',
        },
        {
          url: '/images/auth0_files/auth0-metrics.min.js.download',
          revision: '1d4e969c9fd63cd2486df2bd876fd0e4',
        },
        {
          url: '/images/auth0_files/bundle.min.js.download',
          revision: 'e40f166b5224c3d350f793ac67454650',
        },
        {
          url: '/images/auth0_files/extend-editor.js.download',
          revision: '9e9754280ce2a3608ff347e5c939b043',
        },
        {
          url: '/images/auth0_files/extension-gallery.standalone-3.3.min.js.download',
          revision: '8c6fc5b629a11d4609c75b2fec53de9e',
        },
        {
          url: '/images/auth0_files/gtm.js.download',
          revision: '0bc82185f03f4eefc1ce4c996f4c7d38',
        },
        {
          url: '/images/auth0_files/heap-1279799279.js.download',
          revision: '75157a81ba03ae0e5162683d28512eab',
        },
        {
          url: '/images/auth0_files/inner.html',
          revision: 'ca58dd3151a17da0ff8827b8378372a9',
        },
        {
          url: '/images/auth0_files/logo-icon.png',
          revision: 'd0ea329b81d76e0b1adb0fefd726e485',
        },
        {
          url: '/images/auth0_files/m-outer-8cb24ab2d649fd36a488d04d8c457933.js.download',
          revision: 'f8f6a4584135f737b26927596ce6e0a7',
        },
        {
          url: '/images/auth0_files/m-outer-93afeeb17bc37e711759584dbfc50d47.html',
          revision: '34fae4fe29779cbf908cbc94b51033d3',
        },
        {
          url: '/images/auth0_files/main.js.download',
          revision: '80a540c2d2abb0078440a1a7480fa680',
        },
        {
          url: '/images/auth0_files/out-4.5.42.js.download',
          revision: '21df7244385e5c0bdf32da01d0dad6c0',
        },
        {
          url: '/images/auth0_files/pendo.js.download',
          revision: 'cc96b4a180ebed6e96a226076a3095b2',
        },
        {
          url: '/images/auth0_files/saved_resource',
          revision: 'e090991c8b07bf67e4048813006543e9',
        },
        {
          url: '/images/auth0_files/saved_resource(1).html',
          revision: 'f03445f270d6a7df86f90f5ee6eda8ce',
        },
        {
          url: '/images/auth0_files/saved_resource.html',
          revision: '753899556190a6e413e42c1de67dbed5',
        },
        {
          url: '/images/auth0_files/tag.js.download',
          revision: 'd22357820d7d5a694a7efe10569951a5',
        },
        {
          url: '/images/auth0_files/vendor.js.download',
          revision: '036355b5754f9609f50854f4695c8ad0',
        },
        {
          url: '/images/auth0_files/visual-cues-widget-0.12.2.min.js.download',
          revision: '9402ef40ae5a9672d08d5da64d3d23e1',
        },
        {
          url: '/images/profile-backup-2.png',
          revision: '9f1c89ca479f81eb4e6d6c53f49d3dab',
        },
        {
          url: '/images/profile-backup.png',
          revision: '7ce6f94f90b8ff861a10417bda7d37e7',
        },
        {
          url: '/images/profile.png',
          revision: '2b7c0c0dc69d5d1fb50b55e7476482ac',
        },
        {
          url: '/images/resist_train_planner.xls',
          revision: 'b87994401101b3eee207050b56ce7227',
        },
        { url: '/manifest.json', revision: 'f7035aee26e4ee89d8d9f802bca7a16b' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      'GET'
    );
});
