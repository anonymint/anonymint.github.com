---
layout: default
title: Code Play Live
---

<h1>Coding hard, Playing harder, Living simple life</h1>

<p>I have 3 simple rules. First, I really love technology and love coding, cracking things. Second, I am enthusiastic about exploring the world taking pictures with both DSLR and memory(mine not camera). Last, I live my life simple and happy</p>

<div>
{% for post in site.posts %}
	{% if {{post.category <> 'example'}} %}
		<h3><a href="{{post.url}}">{{post.title}}</a></h3>
		<h6 id="date">{{ post.date | date_to_string}}</h6>
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