---
layout: docs
title: Building
group: jcu-customisations
---

{% callout info %}
**Heads up!** You don't need to read this documentation if you're just looking
to use a pre-produced version.  If you're looking to extend or customise the JCU
Web Framework further then read on.
{% endcallout %}

{% callout info %}
**First things first!** If you haven't read the documentation on Bootstrap's
[Build tools](../getting-started/build-tools.md), head over there and go through
that first.  Everything here will make a lot more sense once you also understand
the purpose of each tool Bootstrap uses and that you have those tools installed
on your system.
{% endcallout %}

## Getting started

How you get started depends on your operating system.  The simplest
option is to use a terminal and if you are on a Mac or Linux computer, you'll
have the required tools already present by default -- a Terminal and the ``git``
command.  If you're on Windows, or otherwise looking for a GUI solution, you'll
need to install some form Git application (such as [GitHub
Desktop](https://desktop.github.com/)) to help you manage the code.

1. Visit the [web framework repository]({{ site.repo }}) repository and clone
   it.  You'll find clone URLs at the top-left side of the page.

   For those using a terminal, run:

   ```
       git clone {{ site.repo }}
   ```

1. Ensure all of the [Build tools](../getting-started/build-tools.md) needed
   are installed on your system.

1. Your system may already have a Ruby environment configured. As such, it is
   easier and cleaner to have Bundler install its resources locally to the
   `jcu-web-framework` directory with:

   ```
       bundle install --path vendor/bundle
   ```

   Once you've run this once, you don't need to specify the path if you re-run
   `bundle`.  If just run `bundle` or `bundle install`, Bundler will try and
   install the required gems in your system path.

1. Now you're ready to build!

## Grunt tasks

Our Gruntfile adds the following commands and tasks:

| Task | Description |
| --- | --- |
| `grunt jcu-publish` | Builds all dist and docs CSS/JS/assets, builds
documentation via Jekyll for hosting, and uploads to the `gh-pages` branch
in the repo. |

## Updating Bootstrap versions and committing

The JCU Web Framework is built upon Bootstrap and adds a number of *commits*
which change various settings, add new features and generally craft Bootstrap
into a framework that's in-keeping with JCU's branding guide.  There will come
times when the underlying version of Bootstrap should be upgraded to either
introduce new features, fix bugs, or perhaps stay up-to-date with the latest web
practices and standards.  Because we are using Git to track versions, this
process is straightforward; resolving differences between JCU's customisations
and Bootstrap core may be another story.

1. Add the official Bootstrap repository as a remote called `upstream` and fetch
   its contents.  For those using a terminal, run:

   ```
       cd jcu-web-framework
       git remote add upstream https://github.com/twbs/bootstrap.git
       git fetch upstream
   ```

1. Fetch the latest changes from the `upstream` remote.  In a terminal, this is:

   ```
       git fetch upstream
   ```

1. Determine the version you wish to update to and attempt the merge,
   substituting in your version number:

   ```
       git merge v4.1.1
   ```

1. You will likely be informed that merge conflicts have occurred.  These appear
   where the changes in JCU's framework are at odds with changes in the official
   Bootstrap code.

   Go through each file that's conflicted and resolve the merge.  See [this
   page](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/)
   from GitHub on how to resolve conflicts on the command line.  Your Git
   application likely offers similar functionality.

1. Once all conflicts are resolved, build and test the framework:

   ```
       npm install
       bundle

       grunt dist docs
       bundler exec jekyll serve
   ```

   and load http://localhost:9001 in your browser.

   The first two commands will update any dependencies, should anything change
   between Bootstrap versions.

   Most technical issues (such as changes to variable names and classes) will be
   caught during the third command - the rebuild.  Visual and other issues need
   to be inspected by loading the examples and style guide in your browser to
   ensure nothing has broken.

1. When satisfied, make a note in the change log, commit the results and push to
   the server.
