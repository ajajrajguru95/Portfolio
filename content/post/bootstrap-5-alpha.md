---
title: Bootstrap 5 Alpha has arrived.
description: What's new in Bootstrap 5 and when is it releasing.
date: "2020-07-05T09:37:55+02:00"
publishDate: "2020-07-05T09:37:55+02:00"
---

Finally Bootstrap 5 Alpha is here and I'm super excited to witness what this front-end giant got in it's fifth installment. 

Just a little background Bootstrap is a popular responsive front end framework focused towards building modern and dynamic interfaces for web applications and web pages.
So let's deep dive into what new features or changes are coming in this version.
<!--more-->

### **New look and feel**

[![Bootstrap 5 new logo](/images/v5-new-logo.png "Bootstrap 5 new logo")](/images/v5-new-logo.png)

Inspired by the CSS that created the very beginnings of this project, Bootstrap 5 logo embodies the feeling of a rule set—style bounded by curly braces.

### **jQuery is removed.**

In fact the statement should read **jQuery is finally removed and we are back to Vanilla javascript**. Lets understand why this step was taken and why this is the best approach towards performance and sustainability.

While [jQuery](https://jquery.com/) without a doubt is the most popular javascript library and every website now a days has one, while Bootstrap has been using jQuery for more than 8 years, jQuery has become quite a large and bloated framework that requires websites using it to download and add trivial load time for a library that may not be used by any other plugin except Bootstrap itself.
As JavaScript frameworks like React, Angular and Vue dominate the web development community nowadays, jQuery has been losing its popularity as most of these modern frameworks work through the virtual DOM and not on the DOM directly that leads to much faster performance. Although it might sound absurd, it turns out it is much more proficient and anyone using these frameworks will have better control and maintenance over their code than those who use jQuery.

So this means that in Bootstrap 5 if any jQuery feature or property you need in your project has to be done in pure vanilla javascript. 
Also according to the sources there will be an option to opt between jQuery or Vanilla for simplicity.

### **Drop support for Internet explorer 10 and 11.** :smile:

Do we really need an explanation here?

In Bootstrap 5, the Bootstrap team decided to drop the support for Internet Explorer 10 and 11 which is a pretty good move as it will enable web designers and developers focus more on designing modern web pages without having to worry about breaking any piece of code on old browsers or increasing the size of every project.
Internet Explorer is no longer relevant with Chrome, Firefox, and Edge. In fact, it became one of the web designer’s nightmares since it doesn’t support modern JavaScript standards. What’s even worse is it doesn’t support a lot of modern CSS properties which limits your modern web design potential. In fact Microsoft has launched Edge with chromium based engine so it's slowly moving towards the brighter side. 

### **Custom SVG icon library**

[![SVG Icons](/images/svg-icons.jpg "SVG Icons")](/images/svg-icons.jpg)

Bootstrap version 3 initially shipped 250 reusable icon components in the font format called [Glyphicons](https://getbootstrap.com/docs/3.3/components/) however in Bootstrap version 4 it was scrapped and designers and developers had to rely on free icon font like FontAwesome or use their own custom SVG icons.

Boostrap 5 ships with it's own custom set of SVG icon library and the details to the same can be found [here](https://icons.getbootstrap.com/)

### **Utilities API**

<blockquote>The oppressors of generations who have kept you down with myths of opportunity, and we give it back to you... the people. Utility is yours :bat: </blockquote> -  **BS5 Lover**

With this new Utility API we can create our own utility classes as per our need and not rely only on what framework provides.

```YAML

$utilities: () !default;

$utilities: map-merge(
  (
    // ...
    "width": (
      property: width,
      class: w,
      values: (
        25: 25%,
        50: 50%,
        75: 75%,
        100: 100%,
        auto: auto
      )
    ),
    // ...
    "margin": (
      responsive: true,
      property: margin,
      class: m,
      values: map-merge($spacers, (auto: auto))
    ),
    // ...
  ), $utilities);

```


Apart from all of the above goodness below are the remaining changes :

#### **Responsive Font Sizes**

#### **Change of gutter width unit of measurement**

#### **Removed Card Decks**

#### **Navbar Optimization**

#### **Switching from Jekyll to Hugo**

Head over to the official [Bootstrap Blog](https://blog.getbootstrap.com/) for more in depth details.

With all of the above updates those are coming with Bootstrap 5 it's safe to say that the Bootstrap team is really working hard and taking performance, accessibility and advancement seriously and to another level. 