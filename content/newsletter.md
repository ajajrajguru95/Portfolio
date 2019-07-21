---
title: NEWSLETTER
description: Newsletter stuff
images: ["/images/sample.jpg"]
---

Testing newsletter
<div class="newsletter">
	<form name="newsletter" method="POST" netlify-honeypot="bot-field" data-netlify="true">
		<div class="hidden group d-none">
			<label>Don’t fill this out if you're human: 
			<input name="bot-field" /></label>
		</div>
		<div class="group">
			<label for="name">Email</label>
			<input type="Email" name="email" class="theme-input" placeholder="Email Please!!!">
		</div>
		<div class="group mb-0 text-center">
			<input type="submit" value="Subscribe" class="btn">
		</div>
	</form>
</div>