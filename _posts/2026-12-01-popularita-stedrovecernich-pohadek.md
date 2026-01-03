---
title: Popularita štědrovečerních podmínek
---

> Jen pro info: tento článek vznikl po Vánocích, v lednu 2026 a pokud půjde podle plánu, měl by tento článek vyjít začátkem prosince 2026

Česká televize má takový dobrý zvyk, že každý rok přináší svým divák na Štědrý večer novou pohádku (kterou budu dále nazývat ŠVP – ŠtědroVečerní Pohádka). Já jsem ŠVP z roku 2025 viděl teprve před pár týdny, ale pokud si ty, milý čtenáři, chceš připomenout děj nebo kvalitu této pohádky, můžeš se podívat na ČSFD. Kromě shrnutí děje a informace, že se celou pohádku budeš moci kochat Oskarem Hesem, si zde můžeš přečíst i recenze. Česká televize není jediná, kdo zavedl na Štedrý večer novou tradici... Recenzenti na ČSFD totiž rok co rok novou ŠVP kritizují. Nejčastěji omýlanou větou pak je: "Česká televize dělá každý rok čím dál tím horší pohádky." Je to ale opravdu pravda?

Nastartoval jsem proto svůj Excel a jal se ověřovat. V následjícím grafu můžeme vidět hodnocení ŠVP z jednotlivých let (plná čára). Co je ale zajímavější údaj, je přerušovaná čára. Ta reprezuntuje lineární funkci, které aproximací grafu. Zkrátka se jedná a jakýsi "průměr" celého grafu.

![spojnicový graf s roky 1993 až 2025 na ose x a hodnocením v procentech na ose y. Plná spojnice jednotlivých bodů kolísá. Rovná přerušovaná čára (lineární aproximace) klesá.](/assets/img/pohadky_grafy/hodnoceni_švp.png)

Z grafu nevyvratitelně vyplívá, že průměrná kvalita ŠVP klesá. Je nicméně nutno zmínit, že kvalita ŠVP spíše nepředvídatelně kolísá.

I přesto lze však z těchto historických dat předpovědět, jak by mohla dopadnout ta letošní (tj. 2026). Kromě lineární aproximace nabízí Excel ještě nablýskanější algoritmus jménem ETS. V čem je lepší, netuším, ale jeho výsledek se od té obyčejnější varianty liší řádově o desetiny procent, takže je to nejspíš jedno. Podle mých výpočtů a odhadů by tedy měla štědrovečerní pohádka roku 2026 dostat na ČSFD 48 %. Tento výsledek je sice lepší než pohádka z roku 2025 (37 %), ale stále pod průměrem (55 %).

Za tento tip bych ale ruku do ohně nedal. Algoritmus ETS kromě předpovědi nabízí ještě údaj o tom, jak je jeho předpověď spolehlivá. Pokud bych se chtěl s mým odhadem na 95 % trefit, musel bych uvést, že pohádka dostane něco mezi 23 a 72 procenty. To je docela velké rozmezí... (To bych rovnou mohl uvést: "Jsem si jistý, že nová pohádka dostane mezi 0 a 100 procenty")

---
{: data-content="relativní hodnocení pohádek"}

Nevím, co mají hodnotící na ČSFD za problém, ale je jasné, že nemají pohádky zrovna v oblibě. Zkrátka zkritizují, co se dá, a proto má i relativně dobrá pohádka hodnocení kolem 60 %. Představte si následující situaci: kouknu do programu a zjistím, že mají dávat např. Princzenu a půl království. Zajímá mě, jestli tato pohádka stojí za můj čas, a podívám se proto na ČSFD, kde zjistím, že má 65 %. Stojí tedy tato pohádka za to? I když to tak podle hodnocení nevypadá, jedná se (alespoň podle mě) o jednu z nejlepších pohádek posledních let. Rozhodl jsem se proto tento problém spravit tím, že všechna hodnocení pohádek přepočítám relativně k té nejlepší. Tím by se všechna hodnocení měla narovnat a zesměrodatnit.

Lotrando a Zubejda je nejlepší pohádka, kterou jsem dohledal, a proto získává 100 %. Hodnocení každé další pohádky je dáno podílem původního hodnocení té které pohádky a původního hodnocení Lotranda a Zubejdy (78 %).

Seznam jednotlivých pohádek a jejich upravených hodnocení je na konci článku, protože je docela dlouhý. Samozřejmě tento seznam neobsahuje všechny pohádky, ale pouze ty, které jsem dohledal. Pokud narazíte na pohádku, která v seznamu chybí, její skóre spočítáte podle vzorce níže:

![matematická rovnice: relativní skóre rovná se hodnocení pohádky na ČSFD děleno sedmdesát osm to celé krát sto](/assets/img/pohadky_grafy/vzorec.png)

