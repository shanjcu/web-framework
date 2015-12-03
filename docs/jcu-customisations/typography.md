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
item in a list.  This is extended to create the [Campus
Stack]({{ site.baseurl }}/jcu-customisations/campus-stack).

{% example html %}
<ul class="list-bordered">
  <li>How do I apply at JCU?</li>
  <li>Where can I get support on campus?</li>
  <li>What is a supplementary exam?</li>
</ul>
{% endexample %}

The border reflects the width of the list block, rather than the content:

{% example html %}
<div class="row">
  <div class="col-xs-4">
    <ul class="list-bordered">
      <li>How do I apply at JCU?</li>
      <li>Where can I get support on campus?</li>
      <li>What is a supplementary exam?</li>
    </ul>
  </div>
</div>
{% endexample %}
