---
layout: post
category: snippet
tags: [hidden, mac]
title: Allow Mac Finder to see hidden files
---

<p>Very useful when you would like to change some hidden file like bash or etc</p>

<p>Open terminal
	<code class="prettyprint">defaults write com.apple.Finder AppleShowAllFiles YES</code>	
</p>

<p>when done with it and want to turn it back?
	<code class="prettyprint">defaults write com.apple.Finder AppleShowAllFiles No</code>	
</p>

