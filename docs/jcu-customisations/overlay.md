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
[JCU Card]({{ site.baseurl}}/jcu/card), a coloured background, anything other situation where you
need to distinguish between layers of content.

## Examples

Define an overlay with `.jcu-overlay` as a class and then modify 
You can use any of the following colours and opacities and mixed them into any
other block elements to provide a coloured semi-transparent background.

<div class="jcu-overlay-examples">
  <div class="jcu-overlay jcu-overlay--red-50pc">
    <h2>Red, 50% opacity overlay</h2>
    <p>Use different opacities or colours depending on the background.</p>
  </div>
</div>

{% highlight html %}
<div class="jcu-overlay jcu-overlay--green-50pc">
  <h2>Green, 50% opacity overlay</h2>
  <p>Use different opacities or colours depending on the background.</p>
</div>
{% endhighlight %}

### Inverting text

Use the `.jcu-overlay--inverse` class to invert the text colour within
difficult-to-read overlays.

<div class="jcu-overlay-examples">
  <div class="jcu-overlay jcu-overlay--white-50pc jcu-overlay--inverse">
    <h2>White, 50% opacity overlay</h2>
    <p>This uses the inverted text colour for readability.</p>
  </div>
</div>

{% highlight html %}
<div class="jcu-overlay jcu-overlay--white-50pc jcu-overlay--inverse">
  <h2>White, 50% opacity overlay</h2>
  <p>This uses the inverted text colour for readability.</p>
</div>
{% endhighlight %}

### Complete palette

