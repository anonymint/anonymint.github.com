---
layout: post
category: snippet
tags: [varnish, compile, diagnos]
title: When Varnish couldn't be started, What's error?
---

<p>I'm quite new to varnish 2 months ago and Varnish is all about configuration. With tiny little error you can spend hour to fix it</p>

But not anymore if you can quickly compile and see error at which line

<pre class="prettyprint">
varnishd -C -f /path/to/config.vcl
#if there is error you will see at which line, which file
</pre>	
