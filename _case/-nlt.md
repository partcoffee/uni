---
layout: page
case: true
final: true

title: "Negotiated Learning Agreement: Work"
headline: "Negotiated Learning Agreement: Work"

permalink: /final/negotiated-learning-agreement/
---

{::nomarkdown}
<div class="caption mid">
	<div class="contain">
		<img src="/../img/final/rs.gif" alt="Riktig Spor" class="lazy lazyload fade wait">
	</div>
	<span><a href="http://riktigspor.no/om-oss/" target="_blank">Riktig Spor</a></span>
</div>
{:/}

<div class="div"></div>

<p class="lead">From my first semester, I realised just how different university could be to a agency setting, and for my negotiated learning task this semester, I had to take a step back and reflect. How can I truly challenge myself, and what kind of project would benefit me the most in the long run? I proposed another work placement.</p>

Early January, I emailed a lecturer for some insight on my project ideas as I had several – all of varying degrees of difficulty. He replied, "It can be almost anything you want it to be as long as it justifies 12 weeks of work." Doable for sure, but I also wanted to move out of my comfort-zone.

My initial project idea was drawn to a comeplete "web package" for a company of my choosing; with design, code, a content management system, and photography included. It would certainly show the world what I could do if I was 100% in control from start to finish, covering art direction, design and development. However, I have covered similar projects in the past, and I knew for certain that this would be a comfortable and relaxed project – especially over 12 weeks. Thus, I got in touch with Riktig Spor.

<div class="div"></div>

## Establishing a project

The obvious concern was that I would not be challenged if I'm not personally picking projects, and merely do what is placed on my desk. I voiced this concern and they gave me the freedom to work on what I found challenging – i.e. avoiding mindless publication of content, with a stronger focus on server management, photography and development.

I have made a similar structure to my previous semester in this article, outlining the projects I participated in, along with general thoughts on the experience.

<div class="div"></div>

## My role at Riktig Spor

I'm still a student, and they are fully aware of that – however, I have quickly become their preferred web advisor and developer. This semester, I have covered web design, back- and front-end development, server management, client management, web consulting and photography. The photography bit may seem out of place, but I wanted to branch out more this semester.

<div class="div"></div>

<div class="caption mid">
	<div class="contain">
		<img src="/../img/final/heymat-lq.jpg" data-src="/../img/final/heymat.jpg" alt="Heymat" class="lazy lazyload">
	</div>
	<span>A product from <a href="http://heymat.no/" target="_blank">Heymat</a>, which is sold through their website. All Heymat product photos by <a href="http://nadianorskott.no/" target="_blank">Nadia Norskott</a></span>
</div>

<div class="div"></div>

## Heymat

The most technically challenging project for has got to be the development of the <a href="http://heymat.no/" target="_blank">Heymat</a> website and online shop.

Heymat is a spin-off from an industrial cleaning firm in Northen Norway, with long experience in leasing mats to businesses and industry in Helegeland. The goal was to offer a high quality, industry standard mat to private homes – effectively offering the same quality, but with a touch of design. The design of this brand started before I came here as a web developer, but the web was still largely untouched, and needed some guidance and counselling.

The initial offer had three options, which came down to in-house development or outsourced development from two different companies. The client wanted the former due to cost, which immediately gave me a challenge. One of our designers started designing the website, while I started reading up on ecommerce web development and web security.

I'm familiar with relatively static sites, and I have no trouble with dynamic content either – but online transactions with real money was a brand new field to me, which came with a number of challenges:

<ul class="skill-list">
	<li>Secure connections</li>
	<li>User logins</li>
	<li>User-exclusive prices</li>
	<li>Payment management</li>
	<li>Payment integration with third party systems</li>
	<li>Multiple languages with multiple currencies</li>
	<li>Multiple payment methods</li>
	<li>Bulk orders</li>
</ul>

The above is obviously very related to the web, which was my primary role. I'm offering more insight on the topic in <a href="https://www.youtube.com/watch?v=q0H_heO6eaA" target="_blank">this short video</a>:

<div class="div"></div>

<div class="contain black">
	<div class="article-video fade wait" id="video">
		<iframe width="1280" height="720" data-src="https://www.youtube.com/embed/q0H_heO6eaA?rel=0&amp;showinfo=0&amp;color=white" allowfullscreen class="lazy lazyload"></iframe>
	</div>
</div>

<div class="grid final-grid">
	<div class="col-50">
		<img src="/../img/final/tall1-lq.jpg" data-src="/../img/final/tall1.jpg" alt="Heymat product in use" class="lazy lazyload">
	</div>
	<div class="col-50">
		<img src="/../img/final/tall2-lq.jpg" data-src="/../img/final/tall2.jpg" alt="Heymat product in use" class="lazy lazyload">
	</div>
</div>

<div class="div"></div>

**Secure connections** aren't needed on the entire site, but merely where the user will enter their private data. This is managed through PayPal and DIBS for this particular website, but gave me the opportunity to learn about HTTPS – which I have later implemented on my personal website.

<p class="pull">
	<strong>User logins</strong> are tricky, and completely excludes static sites. We used WordPress for this site, making this easier than building a system from scratch. The users were necessary for dealer-logins and special prices <strong>(user exclusive prices)</strong> for bulk orders. I solved this by redirecting any user not logged in to a login-page, and essentially denying access to any other page unless the user was logged in – all through PHP, which is a language one of my lecturers proposed to me as a project for branching out.
	<span>The second site offers a unique login for resellers, at bulk prices.</span>
