---
layout: post
title: Fix tzselect error in Ubuntu 14.04
type: post
published: true
comments: true
disqus_id: 7f4949b2-9380-4577-b97e-c78ad1aaf365
categories:
 – posts
---
<!--more-->
When selecting timezone using `tzselect` in Ubuntu 14.04 you will be promted with an error.

```
/usr/bin/tzselect: time zone files are not set up correctly
```

To fix this, simply reconfigure tzdata with the following command:

```sh
# dpkg-reconfigure tzdata
```
