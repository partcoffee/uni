---
layout: page
case: true

title: Portfolio
headline: Portfolio

permalink: /portfolio/
---

{::nomarkdown}
<img src="../img/portfolio/img1.jpg" alt="Portfolio" class="fade wait">
{:/}

<div class="div"></div>

<p class="lead pull"><a href="http://magnusskare.science/uni-website/" target="_blank">Last semester</a> I thought I had a love&ndash;hate relationship with designing things for myself. This semester, I can confirm it, but I can also confirm the importance of "good enough" and releasing a minimum viable product (MVP).<span>In product development, the MVP is the product with the highest return on investment versus risk.</span></p>

I should mention the feedback from my previous two years in order to justify where we stand today. My <a href="https://magnuss.carbonmade.com/" target="_blank">first university portfolio</a> was too brief, with lacking depth and a solid foundation.

My <a href="http://magnusskare.science/uni/" target="_blank">second university portfolio</a> took this into account, but perhaps too eagerly. I believe the exact feedback was "excellent, but impenetrable". Justified, and my fear of seeming too shallow with my work disregarded the end user completely &mdash; and while it did not affect my final mark much, I hope to keep this in mind this time.

<div class="div"></div>

{::nomarkdown}
<img class="browser" src="../img/portfolio/show.png" alt="Current portfolio version">
{:/}

<div class="div"></div>

## Problem & solution

Once again, a portfolio may come across as disjointed when you present a wider range of styles throughout your work. Therefore, I still aim to present a rather blank canvas to work on as a primary solution to this, giving every project the attention it deserves without conflicting styles surrounding it. You should see the <a href="/workflow-and-sketchbook">workflow & sketchbook</a>-section if you're interested in how I work, solve problems and essentially get from A to B.

Echoing my thoughts from last year, I still find typography to be the most important part of the web.

<div class="div"></div>

{::nomarkdown}
<img src="../img/portfolio/img2.png" alt="Proxima Nova typeface" class="entry">
{:/}

<div class="div"></div>

We source our typography from <a href="http://typekit.com" target="_blank">Typekit</a>, using different weights of Proxima Nova to satisfy our needs. It's a popular typeface, ideal for multiple purposes like headings and paragraphs. Proxima Nova is clean, neautral and fit for a purpose where the images seek attention.

The site offers roughly 60-80 characters per line, presenting a comfortable reading experience on most modern devices. I also found it important to not disable zoom or any other default behaviour, as my research on reading-experience may not apply to everybody.

<div class="div"></div>

{::nomarkdown}
<img class="browser" src="../img/portfolio/11.png" alt="Current portfolio version">
{:/}

<div class="div"></div>

## Speed & performance

<p class="pull">I care about performance. In fact, I am writing my dissertation on performance and accessibility. That's why I built this site with Jekyll to avoid database requests completely.<span>Jekyll is a static site generator, and will by nature be faster than PHP-based solutions</span></p>

Jekyll is a static site generator and will serve static HTML-files for the end user. The site is generated locally, so we can still benefit from PHP-like includes for our footer and header &mdash; this means we avoid the pain of writing static HTML over and over again. It also makes updates easier.

Everything else goes without saying, but should be mentioned anyway: asset compression (JS, CSS, HTML), image compression, limit HTTP requests and third party resources. This should leave us within a reasonable performance-budget of 2 second load time on our initial request and >.5 seconds on second load.

<div class="div"></div>

{::nomarkdown}
<img src="../img/portfolio/code.png" alt="Code editor">
{:/}

<div class="div"></div>

## Maintainability & technology

<p class="pull">Without getting too technical, I can mention that the site is not very client-friendly. <a href="http://jekyllrb.com/" target="_blank">Jekyll</a> in itself runs on Ruby, which is installed via Node and NPM. That's already a bit too much for most clients.<span>View the code behind this site on <a href="https://github.com/partcoffee/uni" target="_blank">GitHub</a></span></p>

However, this is not a client website, and the lack of a content management system gives me more control as a developer. All my content is written in Markdown, which is a simple language and saves you hours of work in the long run, compared to writing HTML.

I have made my life easier by listing projects in a data-folder, where a loop can access it and generate our homepage. I still code in <a href="http://sass-lang.com/" target="_blank">Sass</a> to benefit from variables and functions in CSS, but I moved on to <a href="http://gulpjs.com/" target="_blank">Gulp</a> to speed up my workflow. However, GitHub Pages will only support a naked Jekyll build, and thus this site may have been generated with the default generator.

The source-code is <a href="https://github.com/partcoffee/uni" target="_blank">available on GitHub</a>, which will show the raw files I work with. You can also see how the code works in the <a href="https://github.com/partcoffee/uni/blob/master/css/main.scss" target="_blank">main scss-file</a>, which extends to all the <a href="https://github.com/partcoffee/uni/tree/master/_sass" target="_blank">included scss-files</a> and <a href="https://github.com/partcoffee/uni/blob/master/js/main.js" target="_blank">main JavaScript file</a>. If you are a developer, I strongly encourage you to clone to repo or read through it on GitHub. This gives me the option to refer to specific code samples and annotate them accordingly to satisfy the assessment sheet.


<div class="div"></div>

## Alternative approach

<p class="pull">This site was certainly not the plan all along, and I did have several different approaches in mind. I have been experimenting with cover-pages, one-page layouts and similar design propositions to this one. However, subjectively and based on colleague feedback, this seemed to be the best approach to highlight all my work in a structured and efficient manner. The blank canvas should give each project the attention it deserves, while simutanously giving me the freedom to be as brief or as thorough as I have to.<span>The <a href="/workflow-and-sketchbook">workflow & sketchbook</a>-section highlights how I work</span></p>

I have included some different approaches as screenshots, but live examples are available upon request. You can see more examples under <a href="/secondary">secondary work</a>. These are all fully responsive and should function well in all modern browsers.

<div class="div"></div>

{::nomarkdown}
<img src="../img/portfolio/5.png" alt="Previous portfolio version">
<img src="../img/portfolio/6.png" alt="Previous portfolio version">
<!-- <img class="browser" src="../img/portfolio/1.png" alt="Previous portfolio version"> -->
<!-- <img src="../img/portfolio/9.png" alt="Current portfolio version"> -->
{:/}

<div class="div"></div>

## Reflection & conclusion

I hopefully improved upon the <a href="http://magnusskare.science/uni/" target="_blank">previous university portfolio</a> by keeping user experience in mind from the very beginning. By developing a dedicated site for my university projects, I could tailor the site to a very specific group of people &mdash; and as I'm aware of their feedback from previous projects along with the assessment sheet, it was easy to know what to include and what to leave out.

I hope this site is able to reflect the amount of work and effort I have put into this semester.

<div class="div"></div>











