function min2s(min) {
    let rozdelene = min.split(':');
    return Number(rozdelene[0]) * 60 + Number(rozdelene[1]);
}

function sum(arr) {
    total = 0
    for (const i of arr) {
        total += i;
    }
    return total
}

function zobrazit(povedene, nepovedene, cas, id_zavodu) {
    $("#udaje").css("display", "block");
    $("#cas").html(cas);
    $("#povedlo").html(povedene.join(', '));
    $("#nepovedlo").html(nepovedene.join(', '));

    $.get("https://oris.orientacnisporty.cz/API/?format=json&method=getEvent&id=" + id_zavodu,
    function(data) {
        let nazev_zavodu = JSON.parse(data)["Data"]["Name"];
        $("#nazev_zavodu").html(nazev_zavodu);
    });
}

function spocitej() {
    $("#error").css("display", "none");
    $("#udaje").css("display", "none");

    const ODCHYLKA_POVEDENE = -0.20;
    const ODCHYLKA_NEPOVEDENE = 0.1;

    const registracka = $("#registracka").val();
    const id_zavodu = $("#zavod").val();

    $.get( "https://oris.orientacnisporty.cz/API/?format=json&method=getUser&rgnum=" + registracka,
    function(data) {
        if ( JSON.parse(data)["Data"] == [] ) {
            $("#error").css("display", "block");
            $("#error").html("Asi jsi zadal chybnou registračku.");
            return null;
        }
        const id_zavodnika = JSON.parse(data)["Data"]["ID"];

        $.get( "https://oris.orientacnisporty.cz/API/?format=json&method=getUserEventEntries&userid=" + id_zavodnika,
        function(data) {
            const vsechny_zavody = JSON.parse(data)["Data"];

            for (let [_, zavod] of Object.entries(vsechny_zavody)) {
                console.log(zavod["EventID"]);
                if (zavod["EventID"] == id_zavodu) {
                    const id_kategorie = zavod["ClassID"];

                    $.get( "https://oris.orientacnisporty.cz/API/?format=json&method=getSplits&classid=" + id_kategorie,
                    function(data) {
                        if ( JSON.parse(data)["Data"].length == 0 ) {
                            $("#error").css("display", "block");
                            $("#error").html("Výsledky ješte nebyly zveřejněny.");
                            return null;
                        }

                        const nej_mc_raw = JSON.parse(data)["Data"]["Controls"];
                        var nej_mc = []
                        var nej_mc_err = 1;
                        for (const [_, kontrola] of Object.entries(nej_mc_raw)) {
                            if (kontrola["ControlCode"] != "") {
                                nej_mc.push(min2s(kontrola["BestSplit"]));

                                if ( kontrola["BestSplit"] ) {
                                    nej_mc_err = 0;
                                }
                            }
                        }

                        if ( nej_mc_err ) {
                            $("#error").css("display", "block");
                            $("#error").html("V ORISu jsme nenašli mezičasy.");
                            return null;
                        }

                        const vsech_mc = JSON.parse(data)["Data"]["Splits"];
                        var moje_mc = []
                        var moje_mc_err = 1;
                        for (const [_, zavodnik] of Object.entries(vsech_mc)) {
                            if (zavodnik['RegNo'] == registracka) {
                                var cas = zavodnik["ResTime"];

                                if ( cas == "DISK" ) {
                                    $("#error").css("display", "block");
                                    $("#error").html("Jsi DISK.");
                                    return null;
                                }

                                for (const [klic, cas] of Object.entries(zavodnik)) {
                                    if (klic.match("SplitTime") != null && cas != "") {
                                        moje_mc.push(min2s(cas));
                                        moje_mc_err = 0;
                                    }
                                }
                            }
                        }

                        if ( moje_mc_err ) {
                            $("#error").css("display", "block");
                            $("#error").html("V ORISu jsme nenašli mezičasy.");
                            return null;
                        }


                        ztrata_v_procentech = []
                        for (let i = 0; i < nej_mc.length; i++) {
                            let procento = 1 - nej_mc[i] / moje_mc[i];
                            ztrata_v_procentech.push(procento);
                        }

                        prumerne_procento = sum(ztrata_v_procentech) / ztrata_v_procentech.length;

                        povedene = [];
                        nepovedene = [];
                        for (let i = 0; i < ztrata_v_procentech.length; i++) {
                            let odchylka = (ztrata_v_procentech[i] / prumerne_procento) - 1;
                            if (odchylka > ODCHYLKA_NEPOVEDENE) {
                                nepovedene.push(i+1);
                            }
                            else if (odchylka < ODCHYLKA_POVEDENE) {
                                povedene.push(i+1);
                            }
                        }
                        zobrazit(povedene, nepovedene, cas, id_zavodu);
                        $("#error").css("display", "none");
                        $("#error").html("Vše ok.");
                        return null;
                    });
                }
            }

            if ( $("#error").html() == "") {
                $("#error").css("display", "block");
                $("#error").html("Na tento závod nejsi přihlášený, nebo tento závod neexistuje.");
                return null;
            }
        });
    });
}
