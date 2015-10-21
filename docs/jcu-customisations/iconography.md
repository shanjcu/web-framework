---
layout: docs
title: Iconography
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## About

Iconography is provided care of the [WebHostingHub
Glyphs](http://www.webhostinghub.com/glyphs/) and full details can be found on
their official documentation.

## Examples

{% callout warning %}
**Heads up!** There are some minor differences in naming, such as
`.icon-emailalt`, which you can access as `.icon-email2` in the version JCU is
using on its CMS website. See the
[webhostinghub-glyphs.css](https://github.com/gustavohenke/webhostinghub-glyphs/blob/master/css/webhostinghub-glyphs.css)
file for the correct names.  All icons will be present in each; it's just a case
of determining the correct class name to use.

You may need to consult the source of the [SVG
font](https://raw.githubusercontent.com/whhglyphs/webhostinghub-glyphs/master/WebHostingHub-Glyphs.svg)
(1MB+ download) in order to locate the correct class name.
{% endcallout %}



Icons should be specified using a `<span>` element, in the manner shown.  Other
examples in some documentation may use an `<i>` element but JCU systems should
use `<span>` where possible for consistency and accessibility (some testers show
screen readers interpret the latter as readable).

### Decorative

Icons that are purely decorative and add no meaning can be hidden from
accessibility devices.

{% example html %}
<span class="icon-asterisk" aria-hidden="true"></span>
<span class="icon-plus" aria-hidden="true"></span>
<span class="icon-cloud" aria-hidden="true"></span>
<span class="icon-edit" aria-hidden="true"></span>
<span class="icon-wineglass" aria-hidden="true"></span>
<span class="icon-grid" aria-hidden="true"></span>
{% endexample %}

### Semantic

Icons that convey some sort of meaning on the page should be labelled
accordingly.  Think of `aria-label` like `title` or `alt` for `img` tags.

In this example, the icons are being used in place of the name of the social
media service and need to be labelled to aid accessibility.

{% example html %}
<a href="http://fb.me/jamescookuniversity"><span class="icon-circlefacebook" aria-label="Facebook icon"></span></a>
<a href="https://twitter.com/jcu"><span class="icon-circletwitter" aria-label="Twitter icon"></span></a>
<a href="https://www.youtube.com/user/jamescookuniversity"><span class="icon-youtube" aria-label="YouTube icon"></span></a>
{% endexample %}
