---
title: A tale of Intersection Observer.
description: A API that solves your lazy loading and scroll events problem.
date: "2019-08-08T19:49:05+02:00"
publishDate: "2019-08-08T19:49:05+02:00"
---

What if i tel you that lazy loading for images and entry animation or scroll animations don't require external plugin's or fallback plugins to work and can be done with a simple API, how does that sound? :relieved:

The [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

[![Intersection Observer](/images/intersection-observer.png "Intersection Observer")](/images/intersection-observer.png)

<!--more-->

## Definition

To describe what an observer is <blockquote>Observers are objects that spot something in real-time like birdwatching  :eyes:</blockquote>


## Overview(Concept and usage)

There's a good support for Intersection Observer API as of today you can check caniuse

[![caniuse](/images/caniuse-intersection-observer.jpg "caniuse")](/images/caniuse-intersection-observer.jpg)

You can check if API is supported in the browser

```YAML
if(!!window.IntersectionObserver){}

// or

if('IntersectionObserver' in window){}
```

Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other:

```YAML
	let options = {
	  root: document.querySelector('#scrollArea'),
	  rootMargin: '0px',
	  threshold: 1.0
	}

	let observer = new IntersectionObserver(callback, options);
```
Options has three properties:

**`root`** - The ancestor element/viewport that the observed element will intersect. Think of it as the train station that the train will intersect.

**`rootMargin`** - A perimeter of the root element, shrinking or growing the root element’s area to watch out for intersection. It’s similar to the CSS margin property.

**`threshold`** - An array of values (between 0 and 1.0), each representing the distance an element has intersected into or crossed over in the root at which the callback is to be triggered.


Function to check if viewport hit the root with observer and call lazy load function to work. This works with background-image too!!!

```YAML
	function lazyLoader(entries) {
	  // loop through all images
	  entries.forEach(function (entry) {
	    // does the viewport hit the current image
	    if (entry.intersectionRatio > 0) {
	      // yes! load the image
	      lazyLoadImage(entry.target);
	    }
	  });
	}

	function lazyLoadImage(observedImage) {
	  /**
	    *  We hit an observed image!
	    *  First, remove the lazy loading class. This will show the image
	    *  Then remove the observer
	    */
	  observedImage.classList.remove('lazyImage'); // If we have an background image, replace the source with the data-lazyBackground attribute

	  if (observedImage.dataset.lazybackground) {
	    observedImage.style.backgroundImage = "url(".concat(observedImage.dataset.lazybackground, ")");
	  } // does it have a data attribute with image-src?


	  if (observedImage.getAttribute('data-src')) {
	    // yes! So lets make the image source equal to the data image source and render it!
	    observedImage.src = observedImage.dataset.src;
	    if ('IntersectionObserver' in window) {
	      // now that the image has bee renderes, we don't need to observe it anymore
	      observer.unobserve(observedImage);
	    }
	  }
	}

```


More in-depth details can be found at [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)


Entire working code can be found here with class **`lazyImage`** for any effect or separate triggering.

For those browsers which doesn't support this API it sets data-src to src straight. :wink:

```YAML

	var options = {
	  rootMargin: '0px',
	  threshold: 0.1
	};


	var allTheLazyImages = Array.prototype.slice.call(document.querySelectorAll('.lazyImage'), 0);
	var observer; // Does your browser support InersectionObserver?

	if ('IntersectionObserver' in window) {
	  observer = new IntersectionObserver(lazyLoader, options); // select all our image which we want to have lazy loaded

	  allTheLazyImages.forEach(function (image) {
	    // put them in the observer
	    observer.observe(image);
	  });
	} else {
	  allTheLazyImages.forEach(function (image) {
	    lazyLoadImage(image); // if it is not supported, load all
	  });
	}

	function lazyLoader(entries) {
	  // loop through all images
	  entries.forEach(function (entry) {
	    // does the viewport hit the current image
	    if (entry.intersectionRatio > 0) {
	      // yes! load the image
	      lazyLoadImage(entry.target);
	    }
	  });
	}

	function lazyLoadImage(observedImage) {
	  /**
	    *  We hit an observed image!
	    *  First, remove the lazy loading class. This will show the image
	    *  Then remove the observer
	    */
	  observedImage.classList.remove('lazyImage'); // If we have an background image, replace the source with the data-lazyBackground attribute

	  if (observedImage.dataset.lazybackground) {
	    observedImage.style.backgroundImage = "url(".concat(observedImage.dataset.lazybackground, ")");
	  } // does it have a data attribute with image-src?


	  if (observedImage.getAttribute('data-src')) {
	    // yes! So lets make the image source equal to the data image source and render it!
	    observedImage.src = observedImage.dataset.src;
	    if ('IntersectionObserver' in window) {
	      // now that the image has bee renderes, we don't need to observe it anymore
	      observer.unobserve(observedImage);
	    }
	  }
	}

```

