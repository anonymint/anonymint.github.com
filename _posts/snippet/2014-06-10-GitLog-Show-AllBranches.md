---
layout: post
category: snippet
tags: [git,log,allbranches]
title: Git Log command to show all branches graph, commit, relative-date, committers, pointers
---

Sometimes all I need in commandline is just a quick easy-to-read git log in commandline world

`git log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all`
