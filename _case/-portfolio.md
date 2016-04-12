---
layout: page
case: true
final: true

title: Online Portfolio
headline: Online Portfolio

permalink: /final/online-portfolio/
---

{::nomarkdown}
<div class="caption mid">
	<div class="contain">
		<img src="/../img/final/screen-lq.png" data-src="/../img/final/screen.png" alt="My university portfolio" class="fade wait lazy lazyload">
	</div>
	<span>Inspired by newspapers and magazines. Photo: Mockup</span>
</div>
{:/}

<div class="div"></div>

<p class="lead pull">If you're feeling a sense of déjà vu, that's understandable as this portfolio was built with my previous portfolio as a foundation and framework – it's like the "S" version of Apple products, which brings more changes under the hood than visually.<span>Built for performance and a very specific audience.</span></p>

Subjectively speaking, my <a href="/">previous portfolio</a> managed to get a lot of things right – primarily the dedicated canvas for each project and how said canvas was laid out. I believe the relationship between copy and images and photos hit the sweet spot for my case studies.

However, it was lacking in other areas, focusing too much on being a "beautiful website" than a portfolio – resulting in a somewhat abstract form of communcation of my work – that, along with web performance is where I wish to improve.

<div class="div"></div>

## Analysing feedback

My portfolio work is largely based on tutor feedback, and my previous portfolio was based on the feedback from its predecessor – which in return was based on the feedback from the portfolio before that, and so on. So in order to establish a solid foundation, I initially went back to my <a target="_blank" href="/reflection/#portfolio-reflections">reflecting thoughts</a> from December. From this I concluded that the site was technically where it should be, but with minor improvements to be evaluated.

Secondly, the tutor feedback was crucial for me to improve. I made a short video to review that feedback, and to establish a plan of action from that:

<div class="div"></div>

<div class="caption mid">
	<div class="contain">
		<div class="article-video fade wait" id="video">
			<iframe width="1280" height="720" data-src="https://www.youtube.com/embed/m_Pn-1HegHI?rel=0&amp;showinfo=0&amp;color=white" allowfullscreen class="lazy lazyload"></iframe>
		</div>
	</div>
	<span>Short version: Make the process from A to B clear, annotate images and offer more insight to how you work.</span>
</div>

<div class="div"></div>

## The only thing that’s changed is…

I'm getting flashbacks to the <a href="https://www.youtube.com/watch?v=aBYWGjIzvyw" target="_blank">iPhone 6S release</a> when I ask myself what I changed, because visually, reading this, it's quite similar, but there has been a lot of improvements under the hood, and a lot has changed in the web industry over the past three months. Let's break it down.

**With the iOS 9.3 release**, <a href="https://github.com/ftlabs/fastclick" target="_blank">FastClick</a> was no longer needed. Our primary reason for keeping this library was to eliminate the 300ms delay response-times on touch-events in iOS Safari. The update removed this delay, as long as a specific meta-tag (which we already have) was present, saving us 10kb of JavaScript.

**A new homepage** to outline projects was added to offer a clear divide between my first and second semester. This came with a new set of colours as well and a logo for my final semester.

<p class="pull"><strong>In order to improve</strong> initial load times and mobile performance, <a target="_blank" href="https://www.youtube.com/watch?v=4oInLchLMLs">lazy loading</a> has been applied to certain images and videos. By default, a browser will load everything in the document as soon as it can. This is the expected behaviour and usually what we want. However, by injecting images through JavaScript we can delay the download until it's necessary or until the user has scrolled the image into view.<span>Loading images this way is excellent for performance.</span></p>

**Typographical** changes came with version 2.0 of this site, altering headlines and specific parts of the body text for a stronger identity – along with slight colour tweaks.

<div class="div"></div>

<div class="caption mid">
	<div class="contain black">
		<img src="/../img/final/apple-lq.jpg" data-src="/../img/final/apple.jpg" alt="iPhone 6S launch" class="lazy lazyload">
	</div>
	<span>Still from the "The only thing that’s changed is…" ad from Apple. Photo: Apple</span>
