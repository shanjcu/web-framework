---
layout: docs
title: Card
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Overlay Cards

Overlay Cards are customised Bootstrap Cards with specialised styling and
animation.  They rely upon [Overlay](
{{ site.baseurl }}/jcu-customisations/overlay), another JCU component, for
colouring and design of short content that's placed on top of something else
(typically an image).

Refer to [Card]({{ site.baseurl }}/components/card) from Bootstrap's core for full
documentation about these and other aspects to Cards.

### Examples

The `.jcu-overlay-card` modifier adjusts positioning and adds transition
effects, as the examples show. The `.jcu-overlay` classes, sourced from
[Overlay]({{ site.baseurl }}/jcu-customisations/overlay), style and colourise
just the overlay inside the cards.

{% callout info %}
**Heads up!** Examples are shown with suitable accessibility markup in
accordance with ARIA. Ensure you adjust `aria-labelledby` and `id` attributes to
make your HTML both valid and fully accessible.
{% endcallout %}

{% callout warning %}
**Heads up!** Any images placed within a `.card` must be configured to be
responsive via `.img-fluid` or else it will overflow outside if too wide for the
card.  This is especially important because card widths may be inherited from
their parent container (such as a column) and thus may be different sizes on
different devices.
{% endcallout %}

{% example html %}
<div class="card jcu-overlay-card" role="link" aria-labelledby="example-card__title" aria-describedby="example-card__subtitle">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Stingray on ocean floor">
    <div class="card-img-overlay jcu-overlay">
      <div class="card-title" id="example-card__title">Card, default</div>
      <div class="card-subtitle" id="example-card__subtitle">Transparent</div>
    </div>
  </a>
</div>
{% endexample %}

{% example html %}
<div class="card jcu-overlay-card" role="link" aria-labelledby="example-card2__title" aria-describedby="example-card2__subtitle">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Stingray on ocean floor">
    <div class="card-img-overlay jcu-overlay jcu-bg--black-75pc">
      <div class="card-title" id="example-card2__title">Black, 75% opacity, subtitle</div>
      <div class="card-subtitle" id="example-card2__subtitle">Subtitle</div>
    </div>
  </a>
</div>
{% endexample %}

{% example html %}
<div class="card jcu-overlay-card" role="link" aria-labelledby="example-card3__title" aria-describedby="example-card3__subtitle">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Stingray on ocean floor">
    <div class="card-img-overlay jcu-overlay jcu-bg--red-25pc">
      <div class="card-title" id="example-card3__title">Red, 25% opacity, subtitle</div>
      <div class="card-subtitle" id="example-card3__subtitle">Subtitle</div>
    </div>
  </a>
</div>
{% endexample %}

{% example html %}
<div class="card jcu-overlay-card" role="link" aria-labelledby="example-card4__title">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Stingray on ocean floor">
    <div class="card-img-overlay jcu-overlay jcu-bg--green-75pc">
      <div class="card-title" id="example-card4__title">Green, 75% opacity, no subtitle</div>
    </div>
  </a>
</div>
{% endexample %}

It's also possible to display an *empty* card with just the overlay. Select a
suitable background colour using the [backgrounds utilities](
{{ site.baseurl }}/components/utilities/#contextual-colors-and-backgrounds).

{% example html %}
<div class="card jcu-overlay-card bg-inverse" role="link" aria-labelledby="example-card5__title" aria-describedby="example-card5__subtitle">
  <a href="https://jcu.edu.au">
    <div class="card-img-overlay jcu-overlay jcu-bg--white-25pc">
      <div class="card-title" id="example-card5__title">White, 25% opacity, subtitle</div>
      <div class="card-subtitle" id="example-card5__subtitle">This is a short, optional subtitle.</div>
    </div>
  </a>
</div>
{% endexample %}

## 'Fixed' variation

By using the `.jcu-overlay-card--fixed` modifier together with an Overlay Card,
any animations and interactivity with the card are suppressed.

{% example html %}
<div class="card jcu-overlay-card jcu-overlay-card--fixed" role="link" aria-labelledby="example-card6__title" aria-describedby="example-card6__subtitle">
  <a href="https://jcu.edu.au">
    <img class="card-img img-fluid" src="../images/card.jpg" alt="Stingray on ocean floor">
    <div class="card-img-overlay jcu-overlay jcu-bg--plain-border">
      <div class="card-title" id="example-card6__title">Fixed overlay, no animation</div>
      <div class="card-subtitle" id="example-card6__subtitle">This is a short, optional subtitle.</div>
    </div>
  </a>
</div>
{% endexample %}

## Sizes

Card sizing is dictated by the image or other background content that you place
inside the card and the container in which the card is placed, such as the
grid or layout system.  For empty cards, such as those with just a plain
background colour, you get a default minimum height and for larger sizes,
specify an inline style for `min-height`.

{% example html %}
<div class="card jcu-overlay-card bg-primary" role="link" aria-labelledby="example-card7__title">
  <a href="https://jcu.edu.au">
    <div class="card-img-overlay jcu-overlay jcu-bg--yellow-50pc">
      <div class="card-title" id="example-card7__title">Yellow, 50% opacity, standard height</div>
    </div>
  </a>
</div>

<div class="card jcu-overlay-card bg-success" style="min-height: 10rem;" role="link" aria-labelledby="example-card8__title">
  <a href="https://jcu.edu.au">
    <div class="card-img-overlay jcu-overlay jcu-bg--blue-90pc">
      <div class="card-title" id="example-card8__title">Blue, 90% opacity; 10rem min-height</div>
    </div>
  </a>
</div>
{% endexample %}
