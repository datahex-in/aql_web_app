'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6e95fc3f550b4d7adf14a871e0716fc4",
"version.json": "08ff6c9a43e81793c938d5025a473933",
"index.html": "38bad6eae7c3154b45f4e383b0faee59",
"/": "38bad6eae7c3154b45f4e383b0faee59",
"main.dart.js": "30d766c6442aff84cc853efd22951179",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"_redirects": "d38a2b58df330c85e0029eecf71d7c26",
"favicon.png": "42aac14b240159a6cdb4f353eb8fd331",
"icons/Icon-192.png": "7a07cbe21cc168d920d604c20c1d30ee",
"icons/Icon-maskable-192.png": "7a07cbe21cc168d920d604c20c1d30ee",
"icons/Icon-maskable-512.png": "ece224df0b53ee314cf1eaf4ca90531c",
"icons/Icon-512.png": "ece224df0b53ee314cf1eaf4ca90531c",
"manifest.json": "8ef2aa779e7b9631b6d60ab3ce07bace",
"assets/AssetManifest.json": "8bd8b84fd3ca966a73de0397c7e7dbb7",
"assets/NOTICES": "67455822fe5db254b160523a1960ec85",
"assets/FontManifest.json": "e270c85fbdbc1e46379039fec02b4f13",
"assets/AssetManifest.bin.json": "89a6c9a3670d33ecea6f80d0910f6016",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e6b89082a6d5ddc6150a3f42e4d7e844",
"assets/fonts/MaterialIcons-Regular.otf": "4e37e0f34206e9fc9a179e381f47345f",
"assets/assets/images/login_image.svg": "e1d5428d41cdbfa73908669cf7f520bf",
"assets/assets/images/login_image.png": "3a9c6b7b7bd12089f454014d073cf1fc",
"assets/assets/images/white_logo.svg": "4cf771eabe2c4bdb9e61ad846e593263",
"assets/assets/images/place_holder.jpeg": "7b622294a920cb9014108b593542e2b8",
"assets/assets/images/dashboardImg.png": "0f6d27870414e8717a666159d6d1d193",
"assets/assets/images/logo_white.png": "4d6ac814b397d58e6dc1091164eb5eac",
"assets/assets/images/upsc%2520cse.svg": "e9f8f67ae906f9557822b06b692fcb90",
"assets/assets/images/bg_gradient.svg": "b88eebc1ff13b7bdcb027387431645a9",
"assets/assets/images/backgroundQuestionScreen.png": "522819e43c72401702ccc97977c1a202",
"assets/assets/images/profilecard.png": "37dc8562cdb5168467e787dce8bfbb5e",
"assets/assets/images/login_screen_element.svg": "8afe49ad4abcdc20c5fa3df26f88af8b",
"assets/assets/images/no_img.svg": "e5dfb570ced956d6262c0edf7a9ff400",
"assets/assets/images/dashboard_img.svg": "962e4f8dbb414e15c9354b8981996253",
"assets/assets/images/young_man.png": "2acc428837f6f01bdb2bcd771abf007b",
"assets/assets/images/backgroundCongratulationScreen.png": "f773c3970c95dd40923cacae5dff848f",
"assets/assets/icons/search.svg": "e79e0a6885ad7510d1029adf54fd0acf",
"assets/assets/icons/chapterIcon.svg": "effa9e2feddb636ec7f09604c63b3436",
"assets/assets/icons/NotificationBell.svg": "910e4dd881a81b189eb4e97e8e6d2b93",
"assets/assets/icons/NotificationIcon.svg": "9c90bdf7cb0b31b12544b44ebed36e64",
"assets/assets/icons/testtube.svg": "0949adb7c756b37ca4b328207f2cd298",
"assets/assets/icons/subscribedtick.svg": "840e625d4d295ac525d08eaffdb5607e",
"assets/assets/icons/statsIcon.svg": "b460ce1641f2c9746e079fe924434939",
"assets/assets/icons/bookmark_icon.svg": "b0dba10ae5a76a6cd872c02b8ac4fa74",
"assets/assets/icons/semi_eclipse.svg": "f5dcdb49cc17e491649bf781d60832fa",
"assets/assets/icons/app_icon.svg": "ca5faefa26ebbe2b56add3399865d4fc",
"assets/assets/icons/nodataIcon.svg": "58dd0e2a79e93701a83b524cba6a73a4",
"assets/assets/icons/greenTick.svg": "70dab3971b609a3ee4792010a28a23f0",
"assets/assets/icons/quick_test_icon.svg": "4d6443f67941156b5859aa50a141bfae",
"assets/assets/icons/subscribe_icon.svg": "52985b2482db0caabccb39bdcaa3b40a",
"assets/assets/icons/bottom_nav_icons/streams.svg": "0962cd47d346f1fbb6f9f859d8e4ba7e",
"assets/assets/icons/bottom_nav_icons/home.svg": "b3ffd1d6d677258ea23a45f9f16cf86f",
"assets/assets/icons/bottom_nav_icons/subjects.svg": "0cda18cb3e6bb56eac502c718d6e423b",
"assets/assets/icons/bottom_nav_icons/profile.svg": "0a48a61012b562d6a7588a9367d3024c",
"assets/assets/icons/streamsIcon.svg": "2759593402261a97c402817218c33529",
"assets/assets/icons/privacyIcon.svg": "2f5ff91fcd41fb04108a9f0fde959ec7",
"assets/assets/icons/userImage.svg": "fc01e5d4e69b19b4fc96d4448ef91500",
"assets/assets/icons/kingIcon.svg": "b6771b6fa86ec29170de0ed44290c2a8",
"assets/assets/icons/tick.svg": "de664be0bd7520aad44acd79c86f4d03",
"assets/assets/icons/bookMarkIcon.svg": "0f517b254bcdfc2e952011303ee69932",
"assets/assets/icons/streamIcon.svg": "03cf7f8b5d6186c6a78a7e5febeccccd",
"assets/assets/icons/add_photo.jpeg": "53fefa9ccec96fb6b0535f383af4928c",
"assets/assets/icons/arrowForward.svg": "f5de725fa3e6c307fa0d232f2933a6d1",
"assets/assets/icons/warning.svg": "3c8a2e5d4462777eb316992f337a5c7c",
"assets/assets/icons/subject.svg": "2b879111742af3fc4e25a42dad4bd9fc",
"assets/assets/icons/arrowback.svg": "43ff6699530e2e0a766ff3d5454dce8d",
"assets/assets/icons/female_gender.svg": "7a644e669959ec87045ebd666958e9e8",
"assets/assets/icons/male_gender.svg": "7b24a7eecf107edc35a535b6983a362f",
"assets/assets/icons/subjectIcon.svg": "891a0bd404488f24abe97c44c922d62d",
"assets/assets/icons/crown.svg": "9089afb2679d8c7bcce61bb52db9ec0b",
"assets/assets/icons/verify.svg": "0e30183eb9930e13492b82082c2f8066",
"assets/assets/icons/biology.svg": "f52750a2c1512d277e5254744f128fba",
"assets/assets/icons/tick-circle.svg": "b3a747504791cdfaa72f621fb7d3f041",
"assets/assets/icons/no_data.svg": "4c0c6f075cdf749e22066f5348b1074b",
"assets/assets/icons/backArrow.svg": "fedb5a457be068bd7599c4bfbd0f9c4e",
"assets/assets/icons/time_out.svg": "59895cb5d2f4a3dab5a0436effda9a53",
"assets/assets/icons/SignOut.svg": "4b873764d6320bb2c505a86fa3c6b287",
"assets/assets/icons/goldBadgeIcon.svg": "c82c1de84714b6f1f78a82bb318cb40a",
"assets/assets/icons/recentIcon.svg": "f4f8e352167fb496def3cb5cc0e4b4ee",
"assets/assets/icons/upseIcon.svg": "032635f530e25305a1b691e71853ffe1",
"assets/assets/icons/timerGreen.svg": "33994455c1621f18e916624c09fd5868",
"assets/assets/icons/attempted.svg": "fee8114fb3c58206df30fcefd6a4e0c4",
"assets/assets/icons/badgeIcon.svg": "9cd4e63b72b3fb341aa42c32ee3b357a",
"assets/assets/icons/termsIcon.svg": "338adb81bd6fd5f6567922d73c139ee1",
"assets/assets/icons/arrowbackprimarycolor.svg": "2aeb00e7ad46c89ab5a72facc5d6b57e",
"assets/assets/icons/grafIcon.svg": "debda89067430b9d968f9c6a5f99376a",
"assets/assets/icons/timer.svg": "d886dc82bea7b57069d43edc1d064c86",
"assets/assets/fonts/Manrope-Medium.ttf": "aa9897f9fa37c84d7b9d3d05a8a6bc07",
"assets/assets/fonts/Manrope-SemiBold.ttf": "4410f0d144bea752f9bfb5f33909e0c5",
"assets/assets/fonts/Manrope-Regular.ttf": "f8105661cf5923464f0db8290746d2f9",
"assets/assets/fonts/Manrope-Bold.ttf": "69258532ce99ef9abf8220e0276fff04",
"assets/assets/gif/checklist.gif": "a38cc59148cf95d6cfa640107036cf76",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
