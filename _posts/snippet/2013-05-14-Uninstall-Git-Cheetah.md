---
layout: post
category: snippet
tags: [git, cheetah]
title: Uninstall Git Cheetah from context menu
---

<p>It's neat to have bash on Window but sometimes it's too much</p>

<pre class="prettyprint">
cd %PROGRAMFIELS%\git\git-cheetah 

#64bit
regsvr32 /u git_shell_ext64.dll

#32bit
regsvr32 /u git_shell_ext.dll
</pre>	
