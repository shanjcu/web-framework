---
layout: docs
title: Themes
group: jcu
---

*Themes* are overarching colour schemes which can be applied to content on sites
or pages.  Themes currently only apply to headings, but may be expanded to
influence other aspects of colour across a page at a later time.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Examples

{% callout info %}
The given classes, such as `.jcu-theme--blue`, can be applied at any level of
your document to influence the styling contents.  If you experience issues with
specificity, you can apply (or re-apply the class) at a more specific element on
your page.
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
