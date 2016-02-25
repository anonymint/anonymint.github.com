---
layout: post
category: snippet
tags: [flushdns, el capitan]
title: Flush DNS in Mac El Capitan
---

With El Capitan we need different command than Maverick version<

We need to flushcache and reload dns once again.

`sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder;` 