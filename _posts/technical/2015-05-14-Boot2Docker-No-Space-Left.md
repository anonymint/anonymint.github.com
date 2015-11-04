---
layout: post
category: Technical
tags: [docker, boot2docker, nospaceleft]
title: Boot2docker - No space left on device
---

Today I got this error after using Boot2Docker on my Mac for a long time. Yes `no space left on device`	

It took me a while to stop, start, upgrade Boot2Docker to the newest version and nothing changed. After doing some research there is way to do. 

However to be honest, it's too much for me until I found the profile way [Configuration section](https://github.com/boot2docker/boot2docker-cli)

	# VM disk image size in MB
	DiskSize = 20000

**BE CAUTION YOUR IMAGES WILL BE GONE, PUSH IT FIRST!**

Increase to whatever you want, then follow by boot2docker stop, destroy, init and start 