<div class="row jcu-overlay-examples">
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--pink-25pc">.jcu-overlay--pink-25pc</div>
    <div class="jcu-overlay jcu-overlay--pink-50pc">.jcu-overlay--pink-50pc</div>
    <div class="jcu-overlay jcu-overlay--pink-75pc">.jcu-overlay--pink-75pc</div>
    <div class="jcu-overlay jcu-overlay--pink-90pc">.jcu-overlay--pink-90pc</div>
    <div class="jcu-overlay jcu-overlay--pink-100pc">.jcu-overlay--pink-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--red-25pc">.jcu-overlay--red-25pc</div>
    <div class="jcu-overlay jcu-overlay--red-50pc">.jcu-overlay--red-50pc</div>
    <div class="jcu-overlay jcu-overlay--red-75pc">.jcu-overlay--red-75pc</div>
    <div class="jcu-overlay jcu-overlay--red-90pc">.jcu-overlay--red-90pc</div>
    <div class="jcu-overlay jcu-overlay--red-100pc">.jcu-overlay--red-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--darkred-25pc">.jcu-overlay--darkred-25pc</div>
    <div class="jcu-overlay jcu-overlay--darkred-50pc">.jcu-overlay--darkred-50pc</div>
    <div class="jcu-overlay jcu-overlay--darkred-75pc">.jcu-overlay--darkred-75pc</div>
    <div class="jcu-overlay jcu-overlay--darkred-90pc">.jcu-overlay--darkred-90pc</div>
    <div class="jcu-overlay jcu-overlay--darkred-100pc">.jcu-overlay--darkred-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--orange-25pc">.jcu-overlay---orange-25pc</div>
    <div class="jcu-overlay jcu-overlay--orange-50pc">.jcu-overlay---orange-50pc</div>
    <div class="jcu-overlay jcu-overlay--orange-75pc">.jcu-overlay---orange-75pc</div>
    <div class="jcu-overlay jcu-overlay--orange-90pc">.jcu-overlay---orange-90pc</div>
    <div class="jcu-overlay jcu-overlay--orange-100pc">.jcu-overlay---orange-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--yellow-25pc">.jcu-overlay---yellow-25pc</div>
    <div class="jcu-overlay jcu-overlay--yellow-50pc">.jcu-overlay--yellow-50pc</div>
    <div class="jcu-overlay jcu-overlay--yellow-75pc">.jcu-overlay--yellow-75pc</div>
    <div class="jcu-overlay jcu-overlay--yellow-90pc">.jcu-overlay--yellow-90pc</div>
    <div class="jcu-overlay jcu-overlay--yellow-100pc">.jcu-overlay--yellow-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--lightgreen-25pc">.jcu-overlay--lightgreen-25pc</div>
    <div class="jcu-overlay jcu-overlay--lightgreen-50pc">.jcu-overlay--lightgreen-50pc</div>
    <div class="jcu-overlay jcu-overlay--lightgreen-75pc">.jcu-overlay--lightgreen-75pc</div>
    <div class="jcu-overlay jcu-overlay--lightgreen-90pc">.jcu-overlay--lightgreen-90pc</div>
    <div class="jcu-overlay jcu-overlay--lightgreen-100pc">.jcu-overlay--lightgreen-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--green-25pc">.jcu-overlay--green-25pc</div>
    <div class="jcu-overlay jcu-overlay--green-50pc">.jcu-overlay--green-50pc</div>
    <div class="jcu-overlay jcu-overlay--green-75pc">.jcu-overlay--green-75pc</div>
    <div class="jcu-overlay jcu-overlay--green-90pc">.jcu-overlay--green-90pc</div>
    <div class="jcu-overlay jcu-overlay--green-100pc">.jcu-overlay--green-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--lightblue-25pc">.jcu-overlay--lightblue-25pc</div>
    <div class="jcu-overlay jcu-overlay--lightblue-50pc">.jcu-overlay--lightblue-50pc</div>
    <div class="jcu-overlay jcu-overlay--lightblue-75pc">.jcu-overlay--lightblue-75pc</div>
    <div class="jcu-overlay jcu-overlay--lightblue-90pc">.jcu-overlay--lightblue-90pc</div>
    <div class="jcu-overlay jcu-overlay--lightblue-100pc">.jcu-overlay--lightblue-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--blue-25pc">.jcu-overlay--blue-25pc</div>
    <div class="jcu-overlay jcu-overlay--blue-50pc">.jcu-overlay--blue-50pc</div>
    <div class="jcu-overlay jcu-overlay--blue-75pc">.jcu-overlay--blue-75pc</div>
    <div class="jcu-overlay jcu-overlay--blue-90pc">.jcu-overlay--blue-90pc</div>
    <div class="jcu-overlay jcu-overlay--blue-100pc">.jcu-overlay--blue-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--darkblue-25pc">.jcu-overlay--darkblue-25pc</div>
    <div class="jcu-overlay jcu-overlay--darkblue-50pc">.jcu-overlay--darkblue-50pc</div>
    <div class="jcu-overlay jcu-overlay--darkblue-75pc">.jcu-overlay--darkblue-75pc</div>
    <div class="jcu-overlay jcu-overlay--darkblue-90pc">.jcu-overlay--darkblue-90pc</div>
    <div class="jcu-overlay jcu-overlay--darkblue-100pc">.jcu-overlay--darkblue-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--black-25pc">.jcu-overlay--black-25pc</div>
    <div class="jcu-overlay jcu-overlay--black-50pc">.jcu-overlay--black-50pc</div>
    <div class="jcu-overlay jcu-overlay--black-75pc">.jcu-overlay--black-75pc</div>
    <div class="jcu-overlay jcu-overlay--black-90pc">.jcu-overlay--black-90pc</div>
    <div class="jcu-overlay jcu-overlay--black-100pc">.jcu-overlay--black-100pc</div>
  </div>
  <div class="col-xs-3">
    <div class="jcu-overlay jcu-overlay--white-25pc">.jcu-overlay--white-25pc</div>
    <div class="jcu-overlay jcu-overlay--white-50pc">.jcu-overlay--white-50pc</div>
    <div class="jcu-overlay jcu-overlay--white-75pc jcu-overlay--inverse">.jcu-overlay--white-75pc</div>
    <div class="jcu-overlay jcu-overlay--white-90pc jcu-overlay--inverse">.jcu-overlay--white-90pc</div>
    <div class="jcu-overlay jcu-overlay--white-100pc jcu-overlay--inverse">.jcu-overlay--white-100pc</div>
  </div>
</div>


### Gradients

{% callout info %}
If you want just the gradient as a background on a non-overlay element, simply
use the modifier class on its own, for example `.jcu-overlay--gradient-blue` and
omit the `.jcu-overlay` class.  This will likely be cleaned up and refactored at
some point.
{% endcallout %}

{% example html %}
<div class="jcu-overlay jcu-overlay--gradient-blue">.jcu-overlay--gradient-blue</div>
<div class="jcu-overlay jcu-overlay--gradient-blue-reverse">.jcu-overlay--gradient-blue-reverse</div>
<div class="jcu-overlay jcu-overlay--gradient-orange">.jcu-overlay--gradient-orange</div>
<div class="jcu-overlay jcu-overlay--gradient-orange-reverse">.jcu-overlay--gradient-orange-reverse</div>
<div class="jcu-overlay jcu-overlay--gradient-green">.jcu-overlay--gradient-green</div>
<div class="jcu-overlay jcu-overlay--gradient-green-reverse">.jcu-overlay--gradient-green-reverse</div>
<div class="jcu-overlay jcu-overlay--gradient-red">.jcu-overlay--gradient-red</div>
<div class="jcu-overlay jcu-overlay--gradient-red-reverse">.jcu-overlay--gradient-red-reverse</div>
{% endexample %}


