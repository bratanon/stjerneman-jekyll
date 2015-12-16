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
  <p style="width: 220px;">I am 220px wide</p>
  <p style="width: 200px;">I am 200px wide</p>
</div>

```javascript
$.expr[':'].width = function(el, i, match, array) {
  return $(el).width() > match[3];
};

$(document).ready(function () {
  $('p:width(210)').css({color: '#DF5000'});
});
```

 ```html
<p style="width: 200px;">I am 200px wide</p>
<p style="width: 220px;">I am 220px wide</p>
<p style="width: 220px;">I am 220px wide</p>
<p style="width: 200px;">I am 200px wide</p>
```

## Filter content by font-face

<div id="filter_2">
  <p>My font is not set or default.</p>
  <p style="font-family: georgia;">My font is Georgia</p>
  <p style="font-family: Times new Roman;">My font is Times new Roman</p>
  <p style="font-family: tahoma;">My font is Tahoma</p>
</div>

```javascript
$.expr[':'].hasFont = function(el, i, match, array) {
  firstFont = $(el).css('font-family').split(',')[0].toLowerCase();
  return (firstFont == match[3].toLowerCase());
};

$(document).ready(function () {
  $('p:hasFont(tahoma)').css({color: '#57FF40'});
  $('p:hasFont(georgia)').css({color: '#4C67FF'});
  $("p:hasFont('Times New Roman')").css({color: '#FF51BF'});
});
```

```html
<p>Default font</p>
<p style="font-family: georgia;">Georgia</p>
<p style="font-family: Times new Roman;">Times new Roman</p>
<p style="font-family: tahoma;">Tahoma</p>
```

<style type="text/css">
#filter_1,
#filter_2 {
  margin: 0 0 1.5em 0;
}
#filter_1:last-child,
#filter_2:last-child {
  margin-bottom: 0;
}
#filter_1 p,
#filter_2 p {
  margin: 0;
}
</style>
<script>
$.expr[':'].width = function(el, i, match, array) {
  return $(el).width() > match[3];
};

$.expr[':'].hasFont = function(el, i, match, array) {
 firstFont = $(el).css('font-family').split(',')[0].toLowerCase();
 return (firstFont == match[3].toLowerCase());
};

$(document).ready(function () {
  $('#filter_1 p:width(210)').css({color: '#DF5000'});
  $('#filter_2 p:hasFont(tahoma)').css({color: '#57FF40'});
  $('#filter_2 p:hasFont(georgia)').css({color: '#4C67FF'});
  $("#filter_2 p:hasFont('Times New Roman')").css({color: '#FF51BF'});
});
</script>
