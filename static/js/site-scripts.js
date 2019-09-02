// Site wide scripts goes here

// Lazy loading images using intersection observer

// Get all images
const images = document.querySelectorAll('[data-src]');
// Create observer options
const imgOptions = {
	threshold: 1,
	rootMargin: "0px 0px 300px 0px"
};
// function to get data-src and set src to images
function preloadImage(img){
	const src = img.getAttribute("data-src");
	if(!src){
		return;
	}
	img.src = src;
}
// Create actual observer
const imgObserver = new IntersectionObserver((entries,imgObserver) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			return;
		}
		else{
			preloadImage(entry.target);
			imgObserver.unobserve(entry.target);
		}
	})
},imgOptions);

// Track the observer

images.forEach(image => {
	imgObserver.observe(image);
});


// Service worker for PWA

addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') return skipWaiting();
});

addEventListener('fetch', event => {
  event.respondWith((async () => {
    if (event.request.mode === "navigate" &&
      event.request.method === "GET" &&
      registration.waiting &&
      (await clients.matchAll()).length < 2
    ) {
      registration.waiting.postMessage('skipWaiting');
      return new Response("", {headers: {"Refresh": "0"}});
    }
    return await caches.match(event.request) ||
      fetch(event.request);
  })());
});



function listenForWaitingServiceWorker(reg, callback) {
  function awaitStateChange() {
    reg.installing.addEventListener('statechange', function() {
      if (this.state === 'installed') callback(reg);
    });
  }
  if (!reg) return;
  if (reg.waiting) return callback(reg);
  if (reg.installing) awaitStateChange();
  reg.addEventListener('updatefound', awaitStateChange);
}

// reload once when the new Service Worker starts activating
var refreshing;
navigator.serviceWorker.addEventListener('controllerchange',
  function() {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  }
);
function promptUserToRefresh(reg) {
  // this is just an example
  // don't use window.confirm in real life; it's terrible
  if (window.confirm("New version available! OK to refresh?")) {
    reg.waiting.postMessage('skipWaiting');
  }
}
listenForWaitingServiceWorker(reg, promptUserToRefresh);



if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js', { scope: '/' })
        .then(function(registration) {
            console.log('Service Worker Registered');
            registration.update();
        });

    navigator.serviceWorker
        .ready
        .then(function(registration) {
            console.log('Service Worker Ready');
        });
}
