---
layout: docs
title: Overlay
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## About

Overlays are a custom JCU component for colouring and design of
content that's designed to be placed on top of something else.  This may be a
[JCU Card]({{ site.baseurl}}/jcu-customisations/card), a coloured background,
or a situation where you need to distinguish between layers of content.

## Examples

### Standard

Define an overlay with `.jcu-overlay` and colourise with `.jcu-bg--black-75pc`:

<div class="jcu-bg-examples">
  <div class="jcu-overlay jcu-bg--black-75pc">
    <h2>Standard, black, 75% opacity overlay</h2>
    <p>The overlay will expand to fit the contents, since it's just a block element.</p>
  </div>
</div>

{% highlight html %}
<div class="jcu-overlay jcu-bg--black-75pc">
  <h2>Standard, black, 75% opacity overlay</h2>
  <p>The overlay will expand to fit the contents, since it's just a block element.</p>
</div>
{% endhighlight %}

### Transparent

If you'd like an overlay without any background, you can simply omit the
colourisation.

{% callout warning %}
**Heads up!** Take care with accessibility and that colours have sufficient
contrast, especially against multicoloured backgrounds or background images.
{% endcallout %}

<div class="jcu-bg-examples">
  <div class="jcu-overlay">
    <h2>Transparent overlay</h2>
    <p>The overlay will expand to fit the contents, since it's just a block element.</p>
  </div>
</div>

{% highlight html %}
<div class="jcu-overlay">
  <h2>Transparent overlay</h2>
  <p>The overlay will expand to fit the contents, since it's just a block element.</p>
</div>
{% endhighlight %}


### Coloured

Once you have an overlay, then add mix-in classes
accordingly to change the style of overlay or colour and opacity.
For full details about the colour palette, see
[Backgrounds]({{ site.baseurl }}/jcu-customisations/utilities/#backgrounds).

<div class="jcu-bg-examples">
  <div class="jcu-overlay jcu-bg--red-50pc">
    <h2>Red, 50% opacity overlay</h2>
    <p>Use different opacities or colours depending on the background.</p>
  </div>
</div>

{% highlight html %}
<div class="jcu-overlay jcu-bg--red-50pc">
  <h2>Red, 50% opacity overlay</h2>
  <p>Use different opacities or colours depending on the background.</p>
</div>
{% endhighlight %}

### Plain styling

Use the `.jcu-overlay--plain` class as a mix-in to remove the rounded corner and
shrink the padding for a simpler appearance.

<div class="jcu-bg-examples">
  <div class="jcu-overlay jcu-overlay--plain jcu-bg--black-75pc">
    <p>Plain border styled overlay</p>
  </div>
</div>

{% highlight html %}
<div class="jcu-overlay jcu-overlay--plain jcu-bg--black-75pc">
  <p>Plain border styled overlay</p>
</div>
{% endhighlight %}


