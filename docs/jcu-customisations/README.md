# JCU Web Front-end Framework

## Introduction

This is the basis of a common web front-end framework for JCU and its various
web applications. This is a work-in-progress configuration and everything may
change as better tools and processes/workflow are determined.

The end result, when complete is to produce a set of re-usable resources for web
applications and create a fully-documented *Living Style Guide* with examples
of:

* All standard components
* Styles fitting in with JCU's web style
* Customised components
* Third party libraries, if applicable

## Guidelines

* Name all components with a easily-identifiable and discussable name.  For
  example, the ``Explorer`` component is the main page header menu.

* All templates must be accessible and pass standards Section 508 and WCAG2AA.

* Follow Code Guide for HTML and CSS standards: http://codeguide.co/

* All custom variables and classes should follow Bootstrap's lead and use American
  English (eg ``color`` over ``colour``).  This decision is for consistency
  only when mixing stock and custom variables.  Comments and content in pages
  should follow standard Australian English (``colour``).

* Follow BEM (Block, Element, Modifier) semantic syntax, where possible.

  * Note that BEM only applies if styling is DOM-dependent (eg heading or list
    is styled *because* it's within another class).

* Use only CSS classes for selectors in styling; do not use IDs.  Note that this
  only applies to styling and does not apply JavaScript-based components that
  require IDs for operation.

* The Webglyph icon library included here differs slightly from the one provided
  by Squiz.  This involves minor changes to class names for icons (for example:
  ``icon-student-school`` is ``icon-student``), but all icons should be present.

## Editing

### Getting started

* This project uses [EditorConfig](http://editorconfig.org/) to maintain
  consistent styling for indenting and line ending.  Ensure your editor of
  choice is configured with support for EditorConfig; there are many
  [plugins](http://editorconfig.org/#download) available.

### Committing and making changes

* Latest stable version is always located in ``master`` branch
* Development changes take place on the ``develop`` branch
* Features and developments should branch off ``develop``
* Versioning should follow SemVer
* Fixes can be made via pull request from other users to the ``develop`` branch

## Documentation

### Frameworks, tools and libraries

* Bootstrap: http://getbootstrap.com
* Building Bootstrap: http://v4-alpha.getbootstrap.com/getting-started/build-tools/
* Git tutorial: https://www.atlassian.com/git/tutorials/
* Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

### Style guides

* http://www.smashingmagazine.com/2015/04/an-in-depth-overview-of-living-style-guide-tools/
* http://styleguides.io
* https://github.com/davidhund/styleguide-generators
* http://pivotallabs.com/when-should-i-build-a-live-style-guide/
* http://www.designyourway.net/blog/resources/front-end-style-guides-generators/

## Specs

* Squiz uses metadata fields to control background images and colours on pages
  (either via inline styles or via classes associated with the wrapping div
  elements on the page)
* Documentation page inbound after launch in October from Squiz.
