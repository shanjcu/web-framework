---
layout: docs
title: Coding Guide
group: jcu-customisations
---

{% callout info %}
**Heads up!** You probably don't need this if you're an application owner or
developer and not part of the Web or Marketing teams. However, you might like to
try and keep your application (especially if it's a custom or in-house one) up
to the standards set by this framework.
{% endcallout %}

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Recommended practices

* Follow the Code Guide for HTML and CSS standards: http://codeguide.co/

* Use http://caniuse.com to determine if a browser feature is widely available
  across user agents.

* All templates must be accessible and pass standards Section 508 and WCAG2AA.

* Name all components with a easily-identifiable and discussable name.  For
  example, the ``Explorer`` component is the main page header menu.

* All custom variables and classes in code should follow Bootstrap's lead
  and use American English (eg ``color`` over ``colour``).  This decision is
  for consistency only when mixing stock and custom variables.  Comments and
  content in pages should follow standard Australian English (``colour``).

* Use only CSS classes for selectors in styling; do not use IDs.  Note that this
  only applies to styling and does not apply JavaScript-based components that
  require IDs for operation.

* Avoid all use of inline styles.  This is a framework and should provide
  reusable classes.

* Follow BEM (Block, Element, Modifier) semantic syntax, where possible.

  * Note that BEM only applies if styling is DOM-dependent (eg heading or list
    is styled *because* it's within another class).

* Internet Explorer's print layouts adhere to the `sm` sized media queries.  In
  order to combat this, ensure print layouts are not affected (or specifically
  excluded in the `@include media-breakpoint-down` queries).

* Consistently name files: [suggestion coming]
