---
layout: docs
title: Card
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## About

Overlay Cards are customised Bootstrap Cards with specialised styling and
animation.  They rely upon [Overlay](./overlay.md), another JCU component, for
colouring and design of short content that's placed on top of something else
(typically an image).

Refer to [Card](../components/card.md) from Bootstrap's core for full
documentation about these and other aspects to Cards.

## Examples

The `.jcu-overlay-card` modifier adjusts positioning and adds transition
effects, as the examples show. The `.jcu-overlay` classes, sourced from
[Overlay](./overlay.md), style and colourise just the overlay inside the cards.

{% callout warning %}
**Heads up!** Any images placed within a `.card` must be configured to be
responsive via `.img-fluid` or else it will overflow outside if too wide for the
card.  This is especially important because card widths may be inherited from
their parent container (such as a column) and thus may be different sizes on
different devices.
{% endcallout %}

{% example html %}
<div class="card jcu-overlay-card">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Test">
    <div class="card-img-overlay jcu-overlay">
      <div class="card-title">Card, default</div>
      <div class="card-subtitle">Black, 60% opacity</div>
    </div>
  </a>
</div>
{% endexample %}

{% example html %}
<div class="card jcu-overlay-card">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Test">
    <div class="card-img-overlay jcu-overlay jcu-overlay--red-25pc">
      <div class="card-title">Red, 25% opacity, subtitle</div>
      <div class="card-subtitle">Subtitle</div>
    </div>
  </a>
</div>
{% endexample %}

{% example html %}
<div class="card jcu-overlay-card">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Test">
    <div class="card-img-overlay jcu-overlay jcu-overlay--green-75pc">
      <div class="card-title">Green, 75% opacity, no subtitle</div>
    </div>
  </a>
</div>
{% endexample %}
