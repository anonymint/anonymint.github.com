---
layout: default
title: Speed of Light
---

<h1>Welcome to my only blog</h1>

This is the speed of light

In `_config.yml` remember to specify your own data

<div>
{% for post in site.posts %}
	{% if {{post.category <> 'example'}} %}
		<h3><a href="{{post.url}}">{{post.title}}</a></h3>
		<p>
			{{ post.content | strip_html | truncatewords: 55 }}
			<a href="{{ post.url }}">Read more</a>
		</p>
	{% endif %}
{% endfor %}
</div>