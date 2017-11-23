# Changes

## 2.0.0-beta.1 (unreleased)

* Add CDN information about image resources
* Fix typo in Landing examples JS
* Add fixed backgrounds to Landing examples
* Preliminary deletions in advance of merging to latest bootstrap. See documentaiton for details
* This commit is the result of a Git Theirs Merge carried out between Jcu Web Framework v1.0.0-beta.1 and Bootstrap v4.0.0-beta.2 branch v4-dev.
* Incororated changes from the Navbar commits which were  deleted during the Theirs Merge of Jcu Web Framework v1.0.0-beta.1 nd Bootstrap v4.0.0-beta.2 using the v4-dev branch  
* Added dist directory and doc/dist directory to gitignore
* Colour, grays, fonts & borders updated in Bootstrap 4 beta 2 CSS to match JCU Web Framework requirements added to v2dev branch.
* Merge branch 'v2dev' into v2-dev. With jcu/web-framework.git/v2-dev checked out a Git Ours Merge was performed with twbs/bootstrap.git/v2dev. This ensured that the jcu/web-framework.git/v2-dev branch contained the most up-to-date version of the boostrap/scss/_variables.scss file. 
* Default Bootstrap 4 beta 2  SASS colour, grays, fonts & borders variables updated to match JCU Web Framework requirements. Content removed from boostrap/scss/_variables.scss and added to scss/jcu/_variables.scss before the branchs v2dev and v2-dev were merged with a Git Ours Merge.  
* Boostrap build process now possible, after specific JCU Javascript, Html and CSS files have been ignored.
* flexContainer.html and flexContainer.css added as an example webpage using the customised  colours, grays, fonts & borders from Bootstrap 4 beta 2
* package.json has been reverted to an earlier version, so that the build process will fail. This will allow all htmllint problems to be corrected.
* Updated code base to include html, style and javascript lint changes from lastest version of Boostrap
    
## 1.0.0-beta.1 (2016-05-24)

* Correct versioning from being based on Bootstrap to being our own
* Added changelog
* Add Landing page and Landing content page examples
* Add `.opaque` and `.transparent` classes
* Remove side margin on footer social icons
* Redirect large icon font size slightly
* Backport fix for https://github.com/twbs/bootstrap/pull/19885 for card deck
  heights
* Gradients use 95% opacity by default.
* `.list-bordered` only applies to immediate children; this fixes nested
  lists
* Use theme colours from microsite layout (fixes #10).
* Adds new components and styles on top of Bootstrap
* Customises various project aspects (docs, readme, etc) for JCU
* Adds JCU-specific examples
* Adds accessibility testing framework support (tota11y and pa11y)
* Documentation available at https://web.jcu.io
* First JCU flavoured (pre-)release.
* Initial release based on Bootstrap v4.0.0-alpha2

