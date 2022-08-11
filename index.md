---
title: Vítejte na mém webu!
---

<style>li p {display: inline}</style>

- 👋jmenuji se Vojta
- 🏫jsem student Biskupského gymnázia v Hradci Králové
- 🏃‍♂️baví mě orientační běh
- 👨‍💻a programování

##### Kde mě najdete
- {% include icon.html id="instagram" title="@vojtik_8" %} [@vojtik_8](https://instagram.com/vojtik_8)
- {% include icon.html id="email" title="vojtech.cecka@gmail.com" %} [vojtech.cecka@gmail.com](mailto:vojtech.cecka@gmail.com)
- {% include icon.html id="github" title="@vojteaka7" %} [@vojteaka7](https://github.com/vojteaka7)

<section class="section typeset">
    {% assign page = site.posts.first %}
    <article class="article article--post">
        <h2><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></h2>
        {% include post-meta.html %}
	{{ page.excerpt | markdownify | truncatewords: 60 }}
    </article>
</section>
