---
layout: docs
title: Introduction
group: jcu-customisations
redirect_from: "/jcu-customisations/"
---

This is the common web front-end framework for James Cook University and is used
by the University's various web applications.  The JCU Web Framework utilises
[Bootstrap](http://getbootstrap.com), a very popular framework for building
responsive, mobile-first sites and applications.

This a set of reusable resources for web applications and a fully-documented
*living style guide* which aims to provide the simplest starting point for any
new and existing JCU-themed projects on the web.  The documentation features
worked examples of the following:

* All Bootstrap standard components
* Demonstrations of styles fitting in with JCU's branding guides
* Customised components
* Third party libraries (iconography, fonts)

This is a work-in-progress configuration and things may change as better tools
and processes/workflow are determined.  No two web applications or products are
the same and how an application owner or vendor themes their app will almost
always vary.  Bootstrap was selected as the framework as its ubiquitous nature
means that software products and vendors likely already have a theming story
involving Bootstrap, if they don't already use Bootstrap by default.

Here's how to quickly get started with the assets and a template starter page.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Quick start

In this quick start, we'll focus on the fundamentals of including the assets in
a static HTML page.  

1. Download the source files zip, take note of the version used.

1. Unzip the files.

1. Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

{% highlight html %}
<link rel="stylesheet" href="./jcu-web-framework/dist/css/jcu.css">
{% endhighlight %}

Add the JavaScript plugins and jQuery near the end of your pages, right before
the closing `</body>` tag. Be sure to place jQuery first as Bootstrap code
depends on it.

{% highlight html %}
<script src="./jcu-web-framework/dist/js/vendor/jquery.min.js"></script>
<script src="./jcu-web-framework/dist/js/bootstrap.min.js"></script>
{% endhighlight %}

And that's it — you're on your way to a fully Bootstrapped site. If you're at
all unsure about the general page structure, HTML5 doctype, or how to make your
application responsive, see the main [Bootstrap
Introduction](../../getting-started/introduction) for more details.

Your application is likely far more complicated, by the fundamentals remain the
same -- you need to serve CSS/JavaScript/images and link these into your pages.
For more theming strategies, see [Application Theming](../application-theming).
