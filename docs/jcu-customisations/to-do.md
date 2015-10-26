---
layout: docs
title: To Do
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Known Issues

* dropdown-toggle btn needs to have no border in the search form on courses Page
* No automatically aligned dropdown menus within the viewport (see
  https://github.com/twbs/bootstrap/issues/17167)
* Accordion example in docs uses old v3 Panels (see
  https://github.com/twbs/bootstrap/pull/17159)

## To Do List

* Decide on version numbering to distinguish / relate Bootstrap to the JCU web
  framework

* Store 'approved' brand images and supporting resources in a Git repository
  (ask Digital Media team)

* Build process:

  * Run base templates and CSS styles through WCAG2AAA / Section508 checker or
    linter

  * Accessibility:

    * Ensure ARIA labels and standards are met by *all* examples.
    * Checker/linter: https://github.com/Khan/tota11y or Squiz's accessibility checker for webpages

  * Workflow for converting vectorised content into raster on build (SVG ->
    jpg/png).  This may not be possible given file formats (eg .ai etc)

  * Workflow for removing certain components from the framework.  Perhaps just a
    have a bare-bones "JCU" framework for just the core components.

## To resolve

* Best tool for managing external dependencies (Bower, Grunt, Gulp, Npm...)
* Ensure there's a distinction between an application and the CMS.  Have to
  clearly highlight which application it is in some manner.

* Top-right Search menu direction needs to change
* Decide on colour (not blue) for lead text -- confusing, looks like a link
* Print layout
* Mobile layout
* Accessibility standards
* What type of templates to be constructing:

  * Content page (courses.html)
  * Carousel (carousel.html) -- based on JCU homepage
  * Dashboard (dashboard.html)
  * Cover (cover.html)
  * Application (app.html, similar to Dashboard but with more interactivity

  Just get examples from http://v4-alpha.getbootstrap.com/examples/, which
  aren't compatible with v4 yet.

## Bugs

* abbr double-underline in Firefox: https://github.com/twbs/bootstrap/issues/16574
