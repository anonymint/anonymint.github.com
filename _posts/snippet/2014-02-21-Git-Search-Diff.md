---
layout: post
category: snippet
tags: [git, log, search]
title: Search all commits appear in Gif diff
---

<p>Very useful when you are somewhere in commandline and wanna search for any commits</p>

<p> Search for all commit containing word <strong>catch (InterruptedException</strong></p>

<p>
	<pre class="prettyprint">git log -p -z | perl -ln0e 'print if /[+-].*catch \(InterruptedException/'</pre>	
</p>