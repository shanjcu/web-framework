---
layout: docs
title: Dropdowns
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## About

These are minor customisations that can be applied to Bootstrap's
[Dropdowns](../../components/dropdowns) to achieve various outcomes.

## Examples

### Open on Hover

Add the `.dropdown--open-on-hover` class to any given `.dropdown` element and
its dropdown menu will open on hover rather than click.  This also absolves the
element from needing a ID on the element marked with the ``.dropdown-toggle``
class and from needing to specify any ``data-*`` attributes at all.

{% callout warning %}
Use this sparingly because users tend to expect that they can click on things
and menus won't shoot out everywhere as they move their cursor across a page.
(Citation needed)
{% endcallout %}

Compare the two:

{% example html %}
<div class="dropdown dropdown--open-on-hover">
  <a class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">JCU Campuses</a>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Townsville</a>
    <a class="dropdown-item" href="#">Cairns</a>
    <a class="dropdown-item" href="#">Singapore</a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">JCU Campuses</a>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Townsville</a>
    <a class="dropdown-item" href="#">Cairns</a>
    <a class="dropdown-item" href="#">Singapore</a>
  </div>
</div>
{% endexample %}
