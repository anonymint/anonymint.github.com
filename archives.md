---
layout: default
title: Code·Play·Live - Technical
---

<div class="row">
  <div class="span4">
  	<h3>Tech</h3>
	  {% for post in site.posts %}
			{% if {{post.category == 'technical'}} %}
		<ul>
		<li><a href="{{post.url}}">{{post.title}}</a></li>
		</ul>

			{% endif %}
		{% endfor %}
  </div>
  <div class="span4">
  	<h3>Snippet</h3>
	  {% for post in site.posts %}
			{% if {{post.category == 'snippet'}} %}
		<ul>
		<li><a href="{{post.url}}">{{post.title}}</a></li>
		</ul>

			{% endif %}
		{% endfor %}
  </div>
  <div class="span4">
    <h3>Leisure</h3>
	  {% for post in site.posts %}
			{% if {{post.category == 'leisure'}} %}
		<ul>
		<li><a href="{{post.url}}">{{post.title}}</a></li>
		</ul>

			{% endif %}
		{% endfor %}
  </div>
</div>