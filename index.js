const fs = require('fs');
const papa = require('papaparse');
const axios = require('axios').default
const file = fs.createReadStream('gewindefedern.tsv');
var count = 0;
papa.parse(file, {
    header: true,
    step: function (result) {

        result.data.forEach(g => {
            axios.post('http://localhost:1337/products', {
                Marke: g.Marke.toString(),
                Artikelnummer: g.Artikelnummer.toString(),
                Kurzbezeichnung: g.Kurzbezeichnung.toString(),
                TieferlegungVA: g.TieferlegungVA.toString(),
                TieferlegungHA: g.TieferlegungHA.toString(),
                Zulassung: g.Zulassung.toString(),
                AchslastVA: g.AchslastVA.toString(),
                AchslastHA: g.AchslastHA.toString(),
                Lieferumfang: g.Lieferumfang.toString(),
                Ausfuehrung: g.Ausfuehrung.toString(),
                Produktgruppe: g.Produktkategorie.toString(),
                Ean: g.EANcode.toString(),
                Auflagen: g.HinweiseE.toString(),
                Preis: g.Vk,
                Hersteller: g.Hersteller.toString(),
                Modell: g.Modell.toString(),
                Typ: g.Typ.toString(),
                Handelsname: g.Handelsname.toString(),
                Bauform: g.Bauform.toString(),
                Kraftstoff: g.Kraftstoffart.toString(),
                Kw: g.Kw.toString(),
                Hubraum: g.Hubraum.toString(),
                Zylinder: g.Zylinder.toString(),
                Antriebsart: g.Antriebsart.toString(),
                Hsntsn: g.Hsntsn.toString(),
                Fahrzeugid: g.Fahrzeugid.toString(),
                FlagMatching: g.Flag_matching.toString(),
            })
            console.log(g)
        })


    },
    complete: function (results, file) {
        console.log('parsing complete read', count, 'records.');
    }
});