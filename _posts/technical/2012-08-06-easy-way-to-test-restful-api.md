---
layout: post
category: technical
tags: [technology radar, 2013]
title: Easy Way to Test Restful API
---

<p>Let say you have been working on RESTful api and really need to test it as soon as you can to just make sure everything is up running properly before going any further.</p>

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

<p>The above code will allow any GET Action with path <code>getSubscriptions/YOUR_GROUP_HERE</code> and simply return plain/text type back.</p>

<p>Let look how to test it with followings</p>

<strong>curl</strong>
<p>This is the most easiest one i come across and require less setup with just command style no GUI stuffs and it works perfectly in all platform even none-GUI linux.</p>

<pre class="prettyprint">curl -X GET http://localhost:8080/alerting-api/rest/groupingsubscriptions/getSubscriptions/GROUPX</pre>