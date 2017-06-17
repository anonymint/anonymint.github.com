---
layout: post
category: technical
title: In the name of code highlight
tags: [code,highlight,markdown,gist,prettyprint]
---

I'm pretty sure I spend time revising my code highlight tool and technique more than 10 times!

Sometimes code just stop showing beautiful colors and indentation was totally wrong.

Here is list what I like the most.

#### 1. Markdown way

The simple one is in-line script `let f = new Promise(() => {console.log("Hello World!")})` this works like a charm for only a one line.

By standard, code block  with 3 back ticks will do the trick or built in `rouge` highlight.

``` javascript
// How about a block of code
function () {
    let myFirstPromise = new Promise((resolve, reject) => {
	  setTimeout(function(){
	    resolve("Success!"); // Yay! Everything went well!
	  }, 250);
	});
}
```

#### 2. [Prettyprint](https://github.com/google/code-prettify) to another level!

Once setup, pull in JS and CSS resources and decorated with custom style, all you have to do is wrap pre tag with class prettyprint

``` html
<pre class="prettyprint">
	// put code block here	
</pre>
```

result is remarkable

<pre class="prettyprint">
function () {
    let myFirstPromise = new Promise((resolve, reject) => {
	  setTimeout(function(){
	    resolve("Success!"); // Yay! Everything went well!
	  }, 250);
	});
}	
</pre>

<!-- read more -->

#### 3. Last but not least powerful [Gist](https://gist.github.com/)!

If you're likely to store your code somewhere and want others to see the raw, share or folk then Gist is perfectly a solution here.

All we need is Gist account and copy and paste code in the Public Gist, and copy and paste Embed js link below. 

<script src="https://gist.github.com/anonymint/0d8bfc9a5b52d3b23d0d6f1b1ac78f63.js"></script>

