---
layout: docs
title: Application Theming
group: jcu-customisations
redirect_from: "/jcu-customisations/"
---

Different applications require different approaches to making them consistent
with the rest of the University's online presence.

Completed the theming of an application and want your notes featured here?  Get
in touch!

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Approaches

### Editable source

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
such as XSLT in front of the given application to transform on-the-fly.

In applications where theming options are otherwise limited, you may only be
able customise specific colours, logos, or so forth, rather than underlying HTML
templates.  In this case, use your best judgement to reach a compromise that
looks as close to JCU as possible.