</div>

<div class="div"></div>

## Reviewing code

I want to start with the code. Our primary JavaScript file is no longer using FastClick, as mentioned above, and brings lazy loading to the site to further reduce our initial page weight. The CSS remains largely unchanged apart from the <a href="/final">new homepage</a>, where I've included conditional styles and improved upon our existing ones.

The lazy-loading technique is worth diving into, as the approach is quite clever. For this site, we will initially load a small image, which is blurred and scaled up. The small image is typically 2-4kb, and shows the initial structure and colours. The larger image is then injected through JavaScript and the blur is animated and removed. The final product should look something like the video below, and is essentially replacing a <a href="/../img/final/screen-lq.jpg" target="_blank">tiny image</a> with a <a href="/../img/final/screen.jpg" target="_blank">large image</a> – making the site faster for everyone, and significantly reducing data-costs for casual visitors.

YouTube videos are loaded in a similar way, but without a tiny placeholder-image initially. We added a container around the video and certain images at 100% width and a 16:9 aspect ratio – this takes up as much space as the image/video would, and saves us from content jumping around on the page as it loads from 0% height to 100%, as the height and width is already there.

<div class="div"></div>

<div class="caption mid">
	<div class="contain black">
		<div class="article-video fade wait" id="video">
			<iframe width="1280" height="720" data-src="https://www.youtube.com/embed/4oInLchLMLs?rel=0&amp;showinfo=0&amp;color=white" allowfullscreen class="lazy lazyload"></iframe>
		</div>
	</div>
	<span>Early implementation of the "blur-up" technique.</span>
</div>

<div class="div"></div>

The site is still powered by Jekyll and compiled locally before being pushed to a live server. This is so we don't have to compress our assets on the fly, but rather do all the hard lifting ourselves – so the server don't have to. This should give us the same performance budget as before, but with lazy loading, I expect articles to load a fair amount quicker. I also paid close attention to clean and semantic markup, allowing for a great experience for users who prefer <a href="https://support.apple.com/kb/PH21467?locale=en_US" target="_blank">Safari Reader</a>.

On the topic of maintainability and technology, I would like to refer you to what I have <a href="/portfolio/#maintainability--technology">already covered</a> to avoid too much repetition. The noteworthy change would be how I handle projects now. The end of my second semester will be the end of this website – or it's purpose, and as I do not intend to scale it any further, the <a href="/final">new homepage</a> is largely tailored with little care for scalability. This is intentional, but something I could have improved given more time or intentions of further developing the site.

<div class="div"></div>

## Designing 2.0

<p class="pull">You have probably noticed this already, but the new site is rocking a new logo. This is not a personal logo, but a logo to illustrate the path I have taken through university; adventurous, yet heading into a clear and very particular direction. Typographically speaking, Proxima Nova has served us well for our main body text, and while it did a great job of headlining paragraphs, a slight change should help it be more distinct. We are now using Neuzeit Grotesk for headlines.<span>Typography from <a href="http://typekit.com" target="_blank">Adobe Typekit</a>.</span></p>

<p class="pull pull-left">
	I'm inspired by magazines, printed work, and the kind with breathtaking photography and powerful stories – elegantly presented with no distracting elements. I've looked at <a href="http://www.kinfolk.com/" target="_blank">Kinfolk</a>, <a href="http://www.aftenposten.no/" target="_blank">Aftenposten</a>, <a href="http://www.minimallyminimal.com/" target="_blank">Minimally Minimal</a>, <a href="https://monocle.com/" target="_blank">Monocole</a>, <a href="http://www.muji.com/" target="_blank">MUJI</a>, <a href="http://readcereal.com/" target="_blank">Cereal</a>, and countless interior/lifestyle magazines for inspiration. They all offer something unique to them, but without distractions – and that was the kind of new homepage I wanted to offer.
	<span>I could easily see the new homepage as a page in your daily interior magazine.</span>