Pokud použijeme stejný systém pro rozdělení filmů na dobré (červená), průměrné (modrá) a špatné (černá) jako ČSFD, zjistíme, že zatímco původně dobré pohádky tvořili pouze 5 % (8 pohádek) mého vzorku, nyní tvoří 49 % (84 pohádek). Počet špatných pohádek klesl z 5 % (10 pohádek) na 3 % (6 pohádek). Viz graf níže. Vnitřní kruh popisuje původní hodnocení, vnější nová hodnocení.

![koláčový graf popisující distribuci barevného hodnocení na ČSFD před a po úpravě](/assets/img/pohadky_grafy/distribuce_barev.png)

---
{: data-content="závěr"}

Třeba se tahleta blbost bude někomu hodit. Ještě bych mohl upravit hodnocení vzhledem k té klesající přímce kvality ŠVP. To ale zase příště...

---
{: data-content="slibovaná tabulka"}


| název pohádky                                 | hodnocení |
| --------------------------------------------- | ---- |
| Lotrando a Zubejda                            | 100% |
| Anděl Páně 2                                  | 98%  |
| Anděl Páně                                    | 98%  |
| Sedmero krkavců (2015)                        | 96%  |
| Čarodějné námluvy                             | 92%  |
| Princezna zakletá v čase                      | 91%  |
| O princezně z Rimini                          | 90%  |
| Korunní princ                                 | 90%  |
| Omyl děda Vševěda                             | 90%  |
| Šťastný smolař                                | 89%  |
| Vánoční království                            | 89%  |
| Ke všem čertům                                | 88%  |
| Tajemství staré bambitky                      | 88%  |
| Krakonošovo tajemství                         | 85%  |
| O zakletém králi a odvážném Martinovi         | 84%  |
| O holičí a barvíří                            | 84%  |
| O kováři Básimovi                             | 84%  |
| O vánoční hvězdě                              | 83%  |
| Princezna a půl království                    | 83%  |
| O šedivákovi                                  | 83%  |
| Princezna ze mlejna                           | 82%  |
| Nejlepší přítel                               | 82%  |
| Poutníci                                      | 82%  |
| Nesmrtelná teta                               | 80%  |
| Zlatovláska                                   | 80%  |
| Vodníkova princezna                           | 80%  |
| Není houba jako houba                         | 80%  |
| Nevěsta pro Paddyho                           | 79%  |
| Nepovedený čert                               | 79%  |
| Dvě Mařenky                                   | 79%  |
| O bílé paní                                   | 79%  |
| Tajemství mořské panny                        | 79%  |
| Peklo s princeznou                            | 78%  |
| Čertí brko                                    | 78%  |
| Cyprián a bezhlavý prapradědeček              | 78%  |
| Princezna zakletá v čase 2                    | 78%  |
| O svatební krajce                             | 77%  |
| Jak si pan Pinajs kupoval od kocoura sádlo    | 77%  |
| Boháč a chudák                                | 77%  |
| Dům u zlatého ústvitu                         | 77%  |
| Ošklivá princezna                             | 77%  |
| Hodinářův učeň                                | 77%  |
| Pohádka o Faustovi                            | 77%  |
| Vodnická čertovina                            | 76%  |
| Dick Whittington                              | 76%  |
| Císař a tambor                                | 76%  |
| Králův šašek                                  | 76%  |
| Česká muzika                                  | 76%  |
| Zmrazený Vasil                                | 76%  |
| O zlatém pokladu                              | 76%  |
| Kouzelný měsíc                                | 75%  |
| Nejkrásnější dar                              | 75%  |
| Čert ví proč                                  | 75%  |
| Král sokolů                                   | 75%  |
| Zkřížené meče                                 | 74%  |
| Království květin                             | 74%  |
| Poslední slovo                                | 74%  |
| O pyšném panovníkovi                          | 74%  |
| Chladné srdce                                 | 74%  |
| Pohádka o nejšťastnějším království           | 74%  |
| Dvanáct měsíčků                               | 73%  |
| Zázračné meče                                 | 73%  |
| Bronzová koruna                               | 73%  |
| Jak se stav švec Dratvička tchánem pana krále | 73%  |
| Červený kamínek                               | 73%  |
| Sedmero krkavců (1993)                        | 72%  |
| Čertoviny                                     | 72%  |
| Černokněžník                                  | 72%  |
| O moudré Sorfarině                            | 72%  |
| O pokladech                                   | 72%  |
| Jakub a Modřinka                              | 72%  |
| O zázračné mouše                              | 72%  |
| Vodník a Karolínka                            | 72%  |
| Restaurace U prince                           | 72%  |
| O Držgrešlovi a Drždukátovi                   | 71%  |
| Zimní víla                                    | 71%  |
| Tři životy                                    | 71%  |
| Princezna a písař                             | 71%  |
| Nejkrásnější hádanka                          | 71%  |
| Čarodějnická pohádka                          | 71%  |
| Tři zlaté dukátky                             | 71%  |
| Marie Růžička                                 | 71%  |
| Nebe a Vincek                                 | 71%  |
| Čarovné jablko                                | 71%  |
| Zakletá jeskyně                               | 70%  |
| Probuzená skála                               | 70%  |
| Poklad na Sovím Hrádku                        | 70%  |
| Silák a strašidla                             | 70%  |
| Zázračný nos                                  | 70%  |
| Klíč svatého Petra                            | 70%  |
| O dívce, která šlápla na chléb                | 70%  |
| Škola princů                                  | 70%  |
| Tajemství staré bambitky 2                    | 70%  |
| Hejkalka                                      | 69%  |
| Ty, ty, ty, Moneti!                           | 69%  |
| Zlatá princezna                               | 69%  |
| Jak si nevzít princeznu                       | 69%  |
| Zlatník Ondra                                 | 69%  |
| Královský slib                                | 69%  |
| Bedna s datlemi                               | 69%  |
| Sněhurka a kouzelní trpaslíci                 | 69%  |
| Hrad stínů                                    | 68%  |
| Prsten krále řeky                             | 68%  |
| Tři bratří                                    | 68%  |
| Jezerní královna                              | 68%  |
| Princ z pohádky                               | 68%  |
| Jak chutná láska                              | 68%  |
| Hvězdopravcův dar                             | 68%  |
| Zvonící meče                                  | 68%  |
| Začarovaná láska                              | 68%  |
| Láska rohatá                                  | 68%  |
| Jak si zasloužit princeznu                    | 67%  |
| O ječmínkovi                                  | 67%  |
| Kdo hledá, najde                              | 67%  |
| Noční mora                                    | 67%  |
| Ztracený princ                                | 67%  |
| Svatojánský věneček                           | 67%  |
| Princ Mamánek                                 | 67%  |
| Největší dar                                  | 67%  |
| Dešťová víla                                  | 66%  |
| Sofie a ukradený poklad                       | 66%  |
| Nevěsta s velkýma nohama                      | 66%  |
| Kouzelný bolehoj                              | 65%  |
| O kouzelné rybí kostičce                      | 65%  |
| Květuška a její zahrádka                      | 64%  |
| Pohádka z ostrova Man                         | 64%  |
| Kde bydlí strašidla                           | 64%  |
| Dědo, čaruj                                   | 64%  |
| O mrňavém obrovi                              | 63%  |
| O začarované vlčici                           | 63%  |
| Čertova nevěsta                               | 63%  |
| Nepovedený kouzelník                          | 62%  |
| O trpaslíku Nosovi                            | 62%  |
| Pohádka o houslích a viole                    | 62%  |
| Pohádka o žabákovi a zlaté kouli              | 62%  |
| Modrý Mauritius                               | 62%  |
| Dřevěná Marika                                | 62%  |
| Císařovy nové šaty                            | 61%  |
| Kouzla králů                                  | 61%  |
| Voděnka                                       | 61%  |
| Paní Mlha                                     | 61%  |
| RumplCimprCampr                               | 60%  |
| Ďábelské klíče                                | 60%  |
| Micimutr                                      | 60%  |
| Tajemný svícen                                | 58%  |
| Královna bublin                               | 57%  |
| Zakleté pírko                                 | 57%  |
| Duch nad zlato                                | 56%  |
| Pták Ohnivák                                  | 55%  |
| Princezna ze mlejna 2                         | 55%  |
| Loupežnická balada                            | 55%  |
| Nesmělý Mikeš                                 | 55%  |
| Z pekla štěstí                                | 54%  |
| O perlové panně                               | 54%  |
| Pravý rytíř                                   | 51%  |
| Království potoků                             | 50%  |
| O třech rytířích, krásné paní a lněné kytli   | 49%  |
| Záhada strašidelného zámku                    | 47%  |
| Strašídla                                     | 46%  |
| Řachanda                                      | 45%  |
| Perinbaba a dva světy                         | 44%  |
| Velký dračí propadák                          | 42%  |
| Šmankote, babičko, čaruj!                     | 39%  |
| Alenka v zemi zázraků                         | 35%  |
| Tři princezny                                 | 33%  |
| Z pekla štěstí 2                              | 31%  |
| Kouzelník žito                                | 29%  |
| Čertová skála                                 | 25%  |
| Dukátová skála                                | 20%  |
| Saxána a Lexikon kouzel                       | 20%  |
| Princezna na hrášku                           | 16%  |
| Když draka bolí hlava                         | 16%  |
