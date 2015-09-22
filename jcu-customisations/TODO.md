# Todo


* Store 'approved' brand images and supporting resources in a Git repository
  (ask Digital Media team)

* Build process:

  * Auto-prefixer

  * Run base templates and CSS styles through WCAG2AAA / Section508 checker or
    linter

  * Workflow for converting vectorised content into raster on build (SVG ->
    jpg/png).  This may not be possible given file formats (eg .ai etc)

  * Workflow for removing certain components from the framework.  Perhaps just a
    have a bare-bones "JCU" framework for just the core components.

  * Accessibility checker/linter:

    * https://github.com/Khan/tota11y

## Decisions

* Best structure for resources
* Best tool for managing external dependencies (Bower, Grunt, Gulp, Npm...)
* Follow results of this discussion:
  https://github.com/twbs/bootstrap/issues/17423

## To resolve

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
