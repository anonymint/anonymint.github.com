---
layout: post
category: technical
tags: [12factors]
title: The Twelve-Factor App in Twelve line
---

Any developers who build application as service and Ops who deploy that service should read [Twelve-factor](https://12factor.net) 

This is short in 12 lines no more to remind at least me.

1. **Codebase** - one codebase for one deployable app
2. **Dependencies** - explicitly declares and isolates dependencies like npm,maven
3. **Config - inject** config which is not in codebase for each environment.
4. **Backing services** - treat backing services as resources no distinction between local or 3rd party.
5. **Build, release, run** - build code, inject config at release  and run stricly seperated.
6. **Processes** - stateless processes sharing nothing or externalize to backing services.
7. **Port binding** - self-contained exporting any/all services  via port binding.
8. **Concurrency** - share-nothing, horizontally scale out.
9. **Disposablity** - start fast and shutdown gracfully
10. **Dev/prod parity** - CI/CD keeping all environments the same.
11. **Logs** - Stream logs as event systems allowing collect, aggregate and analyze.
12. **Admin proceses** - admin tasks are done as one-off processes identical to app's processes.