</p>

**Payment management** is largely managed through <a href="https://www.woothemes.com/woocommerce/" target="_blank">WooCommerce</a>, but third party gateways like <a href="http://www.dibs.no/" target="_blank">DIBS</a> require a fair amount of customisation. For this, I had to follow specific guidelines for DIBS to green-light our site for their transactions. This was primarily related to showing the correct terms and conditions at the right time, highlighting the preferred logos and offering a secure (HTTPS) connection on checkout.

<p class="pull pull-left">
	Serving a <strong>multilingual site</strong> can be achieved through a number of ways, and our solution was to serve content through a subfolder structure for the second language. Essentially www.heymat.no and www.heymat.no/en/ function as two different sites. This came with their own problems though, as they should share some content like styling and structure, while translating everything else. This also had to be customised to work with <strong>third party payment systems</strong>.
	<span>The multilingual site has yet to be officially released.</span>
</p>

I'd argue that they were the most challenging and time-consuming tasks to complete, primarily because I translated the site from english initially, with little to no regard for a secondary language, carelessly hard-editing code to suit our primary language. This had to be adjusted later on, in order to offer a more flexible language option for our current- and future needs.

We also wanted to offer logged in users the option to **order in bulk** – which is extremely useful for dealers and resellers of Heymat products. This was simply achieved through installing and styling an additional function to WooCommerce, but required additional attention to work with our setup. This was implemented on a secondary site, which had to be password protected.

<div class="div"></div>

<div class="caption mid">
	<div class="contain">
		<img src="/../img/final/heymatw-lq.jpg" data-src="/../img/final/heymatw.jpg" alt="Heymat" class="lazy lazyload">
	</div>
	<span><a href="http://heymat.no/" target="_blank">Heymat.no</a></span>
</div>

<div class="div"></div>

I made two short videos to give you a tour of the secondary site for resellers. <a href="https://www.youtube.com/watch?v=7br_yy62--0" target="_blank">The first one</a> should give you the 60 second rundown, whereas <a href="https://www.youtube.com/watch?v=2pmHa1i8Gig" target="_blank">the second video</a> shows the latest feature developed – as of the time of writing at least.

We launched Heymat early February, in its most basic state; a working web shop with PayPal as the only payment solution. All of the above have been integrated at a later stage, which certainly would have been easier to add initially, but was not requested until later.

<div class="div"></div>

## Projects worth mentioning

If you have seen my <a href="/final/workflow-and-conclusion/" target="_blank">workflow article</a>, you have probably seen several Slack channels for different projects, and I thought it'd be worth mention them here as well, as they dramatically extended the 300 hour estimate for this particular module. They weren't as noteworthy as Heymat, as I merely developed sites inside my comfort-zone, but I believe they are worth highlighting anyway.

**The most recently launched website would be Promethevs**. <a href="http://promethevs.no/" target="_blank">Promethevs</a> is a company on leadership development, with large scale clients from all over the country – from banks to large corporations. The site is based on a template, but essentially <a href="https://www.instagram.com/p/BCiGWQ1MPkx/" target="_blank">designed by us</a>.

The development was fairly straight forward, but they required a few custom tweaks. For instance, the <a href="http://promethevs.no/om-oss" target="_blank">about-page</a> had to display videos in a clever and non obtrusive way. This was achieved through custom JavaScript on this particular page, to show and play a embedded YouTube video for each person on the page. We also developed a way to <a href="http://promethevs.no/nyhetsbrev" target="_blank">show archived newsletters</a> on the site.

**I am currently working on a site for Utværet Lånan**, which may or may not be live now. The site is also hosted on a <a href="http://46.101.94.163/" target="_blank">development server</a>, but this is subject to change so it may not be accessible. The old site (unless we have launched it), can be found at <a href="http://lanan.no" target="_blank">www.lanan.no</a>.

**I also wrote some articles** in my spare time, which we published on our agency website. One of them wanted to teach people how to <a href="http://riktigspor.no/hvordan-google-bedre/" target="_blank">become better at Google</a>, whereas the other one merely wanted to highlight <a href="http://riktigspor.no/administrer-flere-kontoer-pa-instagram/" target="_blank">a new Instagram feature</a>.

I would also like to reference the <a href="/riktigspor#words-from-the-general-manager">feedback</a> received from my work placement, which I still find flattering.

<div class="div"></div>

## General thoughts

I learned a lot over the past three months, and covered the following in one way or another throughout the placement experience:

<ul class="skill-list">
	<li>Search Engine Optimization</li>
	<li>Web development</li>
	<li>Design</li>
	<li>Analytics (Search console, analytics, facebook pixels)</li>
	<li>Marketing</li>
	<li>Web counselling</li>
	<li>Photography</li>
</ul>

<!-- I designed and developed fully functional websites with a backing CMS for clients. I covered product photography for clients, myself and our own agency. I made sites rank number #1 on Google. I managed Facebook pages, Instagram accounts and social media marketing. I tracked everything with modern day tools to offer insight and data-based future advice. And I'm really enjoying it. -->


Through work I am challenged on a daily basis, and I hope to learn as much as I have over the next year as I have over the past three years of university – and hopefully not lose the lust for knowledge.

<div class="div"></div>

<!-- * Thoughts, how did you end up doing this
* Reference email from Paul
* How can I grow and do I want to sit inside my comfort-zone or do I want to be challenged.
* Ecommerce-sites
* Photography

**Add more to this one. Review structure – this is IMPORTANT! Clearly outline what you did and why you did it.** -->