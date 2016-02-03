---
layout: docs
title: Download
group: jcu
---

The framework can be deployed to systems in a number of different ways depending
on the type of application.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Release packages

<a class="btn btn-outline-primary" href="{{ site.download.dist }}">Download
latest release</a>
<a class="btn btn-outline-primary" href="{{ site.download.releases }}">See all
versions</a>

Releases are simply fully compiled zip archives, containing all the necessary
files and resources to implement the JCU Web Framework in your project.  This is
best suited for:

* Static web pages
* Small to medium sites
* Systems without Git available
* Developers unfamiliar with Git

To apply to your site or system, see the
[Quick Start]({{ site.baseurl }}/jcu/introduction/#quick-start) documentation.

To update to a new version of the framework, remove the old version and unzip
the new version in the same area.  Check the [Migration]({{ site.baseurl
}}/migration/) notes first regarding what has changed and how your system needs to
adapt.  As with all systems, ensure you have backups and test in a development
environment first.

## From Git

### Releases from Git

<a class="btn btn-outline-primary" href="{{ site.repo }}">Access repository</a>

Applications can track the framework's releases through Git, a common
distributed version control system (DVCS).  This has the added benefit of simply
being able to pull changes and checkout new versions and avoid manually handling
files.

This is best suited for:

* Larger websites or projects
* Systems with Git installed
* Projects using Git for version control

If your project is already using Git for version control, you can add
the framework as a [Git
submodule](http://www.git-scm.com/book/en/Git-Tools-Submodules), which will
assist with managing updates.

To apply to your site or system, consult the [Application Theming]({{
site.baseurl }}/jcu/application-theming) documentation.  As different platforms
work in different ways, we encourage you to submit your experiences as a pull
request (or open an issue and we'll help).

### Source files

<a class="btn btn-outline-primary" href="{{ site.baseurl }}/jcu/building/">Let's get building!</a>

Download the complete project, including all source files for Sass, JavaScript
and documentation.  If you want to create your own flavour of framework, choose
just specific parts, or do something else that's a little out there, you're in
the right place.

This is best suited for:

* Projects with specific styling requirements
* Customising and tweaking the final theme
* Selecting and reusing specific components
* Users with experience with npm, Sass, Grunt and front-end build tools
* Projects using Git for version control

To get started building, consult the documentation for
[Building]({{ site.baseurl }}/jcu/building/) for step-by-step instructions.
