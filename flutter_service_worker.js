'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07800dab802e3ab09661f0549e33457b",
"assets/AssetManifest.bin.json": "c246a9f86bdc1c97322140a26e5c39c5",
"assets/AssetManifest.json": "ed618cb5b05444d5d37ee6307b7bb86a",
"assets/assets/animations/alien.json": "f68c9a53b16bc0f66e374372c8222267",
"assets/assets/animations/amazement.json": "ce40125341f6d82b43c4bcfa91f0fe14",
"assets/assets/animations/angry.json": "2de194a81714e8b7c2b4fcd87cb34208",
"assets/assets/animations/anguished.json": "97d37aec1813af64687517f1fc1e03bf",
"assets/assets/animations/anxious.json": "fe47fa67135b42841eaa0a9cf3fa1432",
"assets/assets/animations/astonished.json": "0af06ae7ec45cf5c22da82ed364e11a8",
"assets/assets/animations/balloon.json": "1d1e0a4a7b8d7c1c0dcf6e0997780641",
"assets/assets/animations/bandaged-heart.json": "b5e0c837ed0115af69f63a132ed5364b",
"assets/assets/animations/beam.json": "bb7e46b47314bd7ec59f3ff5a41196f9",
"assets/assets/animations/beating-heart.json": "999e434ee52bdbeaad911dce2edaad24",
"assets/assets/animations/beers.json": "8a064b88246262e01183aacf1254a9a4",
"assets/assets/animations/bell.json": "368216173200f42260aa030152bbdba4",
"assets/assets/animations/birthday-cake.json": "4f609b93839f4c24f65ab40ea174f8a0",
"assets/assets/animations/bomb.json": "a8c8d0cb418a30b719e717735de1b461",
"assets/assets/animations/broken-heart.json": "d7c9bab6b468bdad0c679c7311316987",
"assets/assets/animations/camera.json": "8d027130fd00a24ae01bb632b88e60f1",
"assets/assets/animations/champagne.json": "eaaba634fcfca1aa74dff48eb2267860",
"assets/assets/animations/chuckle.json": "32a2ae9474bf20e2c357cc9d0195f4aa",
"assets/assets/animations/clap.json": "d23525b111d0e471ebe4e03882e82a33",
"assets/assets/animations/clinking.json": "0294c99fb1383498b7aedfe6f351863b",
"assets/assets/animations/coffee.json": "12868af9bd24e835f354347c9d47f01b",
"assets/assets/animations/cold.json": "8c9f631a6f51432c633c40738636a682",
"assets/assets/animations/concern.json": "a8a47fcf68cea22fcd0c6efe4b99f653",
"assets/assets/animations/confetti-ball.json": "b5a5194b18e555ed632ef143f68fe6a6",
"assets/assets/animations/confetti.json": "b5a5194b18e555ed632ef143f68fe6a6",
"assets/assets/animations/confounded.json": "62b88a36164765db88489c5cd24a4675",
"assets/assets/animations/confused.json": "ddd058ad04c645a02372620a249cca63",
"assets/assets/animations/contempt.json": "827032133fc1036a8c6f02ceceb1bad5",
"assets/assets/animations/cool.json": "867032556bffcc232b32d8fa077d2902",
"assets/assets/animations/correct.json": "a1712553dae8a8ce4acb4fc24f056c93",
"assets/assets/animations/cowboy.json": "2d4d8eb1af6218f440549944c9a62c23",
"assets/assets/animations/cry.json": "ffab5219d36424650625aeee3579bc00",
"assets/assets/animations/cupid.json": "940ed7e60cb40b6fe59ffedec76fe78d",
"assets/assets/animations/delicious.json": "c196f10bbdca3fad3d73e956baa8a5a0",
"assets/assets/animations/demon.json": "99d38cb74fab6f20c716f7553fa8adca",
"assets/assets/animations/direct-hit.json": "648c98a9bfa36d8246bec17b4c200241",
"assets/assets/animations/disguised.json": "b6809760357d3368a477cc78e45a8c2f",
"assets/assets/animations/dizzy.json": "872b774c10dbb2ee234b1b81f36f8e4e",
"assets/assets/animations/downcast.json": "fbc298745ae5e755e05a1778608b85f6",
"assets/assets/animations/drool.json": "cb0b04cb857ef232d66f993363df0ea4",
"assets/assets/animations/droplet.json": "1cb4c989aef486db562dffd896b01bfb",
"assets/assets/animations/drunk.json": "b7b0fdd01b2b03068d18fb353969d2c9",
"assets/assets/animations/electricity.json": "e952d08d6c05029f4e6c1df68628a3f2",
"assets/assets/animations/exclamation.json": "07f9676b3103c559230fc76f93cd6d12",
"assets/assets/animations/expressionless.json": "5b99f6e4849134bada75f37b58dd251d",
"assets/assets/animations/eyes.json": "bbeafe2b9b2961b1e7f26abf9b274615",
"assets/assets/animations/fearful.json": "25d63b9c17f70887227d2d3e7ea000a7",
"assets/assets/animations/fire-heart.json": "3a8e5e3599f35a6427c55490aa7db512",
"assets/assets/animations/fire.json": "b99bd0f41e44fee6c19f2c397c8cb247",
"assets/assets/animations/firecracker.json": "a6201e84ea4b606da140c5dfbc55e0d6",
"assets/assets/animations/fireworks.json": "56bd5f6cd48fa92adde5c00ec223af0c",
"assets/assets/animations/flag.json": "5aec43d60b08b70d58984b4f1ddc36f8",
"assets/assets/animations/flushed.json": "e66d10d42d9470413afb3809d49aa52d",
"assets/assets/animations/force-smiling.json": "901eefbd4f55434307bd56f9cb97e18b",
"assets/assets/animations/frown.json": "1d7591c0c43757bd7bb84be70c503917",
"assets/assets/animations/full-score.json": "ca7e469ba775e6328315179414c6009e",
"assets/assets/animations/full_score.json": "ca7e469ba775e6328315179414c6009e",
"assets/assets/animations/game.json": "9f51bd195846813538ebf11f44fa1444",
"assets/assets/animations/gift-heart.json": "956656fcc05af5b58c3c500b1d5bcdf8",
"assets/assets/animations/gift.json": "6cac0b65989d5d4ef767cbdfbd8bb9c5",
"assets/assets/animations/glowing-star.json": "2dc6ea806a82686d1574823903568cd3",
"assets/assets/animations/glutton.json": "b09b9045bfd03169d1891258fd097720",
"assets/assets/animations/graduate.json": "ec920b4631211d54f5b13685bb778744",
"assets/assets/animations/gratitude.json": "35d3264e604984a1048b70a5a79c7a69",
"assets/assets/animations/grimacing.json": "7a8acf35e4286510cf9c953b78873460",
"assets/assets/animations/grinning.json": "ae008697668397bbda1777aaa33932f3",
"assets/assets/animations/halo.json": "3a5534bb2c4a51ff3523dfe8ac72b411",
"assets/assets/animations/happy.json": "162d2c59f04213c4119229636fb8ade8",
"assets/assets/animations/head-bandage.json": "f14b4bb85e6a4dbc7002f658d986d785",
"assets/assets/animations/heart.json": "cb22bb53ddcf8f6c62b713028e8d04f4",
"assets/assets/animations/hearts.json": "7edf97eb258f06764cf338d9a75f5253",
"assets/assets/animations/hide.json": "d0bd182479f055f035b03e3d10301a4a",
"assets/assets/animations/hot.json": "e1878f920b82e7241078d35d7c403199",
"assets/assets/animations/hushed.json": "6aeb2173d69d5027e1fa42b60f5cdf3d",
"assets/assets/animations/joyful.json": "0c531d25ff8a47a7795bbd629e7ec226",
"assets/assets/animations/kiss.json": "4979df8a1deff3c3eb007caded622681",
"assets/assets/animations/kissing.json": "d7c55da0a5b28cd5917b1ddc96675e1a",
"assets/assets/animations/knife.json": "f88be5851099f69a6e6395b354806023",
"assets/assets/animations/lips.json": "c826b05ebef911c6d5fe3aa2dc2fb4d1",
"assets/assets/animations/lying.json": "dbc86f34c831579a8441b978a0f64a24",
"assets/assets/animations/melted.json": "1efaf491bc7e890b79f84673797e6c18",
"assets/assets/animations/mind-blown.json": "9e1012827bf94b6190509b7f6d702d00",
"assets/assets/animations/money-wing.json": "6f95928284f2916b88ecbcb7abb39a3c",
"assets/assets/animations/money.json": "8abbff39f8467748eaf6f3340149acc2",
"assets/assets/animations/monocle.json": "b1192e9fc0988bfe3638cf201cb96356",
"assets/assets/animations/muscle.json": "064b92a1fe9b0c7539ca65db7475d1fd",
"assets/assets/animations/nauseated.json": "ae7472f2ada75f93707f7821bce0656c",
"assets/assets/animations/nerd.json": "b0bb1d8c961b944095b0a54bb11b5d13",
"assets/assets/animations/neutral.json": "b8dcb797c083023b23260373c93bd445",
"assets/assets/animations/ok.json": "06e71b3429f5ca4f188e6a1584267be0",
"assets/assets/animations/omg.json": "a23cec3e528d2416d9e4ac8c66e86819",
"assets/assets/animations/open-hands.json": "4bc2218f9ea24d78c485350d379c4cff",
"assets/assets/animations/party.json": "cbb9f5f37cd6a52fa3574a8cb85bbb12",
"assets/assets/animations/peaking.json": "fcfc0844cb2944252ab9bb4f921dc1a4",
"assets/assets/animations/pensive.json": "9745c4e57516b6ffa7cd82008cedc828",
"assets/assets/animations/persevere.json": "997cd43cc583a62225564d123bf6a666",
"assets/assets/animations/pink-heart.json": "9123dbc41d88b121ff1662ba1172140c",
"assets/assets/animations/plead.json": "06ad7d59ff0017c73ce9acb5af002d73",
"assets/assets/animations/pointing-down.json": "a8847937fab2b30081dcc166a27fe64f",
"assets/assets/animations/pointing-up.json": "3cb4a41ff078e9be9d35b078a1168f38",
"assets/assets/animations/puke.json": "45cece3833bd80cc83915d1399c08291",
"assets/assets/animations/question.json": "72369ef1ba9b53a18d062f7a100bf378",
"assets/assets/animations/rainbow.json": "8a31c4b13ea0e0a50b06285ebcacc178",
"assets/assets/animations/raised-eyebrow.json": "c308449fd6f85e011bf258d240c1867c",
"assets/assets/animations/red-heart.json": "cb22bb53ddcf8f6c62b713028e8d04f4",
"assets/assets/animations/relief.json": "de9c5941abb6184153cf7e8bb08f9962",
"assets/assets/animations/relieved.json": "03d4253107e49c6fe868420e8c11147e",
"assets/assets/animations/rocket.json": "8a773a30a3f253a14dae33a8dfafe86c",
"assets/assets/animations/roll.json": "d98fa579c6cb2e2cfc966c483cc47579",
"assets/assets/animations/rolling-eyes.json": "607fea577610493c6d869a01554f6fef",
"assets/assets/animations/rose.json": "57ffec75e3bb59db0ad180a89619c781",
"assets/assets/animations/sad.json": "d3e617a7a5930002ea865beccc849812",
"assets/assets/animations/salute.json": "4113b9d1054a057793d5f8b73626a5c6",
"assets/assets/animations/scold.json": "547a64e9d5abe3cc9dde7c319033724d",
"assets/assets/animations/screaming.json": "102e4c4e3391d54c2e1d70e14660142c",
"assets/assets/animations/shushing.json": "25d8a14c06e34a3cfb2333cf990c7652",
"assets/assets/animations/sick.json": "a98a3471c20962bf4a15e11f83e5b7ed",
"assets/assets/animations/side-eye.json": "772890117b847400377b6aeec7bf4fc4",
"assets/assets/animations/sleeping.json": "303b666529d090af77967ac44a8ff830",
"assets/assets/animations/sleepy.json": "9a36ab9991e769c167e725d51b0e3522",
"assets/assets/animations/smallness.json": "1c3497a54b47ec66da375373c8762730",
"assets/assets/animations/smile.json": "8b28dda09a179000ce8b79607bbb8d86",
"assets/assets/animations/smiling-eyes.json": "51f8a64b3d4a2a419d8e79307edfbe5a",
"assets/assets/animations/smiling-tear.json": "bc34d7073844304f1087b1d0a7538843",
"assets/assets/animations/smirking.json": "a6ba52c49540df7b98163e4c57ebaa57",
"assets/assets/animations/smug.json": "d28f381465907c02bcaa7942da768589",
"assets/assets/animations/sneezing.json": "9e35846933e43fc97050057e13be9ff0",
"assets/assets/animations/sob.json": "5005331dcb69ab29e4435878da862c06",
"assets/assets/animations/speechlessness.json": "9d85f484a40dbd6ec2369234f6cdc86b",
"assets/assets/animations/squint.json": "5e1939f50eda9393068c7eef2758bdcc",
"assets/assets/animations/star-eye.json": "75c0de1b983325dc58011e5124be574f",
"assets/assets/animations/surprise.json": "924736c7e2d5b95778c61f4080d4261d",
"assets/assets/animations/sweat.json": "e46fd50f0cdb69c8c40c8e10d7ee59a4",
"assets/assets/animations/tears-of-joy.json": "e64aace8c06b9e60037a0fa330eb8ccb",
"assets/assets/animations/tears_of_joy.json": "e64aace8c06b9e60037a0fa330eb8ccb",
"assets/assets/animations/thermometer.json": "65eafe256ca62187e78d83322d685133",
"assets/assets/animations/thinking.json": "a39bb9500c803f83d0e3612218f52b6a",
"assets/assets/animations/throwing-kiss.json": "d5743d88d0a3751289305bfe0ed57f94",
"assets/assets/animations/thumbs-down.json": "d80618171142f69ad679237665166a10",
"assets/assets/animations/thumbs-up.json": "5c8e8d5820b833f81380f31a1ed4b6a4",
"assets/assets/animations/thumbs_down.json": "d80618171142f69ad679237665166a10",
"assets/assets/animations/thumbs_up.json": "5c8e8d5820b833f81380f31a1ed4b6a4",
"assets/assets/animations/tired.json": "da66e157541177c3d57ce4f06e2cfbfc",
"assets/assets/animations/tongue.json": "a33161911add9d92414035f4f65c7309",
"assets/assets/animations/upside-down.json": "790f4c22fc8f17379851156902cf27a4",
"assets/assets/animations/victory.json": "3b8c9805759787c0fd57c99a01cb76d9",
"assets/assets/animations/wave.json": "55be20d6d01e9cb47e12f2f0a8723580",
"assets/assets/animations/weary.json": "76131eb204d7cd000e445a0667a4db08",
"assets/assets/animations/wilt.json": "62a5397b8795a26761d2c6ec415d08d3",
"assets/assets/animations/wine.json": "b52700ba0672c89b9a61120356657707",
"assets/assets/animations/wink.json": "935673cc1a72f647dbbdd394f2944c2f",
"assets/assets/animations/winking-tongue.json": "fdd697dbdf867e74643e1975181d7bb7",
"assets/assets/animations/worried.json": "d44608375fd7d39e8149bb11e521b665",
"assets/assets/animations/worship.json": "1279656c14aaabd9243a14faddba3068",
"assets/assets/animations/wrong.json": "443ab4117edfdc4680f1ff061d6cb3da",
"assets/assets/animations/yawning.json": "496660b8adc40b5ef5daec3e7de6a445",
"assets/assets/animations/zany.json": "8429cb469a3ad8786b93a4e239e34ea0",
"assets/assets/animations/zipper.json": "517f7de3ba3747a1670aa6a26d542436",
"assets/assets/logo/logo.png": "33b442c6983ccd9b9ed99c3e914e673e",
"assets/assets/logo/logo1.png": "1026dd2fda242e3db317b93166a35d00",
"assets/assets/logo/logo2.png": "e0fdeac5cac69f93b9db603945586221",
"assets/assets/logo/logo_bg.png": "779077ab158189c7da2906387b70859b",
"assets/assets/logo/logo_paint.png": "5043216df6b5640d816c8ca69268c349",
"assets/assets/profile_images/pfp1.png": "70fad70a3ec2f8a12b2534daab9a9a0f",
"assets/assets/profile_images/pfp10.png": "9041ced27734707938c006a0ec860b2e",
"assets/assets/profile_images/pfp11.png": "257eee077edc396e119eec421a41dd7d",
"assets/assets/profile_images/pfp12.png": "93ab466740c1766184a700b9901e4522",
"assets/assets/profile_images/pfp13.png": "826543710eb3f251b3147def1fa5cf45",
"assets/assets/profile_images/pfp14.png": "4352e2ba755509e4809b372b28fdf18a",
"assets/assets/profile_images/pfp15.png": "6ca96c7cd36cfa80536da9dc0537fb4a",
"assets/assets/profile_images/pfp16.png": "3c0e58bb67b96a2112177186df5a0276",
"assets/assets/profile_images/pfp17.png": "1f2f05d7912c4bead3de32e6d62d83ee",
"assets/assets/profile_images/pfp18.png": "487c287bd9f44c251036272bb658fc1e",
"assets/assets/profile_images/pfp3.png": "2cb151510f931fa6b869df4df3504344",
"assets/assets/profile_images/pfp4.png": "0fcb9eff09b91d32433bb7f1c4ecee61",
"assets/assets/profile_images/pfp5.png": "de6a8d8a3d6f7bf71794c0bc9aa5b0cc",
"assets/assets/profile_images/pfp6.png": "213cc34a9e07060243c9bcfbf598dd92",
"assets/assets/profile_images/pfp7.png": "d418a44de138b428511872f926f8b36c",
"assets/assets/profile_images/pfp8.png": "324a02a2c3ff9513394ec7cdc276f418",
"assets/assets/profile_images/pfp9.png": "6c8c0e9964c217ca959853fe6d154b53",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "8c0e44d358bc065224a3884313112ccc",
"assets/NOTICES": "2919b6c18242e4a4f087b544aa6117da",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "8868abc2b96ece667d5a81f479133349",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03a56d273a1bd69d314addd5109b92c6",
"/": "03a56d273a1bd69d314addd5109b92c6",
"main.dart.js": "319b401858ef78a1c63ad39d28ebadd0",
"manifest.json": "2b79b8a7258d768cdcacbe078c8abc1e",
"version.json": "95bf59b48174aaf2e7f675e885de5360"};
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
