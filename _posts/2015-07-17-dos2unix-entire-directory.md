---
layout: post
title: Run dos2unix on an entire directory?
type: post
published: true
comments: true
categories:
 – posts
---

This will run `dos2unix` all files in the current directory.

```sh
$ find . -type f -exec dos2unix {} \;
```
