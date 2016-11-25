---
layout: post
title: Create your own jQuery filters
type: post
published: true
comments: true
disqus_id: f3f8354e-a1ff-4c4d-ac91-e64edb8dac03
tags:
  - jQuery
  - JavaScript
---

Ever needed some custom filters with jQuery? Its easy to do yourself.

<!--more-->

Ever needed some custom filters with jQuery? Its easy to do yourself.

The syntax is simply this:

```javascript
$.expr[':'].FILTERNAME = function(el, i, match, array) {
  // Do your filterstuff here!
  // return true on success
};
```

## Filter by width

Change the font color on all elements that is more then 210px wide..

<div id="filter_1">
  <p style="width: 200px;">I am 200px wide</p>
  <p style="width: 220px;">I am 220px wide</p>
  <p style="width: 225px;">I am 225px wide</p>
  <p style="width: 200px;">I am 200px wide</p>
</div>

```javascript
$.expr[':'].width = function(el, i, match, array) {
  return $(el).width() > match[3];
};

$(document).ready(function () {
  $('p:width(210)').css({color: '#FF0000'});
});
```

 ```html
<p style="width: 200px;">I am 200px wide</p>
<p style="width: 220px;">I am 220px wide</p>
<p style="width: 225px;">I am 225px wide</p>
<p style="width: 200px;">I am 200px wide</p>
```

<style type="text/css">
#filter_1 {
  margin: 0 0 1.5em 0;
}
#filter_1:last-child {
  margin-bottom: 0;
}
#filter_1 p {
  margin: 0;
}
</style>
