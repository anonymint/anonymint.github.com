---
layout: post
category: technical
tags: [algorithms, bit]
title: Find Distinct Number
---

Today I tackled a trivial problem, Let say you have list of number `[1, 1, 2, 2, 3, 4, 4, 5, 5]` and we just want to find a distinct number of this array which is `3` with constraint only 1 distinct value exists so this imply size of array equals to `N%2==1` 

First attempt would be just read number and keep checking next value if it doesn't match we return value, right? well yes but what about array is `[1, 2, 3, 1, 2, 4, 5, 4, 5]` 

OK this time we must keep track of number, one way to do so is to have another hash `int[]` to keep add and minus at the end if any numbers in `int[]` has value not 0 that's distinct value.

however there is very clever way to do that is `XOR or ^` and that's it. 