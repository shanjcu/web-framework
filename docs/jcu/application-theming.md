---
layout: docs
title: Application Theming
group: jcu
redirect_from: "/jcu/"
---

Different applications require different approaches to making them consistent
with the rest of the University's online presence.

Completed the theming of an application and want your notes featured here?  Get
in touch!

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Approaches

### Static sites or editable source

If JCU has created the application or otherwise has full control over the
underlying source code (such as Coldfusion apps or the Research Portfolio), then
it's a matter of customising the application to suit.  The general guide is to:

1. Download or clone the source files and host them beside your application.

1. Customise the source of your application to be Bootstrap-compatible.  For
   instance, `<button>` elements would become `<button class="btn">` and so
   forth.

1. Follow the guide you're currently reading until all aspects of your
   application are adjusted or themed accordingly.

To update to a newer version of the JCU Web Framework, replace the framework
files and follow any instructions in the Upgrading documentation.

{% callout info %}
If you're working with static files and trying things locally, note that
Firefox does not allow relative includes for font-face in CSS.  This means
that fonts and iconography is unlikely to load.  See the [relevant
bug](https://bugzilla.mozilla.org/show_bug.cgi?id=760436) for details.

Use `about:config` to change `security.fileuri.strict_origin_policy`
temporarily to `false` to relax this restriction and reload your page.
{% endcallout %}


### Open source

If the application you're working with is open source, then you will be able to
modify its implementation to suit.  Since Bootstrap is a very common web
front-end framework, you will likely find that your application either has
native support for Bootstrap markup or a community-developed theme or templates
available.  The general guide, if Bootstrap is used, is to:

1. Locate how the application is serving its resources.

1. Customise them to feature the JCU web framework instead of stock Bootstrap
   resources.

1. Adjust the application's templates and remaining code to fit the JCU web
   framework; leverage the example templates given.

   Follow the instructions in [Editable source](#editable-source) for
   more information.

### Closed source or vendor-hosted

Refer to your application vendor for details on what customisations are
possible.  In some applications, you may be able to upload templates and
transform the underlying application or consider using a middleware technology
such as XSLT in front of the given application to transform on-the-fly.  In
general, you want to ask your vendor for:

* Technologies being used
* Whether modifying HTML output is possible
* Any templating or theming documentation
* How to serve web resources (CSS, JavaScript, images, fonts)

Once you have these details in hand, you can make a well-informed decision about
the easiest way forward.

In applications where theming options are otherwise limited, you may only be
able customise specific colours, logos, or so forth, rather than underlying HTML
templates.  In this case, use your best judgement to reach a compromise that
looks as close to JCU as possible.

### Using CDN-hosted resources

At this stage, we do not have a CDN system available for theming resources.

It is possible to utilise fonts from [Google
Fonts](https://www.google.com/fonts#UsePlace:use/Collection:Open+Sans), however.
If utlising this over the standard font inclusions, ensure you include all fonts
from `400` to `700`.
