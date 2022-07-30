---
title: Vítejte na mém webu!
---

Jsem studednt biskupského gymnázie v Hradci Králové. Baví mě programování a orientační běh.

<section class="section typeset">
    {% asign page = site.posts.first %}
    <article class="article article--post">
        <h2><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></h2>
        {% include post-meta.html %}
	{{ page.excerpt | markdownify | truncatewords: 60 }}
    </article>
</section>