</p>

<div class="div"></div>

<div class="caption mid">
	<div class="contain">
		<img src="/../img/final/size-lq.png" data-src="/../img/final/size.png" alt="Responsive view of this site." class="lazy lazyload">
	</div>
	<span>View this on <a href="http://design.google.com/resizer/#url=http%3A%2F%2Funi.magnusskare.com%2Ffinal%2F" target="_blank">Google Resizer</a>.</span>
</div>

<div class="div"></div>

## Alternative approaches

I had several different approaches in mind, and for a while I wanted to show how I work in WordPress by developing my personal portfolio for it. However, with speed in mind and the control I expected from each page, it seemed like too ineffecient for my use case.

I also experimented with different layouts, most notably a layout similar to my <a href="/experience" target="_blank">University Experience</a> microsite – which should serve as another concept as well, but never made it far. However, I still wanted my content to be king, and thus embraced a simpler approach – correcting it according to the feedback received.

In terms of layout, the new front page became troublesome with too many projects in a split 50/50 layout – as I had little control over how "long" each section would be. What looked great on a desktop layout, came across as odd on tablets and large phones, and vica versa. <a href="https://youtu.be/fTWdSSj4Oc0" target="_blank">This video</a> should illustrate what I mean. Finding projects all the way down the page became tedious, so my solution was to list the projects in the text instead, using a single image – like a magazine or newspaper. This makes the projects accessible straight away, while the image sets the mood.

<div class="div"></div>

<div class="contain">
	<img src="/../img/final/headersc-lq.png" data-src="/../img/final/headersc.png" alt="Magazine" class="lazy lazyload">
</div>

<div class="div"></div>

## Codebase and budget

I had a goal of improving the performance of my case studies. The previous site had a <a href="http://www.webpagetest.org/result/151210_F2_2ZM/" target="_blank">excellent performing front-page</a>, but the <a href="http://www.webpagetest.org/result/160403_0Y_NP/" target="_blank">worst performing article</a> spent over 20 seconds loading! Granted, the article in question was extremely image-heavy, so a more just comparison would be the old portfolio article and the new one: <a href="http://www.webpagetest.org/result/160403_G4_KE/" target="_blank">performance of the S1 article</a> versus <a href="http://www.webpagetest.org/result/160403_R2_103/" target="_blank">performance of the S2 article</a>.

From this we can clearly see the benefits of lazy-loading, as the site is initially loading almost a second (0.946s) faster even though our main CSS and JavaScript files are bigger. Our repeat view suffers as the JavaScript will still have to replace the low-res image, even though it's cached, but our CSS animations help even this out – making the additional 5th of a second hard to notice.

We should ideally stay within 1.5 seconds for articles, but I think a reasonable budget would be ~2 seconds. This is not always possible, especially for longer articles, but it's a goal worth aiming for. I've also implemented a fading animation between pages, which should give the illusion of almost instant page-loads – the same principle is used by Apple for animating the opening and closing of applications on their iOS devices. Ideally, you should never feel like you are waiting for a page to load.

The site is available on <a href="https://github.com/partcoffee/uni" target="_blank">GitHub</a>, and I'd pay close attention to the <a href="https://github.com/partcoffee/uni/commits/master" target="_blank">latest commits</a>, as it should clearly highlight changes in files. I would also disregard the changes in the _site folder, as it is minified and probably not readable. Everything else, however, is worth inspecting.

<div class="div"></div>

## Closing thoughts

I'm very pleased with the final outcome, and I believe it represents a fair portion of what I'm currently able to do with web technologies. I had fun making it and I believe it is able to show the vast majority of the work I have completed this semester, in a reflective and clear manner.

If I were to continue this project, I would probably adopt a better naming convention for my styles, and if it should ever receive a broader audience than my lecturers, I would have to adapt to that as well.

<div class="div"></div>