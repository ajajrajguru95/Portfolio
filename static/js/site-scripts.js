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