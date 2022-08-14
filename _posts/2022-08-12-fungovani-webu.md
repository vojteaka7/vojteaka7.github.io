---
title: Jak tento web funguje
categories:
- Obecné
- Programování
excerpt: Mám nový web! Používá Jekyll hostovaný na Github pages.
---

Tento web je velice primitivní a statický. Tzn. že se sám nemění, nepracuje s databází zůstává stále stejný.

## Jekyll

Tento web používá [Jekyll](https://jekyllrb.com). Jedná se o generátor statických webových stránek určený primárně pro správu blogů. Vezme soubory v [markdownu](https://www.markdownguide.org/) (ve specifické struktuře složek) a předělá je do HTML. Markdown je minimalistický způsob jak zapsat formátovaný text jako prostý text, tak aby i tento prostý text byl lidmi čitelný. HTML je opět způsob jak zapsat formátovaný text jako text prostý. Narozdíl od Markdownu je HTML upovídané a psát v něm články by bylo neefektivní. V HTML se píší webové stránky. Níže můžete porovnat HTML a Markdown.

##### Html

```html
<h1>Tohle je nadpis</h1>
<p>A tohle je odstavec. Můžete zde použít <em>kurzívu</em> a text <strong>tlustý</strong>.
Na víc lze <a href="https://example.com">odkazovat</a> a ukazovat <code>kousky kódu</code>.</p>
```

##### Markdown

```markdown
# Tohle je nadpis

A tohle je odstavec. Můžete zde použít _kurzívu_ a text **tlustý**.
Navíc lze [odkazovat](https://example.com) a ukazovat `kousky kódu`.
```

##### Výsledek

---
# Tohle je nadpis

A tohle je odstavec. Můžete zde použít _kurzívu_ a text **tlustý**.
Navíc lze [odkazovat](https://example.com) a ukazovat `kousky kódu`.

---

## Github Pages

[Github](https://github.com) je stránka pro verzování projektů a jejich ukládání na serveru pro spolupráci více lidí[^1]. Zároveň nabízí zveřnění takového projektu v Jekyllu na internet. Přesně tak je tedy hostovaný tento blog.

## Alembic šablona

Github pages samy vás vyzvou, aby jste si vybrali šablonu. Já si vybral [Alembic Theme](https://alembic.darn.es) od [Davida Darnese](https://darn.es). Pak jsem ji dlouze upravoval, aby vypadal blog přesně dle mých představ.

---

Doufám, že jste alespoň trochu z fungování webu pochopili. Určitě mám v plánu udělat podrobnější článek na to, jak si udělat vlastní blog pomocí Github pages.

[^1]: Ve skutečnosti je to trochu složitější, ale to je na jiný článek. Ty projekty se přesněji (a správněji) nazývají _repozitáře_.
