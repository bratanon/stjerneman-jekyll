---
layout: portfolio
title: Linkit - the new way to link with Drupal
published: true
site-urls:
  - https://www.drupal.org/project/linkit
  - https://www.drupal.org/project/issues/linkit?categories=All
tags:
  - Drupal
  - PHP
category: Site
---

*Linkit* provides an **easy interface for internal and external linking** with editors and fields by using an
**autocomplete field**. Linkit links to nodes, users, managed files, terms and have basic support for **all entities by
default**. Linkit has three major advantages over traditional linking

<!--more-->

1. The user does not have to copy or remember a URL.
2. It is a sustainable solution for internal linking.
3. It has a user friendy UI.

## Features

* Bacis support for all entities.
* Token support (for better descriptions on search results in Linkit).
* Provides a link button, similar to the ordinary link button in most editors.
* Can be attached to fields.
* The button opens a **dialog** with an autocomplete field for searching content.
* Support for [IMCE](https://www.drupal.org/project/imce "IMCE on Drupal.org").
* Settings are handled by profiles, similar to the profiles of the WYSIWYG module. Thus, it is possible to customize
  the behavior of Linkit in detail.
* Works with and without [Pathologic](https://www.drupal.org/project/pathologic "Pathologic on Drupal.org").
* Internal absolute URL:s converts automatically into Drupal paths, very simple for users who are used to copy-pasting.
* Tested to **work in multiple server environments**, e.g. with and without clean URL:s, Drupal installation in a
  subdirectory or on a different port.
* Uses BAC *
* Fully exportable with Features module

*Since Drupal's own autocomplete was [not enough](http://drupal.org/node/1149488 "Develop custom autocompletion"), we
developed our own [Better Autocomplete](https://github.com/betamos/Better-Autocomplete) which provides a rich
autocomplete experience. It is GPL and bundled with Linkit > 7.x-2.x.

## Installation
* [Normal module installation procedure](http://drupal.org/documentation/install/modules-themes/modules-7).
* Enable the Linkit button in your editor or on your field.

## Configuration
*(admin/config/content/linkit)*<br/>
After the installation, you have to create a Linkit profile. The profile will contain information about which attributes and plugins to use.

## Dependencies
* [Chaos tool suite (ctools)](http://drupal.org/project/ctools "Chaos tool suite (ctools) on Drupal.org")
* [Entity API](https://www.drupal.org/project/entity "Entity API on Drupal.org")

## Editor support
* [WYSIWYG](https://www.drupal.org/project/wysiwyg "Wysiwyg on Drupal.org") with TinyMCE or CKEditor.
* [CKEditor](https://www.drupal.org/project/ckeditor "CKEditor on Drupal.org").

## Extra plugins
* [Linkit panel pages](https://www.drupal.org/project/linkit_panel_pages "Linkit panel pages on Drupal.org").
* [Linkit Views](https://www.drupal.org/project/linkit_views "Linkit Views on Drupal.org") (is included in 6.x)
* [Linkit Picker](https://www.drupal.org/project/linkit_picker "Linkit Picker on Drupal.org").
* [Linkit Target](https://www.drupal.org/project/linkit_target "Linkit Target on Drupal.org").
  Adds the target attribute. (In Linkit core since 7.x-3.0)
* [Linkit Markdown](https://www.drupal.org/project/linkit_markdown "Linkit Markdown on Drupal.org").

## API
Our new **robust and flexible API**

* Makes it easy for developers to extend Linkit with custom plugins. Example implementations included.
* Has support for altering db querys, using [tags](http://api.drupal.org/api/drupal/modules--system--system.api.php/function/hook_query_TAG_alter/7).
* Makes it possible to add HTML attributes to links (or alter existing attributes' interface)

Take a look at the API file called [linkit.api.php](http://cgit.drupalcode.org/linkit/tree/linkit.api.php) in Linkit
core.
