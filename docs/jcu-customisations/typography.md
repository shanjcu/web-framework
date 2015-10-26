---
layout: docs
title: Typography customisations
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

### Bordered List (inside borders)

A border is present between each list item, and not present on the first or last
item in a list.  This is built upon to create the [Campus
Stack]({{ site.url }}/jcu/campus-stack).

{% example html %}
<ul class="list-bordered">
  <li>How do I apply at JCU?</li>
  <li>Where can I get support on campus?</li>
  <li>What is a supplementary exame?</li>
</ul>
{% endexample %}

The border reflects the width of the list block, rather than the content:

{% example html %}
<div class="row">
  <div class="col-xs-4">
    <ul class="list-bordered">
      <li>How do I apply at JCU?</li>
      <li>Where can I get support on campus?</li>
      <li>What is a supplementary exame?</li>
    </ul>
  </div>
</div>
{% endexample %}

### Themes

These are  overarching colour schemes which can be applied to content
on any given page.  These may be expanded to influence other aspects of colour
across a page, but presently encompass just headings.

{% callout info %}
The given classes, such as `.jcu-theme--blue`, can be applied at any level of
your document to influence the content within -- they don't just have be on the
immediate parent container.
{% endcallout %}

{% example html %}
<div class="jcu-theme--blue">
  <h2>Heading h2</h2>
  <h3>Heading h3</h3>
  <h4>Heading h4</h4>
</div>
{% endexample %}

{% example html %}
<div class="jcu-theme--orange">
  <h2>Heading h2</h2>
  <h3>Heading h3</h3>
  <h4>Heading h4</h4>
</div>
{% endexample %}

{% example html %}
<div class="jcu-theme--green">
  <h2>Heading h2</h2>
  <h3>Heading h3</h3>
  <h4>Heading h4</h4>
</div>
{% endexample %}

{% example html %}
<div class="jcu-theme--red">
  <h2>Heading h2</h2>
  <h3>Heading h3</h3>
  <h4>Heading h4</h4>
</div>
{% endexample %}
