---
layout: portfolio
title: Maxlength with jQuery
published: true
comments: true
disqus_id: b40ff3cb-8ec4-4568-87e6-c089add22763
date: 2013-12-20
page-class: maxlength-demo
tags:
  - jQuery
  - JavaScript
category: Library
---

In this tutorial I will show you how to use jquery.maxlength.js on some common form fields

To start, you will need to download a copy of the jQuery library http://docs.jquery.com/Downloading_jQuery.
This plugin works with both 1.2.6 and 1.3.X. You will also have to download the plugin jquery.maxlength.js from github
https://github.com/bratanon/maxlength

<!--more-->

In this tutorial I will show you how to use jquery.maxlength.js on some common form fields

To start, you will need to download a copy of the jQuery library http://docs.jquery.com/Downloading_jQuery.
This plugin works with both 1.2.6 and 1.3.X. You will also have to download the plugin jquery.maxlength.js from github
https://github.com/bratanon/maxlength

When you have downloaded the copy you will need to include it in your file.

```html
<html>
  <head>
    <script type="text/javascript" src="jquery.js"></script>
  </head>
<body>
  <!-- we will add our HTML content here -->
</body>
</html>
```

Next step is to include jquery.maxlength.js

```html
<html>
  <head>
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="jquery.maxlength-min.js"></script>
  </head>
<body>
  <!-- we will add our HTML content here -->
</body>
</html>
```

Now to the fun part, how to apply the functionality to your script.

## Plugin options
```html
<script type="text/javascript">
$(document).ready(function(){
  $('#element-id').maxlength({
    events: [], // Array of events to be triggered
    maxCharacters: 10, // Characters limit
    status: true, // True to show status indicator below the element
    statusClass: "status", // The class on the status div
    statusText: "character left", // The status text
    notificationClass: "notification",  // Will be added when maxlength is reached
    showAlert: false, // True to show a regular alert message
    alertText: "You have typed too many characters.", // Text in alert message
    slider: false // True Use counter slider
  });
});
</script>
```

## Textarea

To use this on a simple textarea
<textarea id="maxlenght-demo-textarea"></textarea>

```javascript
$(document).ready(function(){
  $('#maxlenght-demo-textarea').maxlength();
});
```

## Input

To use this on a simple input
<input id="maxlenght-demo-input" />

```javascript
$(document).ready(function(){
  $('#maxlenght-demo-input').maxlength();
});
```

## With events/triggers

The "keyup" event is always added to the list of events.
<textarea id="maxlenght-demo-trigger"></textarea>

```javascript
$(document).ready(function(){
  $('#maxlenght-demo-trigger').maxlength({events: ['blur']});
});
```

## With slide counter

To use slider counter on one ot many elements
<textarea id="maxlenght-demo-textarea-slide"></textarea>
<input type="text" id="maxlenght-demo-input-slide">

```javascript
$(document).ready(function(){
  $('#maxlenght-demo-textarea-slide, #maxlenght-demo-input-slide').maxlength({slider: true});
});
```

<script>
(function ($) {
  $(document).ready(function() {
    $('#maxlenght-demo-textarea').maxlength();
    $('#maxlenght-demo-input').maxlength();
    $('#maxlenght-demo-trigger').maxlength({events: ['blur']});
    $('#maxlenght-demo-textarea-slide, #maxlenght-demo-input-slide').maxlength({slider: true});
  });
})(jQuery);
</script>
