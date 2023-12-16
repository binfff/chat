// osm 地区名称集合
const nameegion = [{
  "value": "Aachen",
  "label": "Aachen"
}, {
  "value": "Aarhus",
  "label": "Aarhus"
}, {
  "value": "Adelaide",
  "label": "Adelaide"
}, {
  "value": "Albuquerque",
  "label": "Albuquerque"
}, {
  "value": "Alexandria",
  "label": "Alexandria"
}, {
  "value": "Amsterdam",
  "label": "Amsterdam"
}, {
  "value": "Antwerpen",
  "label": "Antwerpen"
}, {
  "value": "Arnhem",
  "label": "Arnhem"
}, {
  "value": "Auckland",
  "label": "Auckland"
}, {
  "value": "Augsburg",
  "label": "Augsburg"
}, {
  "value": "Austin",
  "label": "Austin"
}, {
  "value": "Baghdad",
  "label": "Baghdad"
}, {
  "value": "Baku",
  "label": "Baku"
}, {
  "value": "Balaton",
  "label": "Balaton"
}, {
  "value": "Bamberg",
  "label": "Bamberg"
}, {
  "value": "Bangkok",
  "label": "Bangkok"
}, {
  "value": "Barcelona",
  "label": "Barcelona"
}, {
  "value": "Basel",
  "label": "Basel"
}, {
  "value": "Beijing",
  "label": "Beijing"
}, {
  "value": "Beirut",
  "label": "Beirut"
}, {
  "value": "Berkeley",
  "label": "Berkeley"
}, {
  "value": "Berlin",
  "label": "Berlin"
}, {
  "value": "Bern",
  "label": "Bern"
}, {
  "value": "Bielefeld",
  "label": "Bielefeld"
}, {
  "value": "Birmingham",
  "label": "Birmingham"
}, {
  "value": "Bochum",
  "label": "Bochum"
}, {
  "value": "Bogota",
  "label": "Bogota"
}, {
  "value": "Bombay",
  "label": "Bombay"
}, {
  "value": "Bonn",
  "label": "Bonn"
}, {
  "value": "Bordeaux",
  "label": "Bordeaux"
}, {
  "value": "Boulder",
  "label": "Boulder"
}, {
  "value": "BrandenburgHavel",
  "label": "BrandenburgHavel"
}, {
  "value": "Braunschweig",
  "label": "Braunschweig"
}, {
  "value": "Bremen",
  "label": "Bremen"
}, {
  "value": "Bremerhaven",
  "label": "Bremerhaven"
}, {
  "value": "Brisbane",
  "label": "Brisbane"
}, {
  "value": "Bristol",
  "label": "Bristol"
}, {
  "value": "Brno",
  "label": "Brno"
}, {
  "value": "Bruegge",
  "label": "Bruegge"
}, {
  "value": "Bruessel",
  "label": "Bruessel"
}, {
  "value": "Budapest",
  "label": "Budapest"
}, {
  "value": "BuenosAires",
  "label": "BuenosAires"
}, {
  "value": "Cairo",
  "label": "Cairo"
}, {
  "value": "Calgary",
  "label": "Calgary"
}, {
  "value": "Cambridge",
  "label": "Cambridge"
}, {
  "value": "CambridgeMa",
  "label": "CambridgeMa"
}, {
  "value": "Canberra",
  "label": "Canberra"
}, {
  "value": "CapeTown",
  "label": "CapeTown"
}, {
  "value": "Chemnitz",
  "label": "Chemnitz"
}, {
  "value": "Chicago",
  "label": "Chicago"
}, {
  "value": "ClermontFerrand",
  "label": "ClermontFerrand"
}, {
  "value": "Colmar",
  "label": "Colmar"
}, {
  "value": "Copenhagen",
  "label": "Copenhagen"
}, {
  "value": "Cork",
  "label": "Cork"
}, {
  "value": "Corsica",
  "label": "Corsica"
}, {
  "value": "Corvallis",
  "label": "Corvallis"
}, {
  "value": "Cottbus",
  "label": "Cottbus"
}, {
  "value": "Cracow",
  "label": "Cracow"
}, {
  "value": "CraterLake",
  "label": "CraterLake"
}, {
  "value": "Curitiba",
  "label": "Curitiba"
}, {
  "value": "Cusco",
  "label": "Cusco"
}, {
  "value": "Dallas",
  "label": "Dallas"
}, {
  "value": "Darmstadt",
  "label": "Darmstadt"
}, {
  "value": "Davis",
  "label": "Davis"
}, {
  "value": "DenHaag",
  "label": "DenHaag"
}, {
  "value": "Denver",
  "label": "Denver"
}, {
  "value": "Dessau",
  "label": "Dessau"
}, {
  "value": "Dortmund",
  "label": "Dortmund"
}, {
  "value": "Dresden",
  "label": "Dresden"
}, {
  "value": "Dublin",
  "label": "Dublin"
}, {
  "value": "Duesseldorf",
  "label": "Duesseldorf"
}, {
  "value": "Duisburg",
  "label": "Duisburg"
}, {
  "value": "Edinburgh",
  "label": "Edinburgh"
}, {
  "value": "Eindhoven",
  "label": "Eindhoven"
}, {
  "value": "Emden",
  "label": "Emden"
}, {
  "value": "Erfurt",
  "label": "Erfurt"
}, {
  "value": "Erlangen",
  "label": "Erlangen"
}, {
  "value": "Eugene",
  "label": "Eugene"
}, {
  "value": "Flensburg",
  "label": "Flensburg"
}, {
  "value": "FortCollins",
  "label": "FortCollins"
}, {
  "value": "Frankfurt",
  "label": "Frankfurt"
}, {
  "value": "FrankfurtOder",
  "label": "FrankfurtOder"
}, {
  "value": "Freiburg",
  "label": "Freiburg"
}, {
  "value": "Gdansk",
  "label": "Gdansk"
}, {
  "value": "Genf",
  "label": "Genf"
}, {
  "value": "Gent",
  "label": "Gent"
}, {
  "value": "Gera",
  "label": "Gera"
}, {
  "value": "Glasgow",
  "label": "Glasgow"
}, {
  "value": "Gliwice",
  "label": "Gliwice"
}, {
  "value": "Goerlitz",
  "label": "Goerlitz"
}, {
  "value": "Goeteborg",
  "label": "Goeteborg"
}, {
  "value": "Goettingen",
  "label": "Goettingen"
}, {
  "value": "Graz",
  "label": "Graz"
}, {
  "value": "Groningen",
  "label": "Groningen"
}, {
  "value": "Halifax",
  "label": "Halifax"
}, {
  "value": "Halle",
  "label": "Halle"
}, {
  "value": "Hamburg",
  "label": "Hamburg"
}, {
  "value": "Hamm",
  "label": "Hamm"
}, {
  "value": "Hannover",
  "label": "Hannover"
}, {
  "value": "Heilbronn",
  "label": "Heilbronn"
}, {
  "value": "Helsinki",
  "label": "Helsinki"
}, {
  "value": "Hertogenbosch",
  "label": "Hertogenbosch"
}, {
  "value": "Huntsville",
  "label": "Huntsville"
}, {
  "value": "Innsbruck",
  "label": "Innsbruck"
}, {
  "value": "Istanbul",
  "label": "Istanbul"
}, {
  "value": "Jena",
  "label": "Jena"
}, {
  "value": "Jerusalem",
  "label": "Jerusalem"
}, {
  "value": "Johannesburg",
  "label": "Johannesburg"
}, {
  "value": "Kaiserslautern",
  "label": "Kaiserslautern"
}, {
  "value": "Karlsruhe",
  "label": "Karlsruhe"
}, {
  "value": "Kassel",
  "label": "Kassel"
}, {
  "value": "Katowice",
  "label": "Katowice"
}, {
  "value": "Kaunas",
  "label": "Kaunas"
}, {
  "value": "Kiel",
  "label": "Kiel"
}, {
  "value": "Kiew",
  "label": "Kiew"
}, {
  "value": "Koblenz",
  "label": "Koblenz"
}, {
  "value": "Koeln",
  "label": "Koeln"
}, {
  "value": "Konstanz",
  "label": "Konstanz"
}, {
  "value": "LaPaz",
  "label": "LaPaz"
}, {
  "value": "LaPlata",
  "label": "LaPlata"
}, {
  "value": "LakeGarda",
  "label": "LakeGarda"
}, {
  "value": "Lausanne",
  "label": "Lausanne"
}, {
  "value": "Leeds",
  "label": "Leeds"
}, {
  "value": "Leipzig",
  "label": "Leipzig"
}, {
  "value": "Lima",
  "label": "Lima"
}, {
  "value": "Linz",
  "label": "Linz"
}, {
  "value": "Lisbon",
  "label": "Lisbon"
}, {
  "value": "Liverpool",
  "label": "Liverpool"
}, {
  "value": "Ljubljana",
  "label": "Ljubljana"
}, {
  "value": "Lodz",
  "label": "Lodz"
}, {
  "value": "London",
  "label": "London"
}, {
  "value": "Luebeck",
  "label": "Luebeck"
}, {
  "value": "Luxemburg",
  "label": "Luxemburg"
}, {
  "value": "Lyon",
  "label": "Lyon"
}, {
  "value": "Maastricht",
  "label": "Maastricht"
}, {
  "value": "Madison",
  "label": "Madison"
}, {
  "value": "Madrid",
  "label": "Madrid"
}, {
  "value": "Magdeburg",
  "label": "Magdeburg"
}, {
  "value": "Mainz",
  "label": "Mainz"
}, {
  "value": "Malmoe",
  "label": "Malmoe"
}, {
  "value": "Manchester",
  "label": "Manchester"
}, {
  "value": "Mannheim",
  "label": "Mannheim"
}, {
  "value": "Marseille",
  "label": "Marseille"
}, {
  "value": "Melbourne",
  "label": "Melbourne"
}, {
  "value": "Memphis",
  "label": "Memphis"
}, {
  "value": "MexicoCity",
  "label": "MexicoCity"
}, {
  "value": "Miami",
  "label": "Miami"
}, {
  "value": "Minsk",
  "label": "Minsk"
}, {
  "value": "Moenchengladbach",
  "label": "Moenchengladbach"
}, {
  "value": "Montevideo",
  "label": "Montevideo"
}, {
  "value": "Montpellier",
  "label": "Montpellier"
}, {
  "value": "Montreal",
  "label": "Montreal"
}, {
  "value": "Moscow",
  "label": "Moscow"
}, {
  "value": "Muenchen",
  "label": "Muenchen"
}, {
  "value": "Muenster",
  "label": "Muenster"
}, {
  "value": "NewDelhi",
  "label": "NewDelhi"
}, {
  "value": "NewOrleans",
  "label": "NewOrleans"
}, {
  "value": "NewYork",
  "label": "NewYork"
}, {
  "value": "Nuernberg",
  "label": "Nuernberg"
}, {
  "value": "Oldenburg",
  "label": "Oldenburg"
}, {
  "value": "Oranienburg",
  "label": "Oranienburg"
}, {
  "value": "Orlando",
  "label": "Orlando"
}, {
  "value": "Oslo",
  "label": "Oslo"
}, {
  "value": "Osnabrueck",
  "label": "Osnabrueck"
}, {
  "value": "Ostrava",
  "label": "Ostrava"
}, {
  "value": "Ottawa",
  "label": "Ottawa"
}, {
  "value": "Paderborn",
  "label": "Paderborn"
}, {
  "value": "Palma",
  "label": "Palma"
}, {
  "value": "PaloAlto",
  "label": "PaloAlto"
}, {
  "value": "Paris",
  "label": "Paris"
}, {
  "value": "Perth",
  "label": "Perth"
}, {
  "value": "Philadelphia",
  "label": "Philadelphia"
}, {
  "value": "PhnomPenh",
  "label": "PhnomPenh"
}, {
  "value": "Portland",
  "label": "Portland"
}, {
  "value": "PortlandME",
  "label": "PortlandME"
}, {
  "value": "Porto",
  "label": "Porto"
}, {
  "value": "PortoAlegre",
  "label": "PortoAlegre"
}, {
  "value": "Potsdam",
  "label": "Potsdam"
}, {
  "value": "Poznan",
  "label": "Poznan"
}, {
  "value": "Prag",
  "label": "Prag"
}, {
  "value": "Providence",
  "label": "Providence"
}, {
  "value": "Regensburg",
  "label": "Regensburg"
}, {
  "value": "Riga",
  "label": "Riga"
}, {
  "value": "RiodeJaneiro",
  "label": "RiodeJaneiro"
}, {
  "value": "Rostock",
  "label": "Rostock"
}, {
  "value": "Rotterdam",
  "label": "Rotterdam"
}, {
  "value": "Ruegen",
  "label": "Ruegen"
}, {
  "value": "Saarbruecken",
  "label": "Saarbruecken"
}, {
  "value": "Sacramento",
  "label": "Sacramento"
}, {
  "value": "Saigon",
  "label": "Saigon"
}, {
  "value": "Salzburg",
  "label": "Salzburg"
}, {
  "value": "SanFrancisco",
  "label": "SanFrancisco"
}, {
  "value": "SanJose",
  "label": "SanJose"
}, {
  "value": "SanktPetersburg",
  "label": "SanktPetersburg"
}, {
  "value": "SantaBarbara",
  "label": "SantaBarbara"
}, {
  "value": "SantaCruz",
  "label": "SantaCruz"
}, {
  "value": "Santiago",
  "label": "Santiago"
}, {
  "value": "Sarajewo",
  "label": "Sarajewo"
}, {
  "value": "Schwerin",
  "label": "Schwerin"
}, {
  "value": "Seattle",
  "label": "Seattle"
}, {
  "value": "Seoul",
  "label": "Seoul"
}, {
  "value": "Sheffield",
  "label": "Sheffield"
}, {
  "value": "Singapore",
  "label": "Singapore"
}, {
  "value": "Sofia",
  "label": "Sofia"
}, {
  "value": "Stockholm",
  "label": "Stockholm"
}, {
  "value": "Stockton",
  "label": "Stockton"
}, {
  "value": "Strassburg",
  "label": "Strassburg"
}, {
  "value": "Stuttgart",
  "label": "Stuttgart"
}, {
  "value": "Sucre",
  "label": "Sucre"
}, {
  "value": "Sydney",
  "label": "Sydney"
}, {
  "value": "Szczecin",
  "label": "Szczecin"
}, {
  "value": "Tallinn",
  "label": "Tallinn"
}, {
  "value": "Tehran",
  "label": "Tehran"
}, {
  "value": "Tilburg",
  "label": "Tilburg"
}, {
  "value": "Tokyo",
  "label": "Tokyo"
}, {
  "value": "Toronto",
  "label": "Toronto"
}, {
  "value": "Toulouse",
  "label": "Toulouse"
}, {
  "value": "Trondheim",
  "label": "Trondheim"
}, {
  "value": "Tucson",
  "label": "Tucson"
}, {
  "value": "Turin",
  "label": "Turin"
}, {
  "value": "UlanBator",
  "label": "UlanBator"
}, {
  "value": "Ulm",
  "label": "Ulm"
}, {
  "value": "Usedom",
  "label": "Usedom"
}, {
  "value": "Utrecht",
  "label": "Utrecht"
}, {
  "value": "Vancouver",
  "label": "Vancouver"
}, {
  "value": "Victoria",
  "label": "Victoria"
}, {
  "value": "WarenMueritz",
  "label": "WarenMueritz"
}, {
  "value": "Warsaw",
  "label": "Warsaw"
}, {
  "value": "WashingtonDC",
  "label": "WashingtonDC"
}, {
  "value": "Waterloo",
  "label": "Waterloo"
}, {
  "value": "Wien",
  "label": "Wien"
}, {
  "value": "Wroclaw",
  "label": "Wroclaw"
}, {
  "value": "Wuerzburg",
  "label": "Wuerzburg"
}, {
  "value": "Wuppertal",
  "label": "Wuppertal"
}, {
  "value": "Zagreb",
  "label": "Zagreb"
}, {
  "value": "Zuerich",
  "label": "Zuerich"
}]
export default nameegion