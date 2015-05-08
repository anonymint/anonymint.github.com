---
layout: post
category: technical
title: Siege Load Test in 5 minutes
tags: [siege,load test,simple]
---

Because performance does matter. Performance make a direct impact to your applications. The faster and more responsive, the better state of customer mind.

But how fast is fast enough? we need a baseline metric and to get it we need to find it.

<blockquote class="blockquote-reverse">
  <p>Amazon and Walmart increase revenue 1% for every 100ms of improvement</p>
  <footer>Dustin Whittle - Performance Testing Crash Course</footer>
</blockquote>

<blockquote class="blockquote">
  <p>Microsoft found that Bing searches that were 2 seconds slower resulted in a 4.3% drop in revenue per user</p>
  <footer>Dustin Whittle - Performance Testing Crash Course</footer>
</blockquote>

<!-- read more -->

### There are lot of tools out there but [Siege](http://linux.die.net/man/1/siege) for today

I will show you how to use Siege in 5 minutes that it!

##### Install Siege for Mac (for other OS it's .tar.gz)
`brew install siege`

<br/>

##### Memorize these command line options
`-c NUM,--concurrent=NUM` The number of concurrent users

`-i,--internet` each user randomly hits any one of the provided URLS

`-d NUM,--delay=NUM` randomly delay each call from 1 to NUM seconds

`-t NUMm,--time=NUMm` allow test to run as long as this period of NUMm where m modifier S,M or H for seconds, minutes or hours        

`-f FILE,--file=FILE` default configuration file containing list of URL      

<br/>

##### Siege single URL

`siege --concurrent=10 --delay=1 --time=15S  http://www.google.com`

This command will start sieging Google site with 10 users in a period of 15 seconds and delay each request in 1 sec.

##### Siege multiple URL

this is my configuration URL file **url.txt**. You can see a trick that we can define parameter at the beginning of the file and then put it in each line within dollar sign and parenthesis. This approach we can simply change domain to any servers, ports that we want.

~~~
URL=http://locahost

$(URL)/sample.txt
$(URL)/helloworld
$(URL)/customer/1
~~~

run siege again

`siege --concurrent=10 --internet --delay=5 --time=15M --file url.txt`

This command will start 10 users sieging randomly list of URL in the **url.txt** file in 15 minutes and each request delay 1-5 seconds.

##### results

~~~
Lifting the server siege...      done.

Transactions:		         246 hits
Availability:		      100.00 %
Elapsed time:		       14.77 secs
Data transferred:	        2.07 MB
Response time:		        0.11 secs
Transaction rate:	       16.66 trans/sec
Throughput:		        0.14 MB/sec
Concurrency:		        1.79
Successful transactions:         251
Failed transactions:	           0
Longest transaction:	        0.41
Shortest transaction:	        0.00
~~~

**Transactions** is the number of server hits.

**Availability** is the percentage of socket connections successfully handled by the server.

**Elapsed time** is the duration of the entire siege test. This is measured from the time the user invokes siege until the last simulated user completes its transactions.

**Data transferred** is the sum of data transferred to every siege simulated user.

**Response time** is the average time it took to respond to each simulated users requests.

**Transaction rate** is the average number of transactions the server was able to handle per second.

**Throughput** is the average number of bytes transferred every second from the server to all the simulated users.

**8Concurrency** is average number of simultaneous connections, a number which rises as server performance decreases.

**Failed transaction** is a number of times the server returned a code less than 400, redirects are considered successful.

**Longest transaction** is the greatest amount of time that any single transaction took, out of all transactions.

**Shortest transaction** is the smallest amount of time that any single transaction took, out of all transactions.

<br/>

So it's 5 minutes timing up already. You can see from this blog it couldn't be any easier to run load test and come up with baseline performance of particular web applications. Once we have baseline as starting point we can compare the result with other sites that we aim to be as good at or we can improve this number by improving the application and try to beat our latest baseline data!

Have fun! bye