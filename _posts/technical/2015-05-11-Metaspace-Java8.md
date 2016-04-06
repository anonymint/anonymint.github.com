---
layout: post
category: technical
title: Metaspace
tags: [commandline]
---

As of Java 8, Permanent Generation or PermGen will be replaced with new space ta da called Metaspace which will be held in native memory.

By default Metaspace in Java VM 8 is not limited but for sake of system stability it always makes sense to limit it with some finite value

<code class="prettyprint">-XX:MaxMetaspaceSize=[size][g|m|k]</code>

and if you blow it then here is what you got.

<code class="prettyprint">java.lang.OutOfMemoryError: Metaspace</code>