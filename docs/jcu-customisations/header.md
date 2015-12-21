---
layout: docs
title: Content
group: jcu-customisations
---

*Header* is a specific JCU component for the display and representation of
the upper portion of a given page or layout.  This is typically centric on
branding, navigation, and titular details.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

{% callout info %}
**Heads up!** The examples are defined using the ARIA role of `banner`. If using
this accessibility role, ensure that your header is including site-oriented
content such as a logo and site-specific search tool.  Consider adjusting the
role if the content in your Header contain page-specific information.
{% endcallout %}

### Standard

Define a *Header* element with `.jcu-header` and add anything you'd like to into
it:

{% example html %}
<div class="container jcu-header" role="banner" aria-labelledby="page-title">
  <div class="row">
    <div class="col-xs-12">
      <h1 class="jcu-header__page-title" id="page-title">ResearchOnline@JCU</h1>
    </div>
  </div>
</div>
{% endexample %}

### Banner

A *banner* style header is primarily utilitarian in that it presents the brand
and clearly identifies the page or site.  On larger displays, the banner will
add a top margin and padding.

This example shows adding a background image for additional context or vibrancy
to a given site or page.

{% example html %}
<div class="container jcu-header jcu-header--banner jcu-bg--blue-fish" role="banner" aria-labelledby="page-title2">
  <div class="row jcu-bg--black-50pc">
    <div class="col-xs-6 text-left">
      <a class="jcu-brand" href="https://www.jcu.edu.au">
        <img class="img-fluid" src="{{ site.baseurl }}/dist/images/jcua-logo-mono-reversed.svg" alt="JCU Australia logo">
      </a>
    </div>
    <div class="col-xs-6 text-right">
      <a href="#"><h1 class="jcu-header__page-title" id="page-title2">Site title</h1></a>
    </div>
  </div>
</div>
{% endexample %}

### Marketing

The *marketing* style header is utilised for content of such a nature - general
information that users would utilise to form their opinion of our brand.

TODO: add details
