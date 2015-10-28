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
[Dropdowns]({{ site.baseurl }}/components/dropdowns) to achieve various outcomes.

## Examples

### Open on Hover

Add the `.dropdown--open-on-hover` class to any given `.dropdown` element and
its dropdown menu will open on hover rather than click.  This also absolves the
element from needing a ID on the element marked with the ``.dropdown-toggle``
class and from needing to specify any ``data-*`` attributes at all.

{% callout warning %}
Use this sparingly because users expect that they can interact explicitly with
page components, such as dropdowns, rather than having interaction happen
automatically. See [Bootstrap explained:
Dropdowns](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/) for
more information.
{% endcallout %}

Compare the two:

{% example html %}
<div class="btn-group">
  <div class="btn-group">
    <div class="dropdown dropdown--open-on-hover">
      <a class="btn btn-secondary dropdown-toggle" aria-haspopup="true" aria-expanded="false">JCU Campuses (hover)</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Townsville</a>
        <a class="dropdown-item" href="#">Cairns</a>
        <a class="dropdown-item" href="#">Singapore</a>
      </div>
    </div>
  </div>

  <div class="btn-group">
    <div class="dropdown">
      <a class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">JCU Campuses (click)</a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Townsville</a>
        <a class="dropdown-item" href="#">Cairns</a>
        <a class="dropdown-item" href="#">Singapore</a>
      </div>
    </div>
  </div>
</div>
{% endexample %}
