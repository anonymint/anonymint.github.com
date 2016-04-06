---
layout: post
category: technical
tags: [technology radar, 2013]
title: Easy Way to Test Restful API
---

<p>Let say you have been working on RESTful API and really need to test it as soon as you can to just make sure everything is up running properly before going any further.</p>

<p>Start with simple Jersey style setup under <code>/alerting-api/rest/groupingsubscriptions</code></p>

<pre class="prettyprint">
@GET
@Path(value = "getSubscriptions/{groupName}")
@Produces(MediaType.TEXT_PLAIN)
public String getSubscriptionsFromGroup(@PathParam("groupName") String _groupName) 
{
    return "Return Data from Group "+_groupName;
}
</pre>	

<!-- read more -->

<p>The above code will allow any GET Action with path <code>getSubscriptions/YOUR_GROUP_HERE</code> and simply return plain/text type back.</p>

<p>Let look how to test it with followings</p>

<a href="http://curl.haxx.se/">curl</a>
<p>This is the most easiest one i come across and require less setup with just command style no GUI stuffs and it works perfectly in all platform even none-GUI Linux.</p>

<code>curl -X GET http://localhost:8080/alerting-api/rest/groupingsubscriptions/getSubscriptions/GROUPX</code>

<a href="https://addons.mozilla.org/En-us/firefox/addon/poster/">Poster</a>

<p>It's a developer tool for interacting with web services and other web resources that lets you make HTTP requests, set the entity body, and content type. This allows you to interact with web services and inspect the results. All you need is Firefox!!</p>

<p>This add-on is very convenience way to test web service because you can pass XML data, pick and choose which action you want then hit them to get response window back. Only drawback is you need Firefox.</p>

<a href="https://code.google.com/p/rest-client/">rest-client</a>

<p>RESTClient is a Java application to test RESTful web services. It can be used to test variety of HTTP communications. Just download the GUI version(restclient-ui-X.jar)</p>

<p>I found this program is almost the same as Poster as functionalities but no Firefox just JRE</p>

<strong>Conclusion</strong>

<p>For whoever needs to work on web service, REST we need at least one of them here installed. I would recommend get curl as it can do not only web service testing purpose it's beyond that and i won't spill the bean  and either have Poster or rest-client that will make your testing faster period.</p>
