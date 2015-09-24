---
layout: docs
title: Styling for JCU
group: jcu-customisations
---

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Where from?

The styles in this web front-end framework are a mixture of those provided by
the Squiz CMS and Bootstrap's original designs.  This documentation, forked from
the original Bootstrap project, illustrates all available styles for use within
a project at JCU.

## Inclusions

* Webhostinghub-Glyphs
* OpenSans font
* jQuery

## Extending or reusing

For projects with extra requirements, this framework can be extended in the same
way that Bootstrap itself can.  The original base SASS files can be included in
an extension project and customised further.

Given the complexity and variations between applications, especially those that
are vendor-supplied, we expect that all projects will require some degree of
customisation.  If you have suggestions for customisations that should feature
as part of this core 

## Decisions and theory

* Squiz uses its CMS metadata fields to control background images and colours on
  pages.  These then are translated into either inline styles on a rendered page.
  From a structural point-of-view, this isn't a sustainable practice, as styles
  aren't centrally controlled.  In order to simplify this, all repeatable
  aspects, such as Overlays, are defined in the main style sheet files.  This
  makes for consistency across all systems using the framework, and eliminates a
  potential maintenance burden from application owners.

* Squiz will be delivering a documentation page covering all its various styles
  and components after the launch in October.

