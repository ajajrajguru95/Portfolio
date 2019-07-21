---
title: CONTACT
description: Hey, I'm Ajaj Rajguru
images: ["/images/sample.jpg"]
---

Want to have some chat or had some query or got a cool project and wanna talk about it i'm all yours.....
<div class="contact-form">
	<form name="contact-form" method="POST" netlify-honeypot="bot-field" data-netlify-recaptcha="true" data-netlify="true" >
		<div class="hidden group d-none">
			<label>Don’t fill this out if you're human: 
			<input name="bot-field" /></label>
		</div>
		<div class="group">
			<label for="name">Name</label>
			<input type="text" name="name" class="theme-input" placeholder="Your Sweet Name">
		</div>
		<div class="group">
			<label for="name">Email</label>
			<input type="Email" name="email" class="theme-input" placeholder="Email Please!!!">
		</div>
		<div class="group">
			<label for="name">How did you got teleported here? :blush:</label>
			<select class="theme-input" name="came-from">
				<option value="">--Select--</option>
				<option value="">LinkedIn</option>
				<option value="">Facebook</option>
				<option value="">Instagram</option>
				<option value="">Google</option>
				<option value="">By Recommendation</option>
			</select>
		</div>
		<div class="group">
			<label for="name">Message</label>
			<textarea rows="6" cols="4" name="message" placeholder="Your Lovely Message Here!!!" class="theme-input textarea"></textarea>
		</div>
		<div class="group">
			<div data-netlify-recaptcha="true"></div>
		</div>
		<div class="group mb-0 text-center">
			<input type="submit" value="Launch" class="btn">
		</div>
	</form>
</div>