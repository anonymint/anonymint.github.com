---
layout: default
title: Code·Play·Live | Archives
---

<div class="row">
  <div class="col-sm-4 col-md-4">
  	<h3>Tech</h3>
	  {% for post in site.posts %}
			{% if {{post.category == 'technical'}} %}
		<ul>
		<li><a href="{{post.url}}">{{post.title}}</a></li>
		</ul>

			{% endif %}
		{% endfor %}
  </div>
  <div class="col-sm-4 col-md-4">
  	<h3>Snippet</h3>
	  {% for post in site.posts %}
			{% if {{post.category == 'snippet'}} %}
		<ul>
		<li><a href="{{post.url}}">{{post.title}}</a></li>
		</ul>

			{% endif %}
		{% endfor %}
  </div>
  <div class="col-sm-4 col-md-4">
    <h3>Life</h3>
	  {% for post in site.posts %}
			{% if {{post.category == 'leisure'} or {post.category == 'life'}} %}
		<ul>
		<li><a href="{{post.url}}">{{post.title}}</a></li>
		</ul>

			{% endif %}
		{% endfor %}
  </div>
</div>