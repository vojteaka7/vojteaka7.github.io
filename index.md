---
title: Vítejte na mém webu!
---

```
- 👋jmenuji se Vojta
- 🏫jsem student Biskupského gymnázia v Hradci Králové
- 🗺baví mě orientační běh
- 👨‍💻a programování
```

##### kontaktovat mne můžete:
- 📷na instagramu - `@vojtik_8` (soukromý)
- 📧emailem - `vojtech.cecka@gmail.com`
- 🐱‍💻 nebo na githubu - `@vojteaka7`

<section class="section typeset">
    {% assign page = site.posts.first %}
    <article class="article article--post">
        <h2><a href="{{ site.baseurl }}{{ page.url }}">{{ page.title }}</a></h2>
        {% include post-meta.html %}
	{{ page.excerpt | markdownify | truncatewords: 60 }}
    </article>
</section>
