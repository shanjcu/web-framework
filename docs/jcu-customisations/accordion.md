---
layout: docs
title: Accordion
group: jcu-customisations
---

This is a customisation of the standard Bootstrap
[Collapse]({{ site.baseurl }}/components/collapse) component from its core, integrating
brand-specific colours and animations.  Refer to the main documentation for full
documentation and other types of collapsibles.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Example

{% example html %}
<div class="jcu-accordion" role="tablist" aria-multiselectable="true">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <a role="button" data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Heading
      </a>
    </div>
    <div id="collapseOne" class="collapse in" role="tabpanel" aria-labelledby="headingOne">
      <div class="card-block">
        Some text
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <a role="button" class="collapsed" data-toggle="collapse"  href="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
        Heading2
      </a>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
      <div class="card-block">
        Some text
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <a role="button" class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Heading3
      </a>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree">
      <div class="card-block">
        Some text
      </div>
    </div>
  </div>
</div>
{% endexample %}
