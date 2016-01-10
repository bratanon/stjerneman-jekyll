---
layout: post
title: All about the Linkit module
type: post
published: true
comments: true
disqus_id: 90986ab0-95ea-470f-8b13-92ed27d2a670
tags:
  - Drupal
  - Linkit
---
Drupal 8 is here, and so is Linkit 8. What's new? What's have been changed? How was I thinking?

In this post I'll try to answer these questions.

<!--more-->

The Drupal module [Linkit](https://www.drupal.org/project/linkit) has over the
years *(starting late 2009)* helped people around the world to manage links in
the WYSIWYG editor in a very easy and friendly way.

<div class="linkit-history-images">
  <div>
  {%
    include image.html img="assets/posts/all-about-linkit/linkit6.png"
    caption="Linkit 6"
  %}
  </div>
  <div>
    {%
      include image.html img="assets/posts/all-about-linkit/linkit7.png"
      caption="Linkit 7"
    %}
  </div>
  <div>
    {%
      include image.html img="assets/posts/all-about-linkit/linkit8.png"
      caption="Linkit 8"
    %}
  </div>
</div>

It has also helped me personally to gain more knowledge about Drupal and
programming over the years. This is my "code baby", though I haven't always
been alone taking care of it. As Linkit stared to grow in installations, more
and more developers have started to help me by making patches and solving
problems in the issue queue. It's fantastic how open source collaboration works.
Thanks to all of you that have helped me build Linkit over the years.

I would also like to give a special thanks to Didrik "bollegrisen" Nordström
[(@betamos)](https://twitter.com/betamos) that helped me with the Linkit
7.x-2.x release. He wrote the BAC component used in 7.x-2.x and 7.x-3.x.

The 19 of November 2015 the [first stable Drupal 8 version](https://www.drupal.org/news/drupal-8.0.0-released)
were released and with that the need for a new compatible version of the
beloved module Linkit.

When I started thinking about the Linkit 8 version, I had to take a step back
and think about what Linkit is today and how it has been, and is being used
today, and what that I want to achieve with it in the future.

> I want to give users a super easy and friendly experience when adding links.
> I also want Linkit to be very pluggable and configurable so other developers
> can extend Linkit in an easy way to fulfill there needs.

Over the years, the implantation have had different architecture, some really
nice, and some that turned out to be not so nice. What I've tried to do with
Linkit 8 is to reflect over the architecture and the needs to build the best
Linkit version ever.

In order to see the differences between the previous versions and the current
Linkit 8.x-4.x, I think I need to explain the "concepts" we've had and have now
in Linkit.


## Profiles
Profiles have been around since 7.x-2.0 and is used as configuration containers.
Most of the configuration in a profile consists of plugin configuration.

In 7.x-2.x and 7.x-3.x profiles are exportable with the [Ctools](https://www.drupal.org/project/ctools)
exportable UI. In 8.x-4.x, profiles are configuration entities and can use the
configuration API in Drupal core.

Profiles in Linkit 7.x-2.x had a role based permission system build in. The
profile used in the Linkit link modal were calculated by the users roles.
I felt that having both permissions/roles inside profiles and also in the text
formats were a bit overkill and didn't make sense.

With Linkit 7.x-3.0 the role based permission system were moved and the
permissions is now instead controlled by the text format the profile is assign
to. The text format to use can be selected through checkboxes within the profile
itself. The 7.x-3.0 version also introduced a way to switch profiles in the
Linkit link modal. This feature had a grate purpose, but now I can't remember
why now.

In Linkit 8.x-4.x profiles and text formats are still kind of tightly connected
but it's now handled by a CKEditor plugin that appears when configure the text
format. Profiles are thereby assigned to a text format and will inherit the
permissions from that text format. In that way you can have different profiles
for different roles with different configuration in a consistent way.
The feature to switch profiles introduced in 7.x-3.0 is gone in 8.x-4.x.

## Plugins
Linkit 6.x-1.x and 7.x-1.x used hooks and submodules as plugins.

Linkit 7.x-2.0 introduced plugins through the Ctools plugin system to be easily
extended and implemented by other modules.

The former plugin system using Ctools is now gone.
Linkit 8.x-4.x is using the Drupal annotation discovery plugin system.


### Matcher plugins (former known as search plugins)
Handles the autocomplete search and result building methods.

Linkit 7.x-2.x supports nodes, users, terms, files by default.

Linkit 7.x-3.x supports all entities with a *uri callback* method defined by
default.

Linkit 8.x-4.x supports all entities with a *canonical* url defined by default.
It is named "matcher plugins" to not be mistaken by "search plugins" that's
already exists in Drupal core.

#### File matcher plugin
Linkit 8.x-4.x **doesn't** have that bundle filter on the file matcher as the
file entity doesn't have any bundles in Drupal 8.

If you are familiar with the file matcher in 7.x-3.x you will also notice that
there are some other settings missing in the 8.x-4.x version.

In 8.x-4.x *Show file scheme* and *URL type* settings is now gone. The
*URL type* were introduced in 7.x-3.3 to make it possible to configure to where
a file link would point. Direct file link, download file link, or to the file
entity view page. As file entities in Drupal 8 now produces links directly to
the actual file, this settings is no longer needed.

In 8.x-4.x you can now select an image style to use with the *Show thumbnail*
setting. Linkit still provides you with a default image style at installation.

#### User matcher plugin
Linkit 8.x-4.x introduce more settings to the user matcher.

It's now possible to limit the results by one or more roles and it's also
possible to include blocked users in the result.

### Attribute plugins
Attribute plugins are used to add HTML attributes such as title, rel, and
target to the inserted link object.

Linkit 7.x-2.x used hooks to define attributes and not the Ctools plugin system.

With 8.x-4.x, these plugins does now support configuration, see the
*Title attribute plugin* for an example.

### Insert plugins
Linkit 7.x-2.x and 7.x-3.x is using something called "Insert plugins".

They are used to "theme" the format of the result link when inserting it into
an editor or a field. For editors, the default is an HTML link, and for fields,
it could be a raw path.

This was mostly created to support field integration and markdown code,
therefor Linkit 8.x-4.x **doesn't** contain insert plugins.

## Field integration
A field integration was first committed into the 7.x-2.x branch, and heavily
refactored in the 7.x-3.x version. The field integration adds support for
adding the same (almost) dialog used by editor to a button connected to a field.

The field integration in 7.x-3.x supports *text*, *text long*,
*text with summary* and *link field* by default.

The 8.x-4.x version **doesn't** contain the field integration as there is now
a simple version of this in Drupal core.

## IMCE integration
Linkit 8.x-4.x is like 7.x-3.x is fully integrated with the [IMCE module](https://www.drupal.org/project/imce).
On each profile, you can choose to enable IMCE and for 8.x-4.x also choose
which stream wrapper to use.

IMCE settings are handled by the *third party settings API* provided by Drupal
core.

## Token integration
Just like 7.x-2.x and 7.x-3.x, Linkit 8.x-4.x is fully integrated with the
[Token module](https://www.drupal.org/project/token) for the result description.

Basic token support still exists even if the token module isn't enabled.

## BAC - Better autocomplete
[BAC](https://github.com/betamos/Better-Autocomplete) was actually first built
to replace the autocomplete widget in Drupal 7 when using Linkit 7.x-2.x.

* [#1147136](https://www.drupal.org/node/1147136): Proposal for Linkit 2.x UI
* [#1149488](https://www.drupal.org/node/1149488): Develop custom autocompletion

BAC served very well in 7.x-2.x and 7.x-3.x, but in Linkit 8.x-4.x it's
replaced by the [jQuery UI autocomplete](http://jqueryui.com/autocomplete/)
as this is provided by Drupal core.

## TLDR; - Major changes in 8.x-4.x
- Profiles are now configuration entities.
- Profiles are now assigned to text formats in the text format configuration
  form.
- Plugins using the Drupal annotation discovery plugin system.
- Search plugins is now called Matcher plugins.
- Insert plugins is gone.
- Attribute plugins can now have theirs own configuration.
- Field integration is gone.
- BAC (Better autocomplete) is gone, Linkit 8.x uses the jquery autocomplete.

Linkit can be downloaded for free at https://www.drupal.org/project/linkit.

