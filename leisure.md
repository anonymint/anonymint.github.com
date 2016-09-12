---
layout: default
title: Speed of Light - Technical
---

<div>
{% for post in site.posts %}
	{% if post.category == "leisure" %}
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