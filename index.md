---
layout: default
title: Speed of Light
---

<h1>Welcome to my world</h1>

<p>Technology is like a light it will come and go like speed of light. You stop reading, exploring, talking, discussing today; tomorrow it will be outdated.</p>

<div>
{% for post in site.posts %}
	{% if {{post.category <> 'example'}} %}
		<h3><a href="{{post.url}}">{{post.title}}</a></h3>
		<p>
			{% assign total_words = post.content | number_of_words %}
			{% if total_words >= 250 %} 
			    {{ post.content | split:'<!-- read more -->' | first }}
    			<a href="{{ post.url }}">read more</a>
			{% else if %}
				{{post.content}}
			{% endif %}
		</p>

		<hr class="soften">

	{% endif %}
{% endfor %}
</div>