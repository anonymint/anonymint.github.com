---
layout: post
category: snippet
tags: [nginx, denied]
title: nginx permission denied issue
---

I got some weird error on one of my endpoints there are many but this one return error	

`2014/08/30 16:38:11 [crit] 21309#0: *10 connect() to [::1]:1234 failed (13: Permission denied) while connecting to upstream, client: ww.xx.yy.zz, server: _, request: "GET /ping HTTP/1.1", upstream: "http://[::1]:1234/ping", host: "abc"`

script below will do the trick, i will tell you more

`sudo setsebool httpd_can_network_connect 1`	
