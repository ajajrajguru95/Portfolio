---
title: Lazy loading was never this easy with Intersection Observer.
description: Intersection Observer the scroll API.
date: "2019-05-02T19:49:05+02:00"
publishDate: "2019-05-02T19:49:05+02:00"
---

What if i tel you that you can lazy load images, add entry/exit animation or do scroll animations and also set a fallback to those who doesn't support it without any polyfill/modernizr file and that too within couple of lines of code? 
I know calm down relax sit back and embrace yourself to the Intersection Observer.

<!--more-->

We have always used a Javascript/jQuery traditional lazy load plugin for our images to lazy load on page but by using 

```YAML
---
Create observer options
const imgOptions = {
	threshold: 1,
	rootMargin: "0px 0px 300px 0px"
}; 
---
```

