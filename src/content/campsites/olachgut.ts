import type { CampsiteConfig } from "../types";

const IMG = "/campsites/olachgut";

const olachgut: CampsiteConfig = {
  name: "Olachgut",
  shortName: "Olachgut",
  slug: "olachgut",
  ort: "St. Georgen am Kreischberg",
  region: "Steiermark",
  brandKind: "Camping · Bauernhof · Reithof",
  regionLong: "Region Murau-Kreischberg · Obersteiermark · Österreich",

  heroVariant: "center",

  claim: "Camping, Bauernhof und Reithof am Kreischberg",
  claimEmphasis: "Bauernhof und Reithof",
  emailDetail: "euer Sanitärhaus mit der Felsendusche unterm Wasserfall",
  intro:
    "Auf einem 10 Hektar großen Wiesengelände am Fuß des Kreischbergs findest du Fünf-Sterne-Camping, einen Erlebnis-Bauernhof mit seltenen Tierrassen und einen eigenen Reithof — Urlaub, bei dem jeder in der Familie seinen Platz hat.",

  logo: { src: `${IMG}/logo.png`, alt: "Olachgut Logo" },

  statement: {
    text: "Bei uns schläfst du im Wohnwagen und hast trotzdem Reithalle, Bauernhof und Hundeparcours gleich vor dem Vorzelt.",
    emphasis: "gleich vor dem Vorzelt",
  },

  pillars: [
    {
      title: "Fünf-Sterne-Camping",
      text: "Komfortstellplätze mit Strom, Wasser und Abwasser auf einem weitläufigen Wiesengelände — ausgezeichnet als einer der beliebtesten Plätze Österreichs.",
      image: { src: `${IMG}/camping-stellplatz.webp`, alt: "Komfortstellplatz mit Wohnwagen am Olachgut, Bergblick" },
    },
    {
      title: "Erlebnis-Bauernhof",
      text: "Brillenschafe, Scheckenziegen, Noriker und Pinzgauer Kühe: Auf dem Hof leben auch vom Aussterben bedrohte Tierrassen ganz nah zum Anfassen.",
      image: { src: `${IMG}/bauernhof-schaf.png`, alt: "Kind mit Brillenschaf am Erlebnis-Bauernhof Olachgut" },
    },
    {
      title: "Eigener Reithof",
      text: "Ob erste Reitstunde oder geübter Ausritt — in der eigenen Reithalle und am Reitplatz lernst du die Pferde Schritt für Schritt kennen.",
      image: { src: `${IMG}/reiten-reitplatz.webp`, alt: "Reiterinnen am Reitplatz des Olachgut vor Bergkulisse" },
    },
  ],

  usps: [
    "5-Sterne-Campingplatz",
    "Eigene Reithalle",
    "Erlebnis-Bauernhof",
    "Doggyland für Hunde",
    "Österr. Umweltzeichen",
    "Murau GästeCard",
  ],

  trust: {
    heading: "Am Olachgut hat jeder seinen Platz",
    headingEmphasis: "jeder seinen Platz",
    intro:
      "Familie Feiel führt das Olachgut als Bauernhof, Campingplatz und Reithof in einem — naturnah, mit dem österreichischen und europäischen Umweltzeichen ausgezeichnet und mitten in der Urlaubsregion Murau-Kreischberg.",
  },

  awards: [
    { label: "Österreichisches & Europäisches Umweltzeichen" },
    { label: "Unter Österreichs 25 beliebtesten Campingplätzen" },
  ],

  hero: {
    aerial: { src: `${IMG}/hero-olachgut.webp`, alt: "Weitläufiges Freizeitgelände des Olachgut mit Spielanlage und Bergen" },
  },

  breather: {
    image: { src: `${IMG}/freizeitteich-pano.webp`, alt: "Wohnmobile am Freizeitteich des Olachgut vor bewaldeten Bergen" },
    line: "Am Freizeitteich verlangsamt sich der Sommertag ganz von selbst.",
  },

  camping: {
    heading: "Fünf Sterne auf zehn Hektar",
    intro:
      "Vom Komfortstellplatz ins Grüne: weitläufige Wiesen auf drei Ebenen, ein Erlebnis-Sanitärhaus und jede Menge Platz zum Ankommen.",
    features: [
      {
        title: "Plätze im 10-ha-Wiesengelände",
        text: "Ein 10 Hektar großes Wiesengrundstück auf drei Ebenen, durch dichte Reihen von Laub- und Nadelbäumen gegliedert — viel Grün zwischen den Plätzen.",
        image: { src: `${IMG}/camping-wiese.webp`, alt: "Zelt und Wohnmobil im baumbestandenen Wiesengelände des Olachgut vor Bergkulisse" },
      },
      {
        title: "Komfortstellplätze",
        text: "Alle Stellplätze haben Strom-, Wasser- und Abwasseranschluss (Eurostecker, 16 A) — Dauerplätze zusätzlich mit fixem Flüssiggasanschluss.",
        image: { src: `${IMG}/camping-komfort.webp`, alt: "Familie am Wohnwagen mit Vorzelt am Komfortstellplatz Olachgut" },
      },
      {
        title: "Erlebnis-Sanitärhaus",
        text: "Felsendusche unter dem Wasserfall, Lichterdusche und ein barrierefreier Sanitärraum machen aus dem Sanitärhaus ein kleines Erlebnis.",
        image: { src: `${IMG}/sanitaerhaus.webp`, alt: "Erlebnis-Sanitärhaus mit Felsenwand und Dusche am Olachgut" },
      },
      {
        title: "Spiel & Action am Platz",
        text: "Street-Soccer-Platz, Veranstaltungspavillon, Hundeagility- und 3D-Bogenparcours sowie viel Wiese zum Toben gehören einfach dazu.",
        image: { src: `${IMG}/spiel-trampolin.webp`, alt: "Kind springt auf dem Trampolin am Olachgut vor Bergpanorama" },
      },
      {
        title: "Hunde herzlich willkommen",
        text: "Im Doggyland mit eigenem Hundeagilityparcours ist dein Vierbeiner gern gesehener Gast — Hund pro Nacht € 5.",
        image: { src: `${IMG}/doggyland.webp`, alt: "Hund springt durch einen Reifen im Doggyland am Olachgut" },
      },
      {
        title: "Auch für Dauercamper",
        text: "Entdecke das Olachgut als zweites Zuhause: Saison- und Jahresstellplätze stehen Dauercampern das ganze Jahr offen.",
        image: { src: `${IMG}/camping-familie.webp`, alt: "Campingfamilie unter dem Sonnensegel am Olachgut" },
      },
    ],
  },

  kinder: {
    heading: "Kinder kommen hier kaum zur Ruhe",
    intro:
      "Ponys, Hoftiere und viel Platz zum Toben — am Olachgut ist der Tag für die Kleinen schneller vorbei, als ihnen lieb ist.",
    features: [
      {
        title: "Tiere zum Greifen nah",
        text: "Brillenschafe, Ziegen und Ponys leben direkt am Hof — Streicheln, Staunen und Mithelfen sind hier ausdrücklich erwünscht.",
        image: { src: `${IMG}/hof-ziege.webp`, alt: "Ziege auf der Bergwiese am Bauernhof Olachgut" },
      },
      {
        title: "Erste Runden am Pony",
        text: "Beim geführten Ponyreiten und der Ponymiete zum Selbstführen machen schon die Kleinsten ihre ersten Reiterfahrungen.",
        image: { src: `${IMG}/kinder-pony.webp`, alt: "Mädchen führt ein Pony über die Wiese am Olachgut" },
      },
      {
        title: "Spielen ohne Ende",
        text: "Gokarts, Spielgeräte und weite Wiesen sorgen dafür, dass zwischen Hof und Campingplatz nie Langeweile aufkommt.",
        image: { src: `${IMG}/kinder-spiel.webp`, alt: "Kinder mit einem Gokart auf dem Gelände des Olachgut" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund ums Olachgut ist immer Saison",
    intro:
      "Baden, Reiten, Wandern und im Winter direkt auf die Piste — die Region Murau-Kreischberg liegt dir das ganze Jahr zu Füßen.",
    items: [
      {
        title: "Baden am Freizeitteich",
        text: "Am hauseigenen Freizeitteich wird geplanscht, gepaddelt und die Sonne genossen — Erholung beginnt direkt am Platz.",
        image: { src: `${IMG}/freizeitteich.webp`, alt: "Kinder mit Schlauchboot am Freizeitteich des Olachgut" },
      },
      {
        title: "Reiten in der Reithalle",
        text: "In der überdachten Reithalle und am Reitplatz finden Anfänger wie Geübte bei jedem Wetter ihre Reitstunde.",
        image: { src: `${IMG}/reithalle.webp`, alt: "Kind reitet in der Reithalle am Olachgut" },
      },
      {
        title: "Wandern am Kreischberg",
        text: "Mit der Gondel hinauf und über sonnige Almwege zurück — Wanderungen für die ganze Familie starten gleich um die Ecke.",
        image: { src: `${IMG}/wandern-gondel.webp`, alt: "Familie wandert unter der Gondelbahn am Kreischberg" },
      },
      {
        title: "Skifahren am Kreischberg",
        text: "Das Skigebiet Kreischberg mit seinen breiten Pisten liegt nur wenige Minuten entfernt — Winterspaß für Groß und Klein.",
        image: { src: `${IMG}/ski-kreischberg.webp`, alt: "Kinder fahren Ski am Kreischberg" },
      },
      {
        title: "Golf & Murtalbahn",
        text: "Golfen in der Region und Ausflüge mit der historischen Murtalbahn runden den aktiven Urlaub im Murtal ab.",
        image: { src: `${IMG}/golf-murtalbahn.webp`, alt: "Golfplatz mit vorbeifahrender Murtalbahn in der Region Murau" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg zum Olachgut",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die S36 Murtal Schnellstraße bis Scheifling, weiter auf B317 und B97 Richtung Murau — das Olachgut liegt bei St. Georgen am Kreischberg, nahe der Talstation Kreischberg.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof St. Georgen ob Murau bzw. Murau-Stolzalpe; die nostalgische Murtalbahn bringt dich durchs Tal — letzte Minuten per Abholung auf Anfrage.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Die Flughäfen Salzburg, Graz und Klagenfurt liegen jeweils rund 1,5 Stunden Fahrt entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Ein Tag am Olachgut",
    headingEmphasis: "am Olachgut",
    intro:
      "Vom Empfang unter dem Olachgut-Tor bis zum verschneiten Gipfel — ein paar Eindrücke vom Hof, den Tieren und der Region.",
    tag: "Sommer & Winter",
    moreCount: 24,
    images: [
      { src: `${IMG}/olachgut-tor.webp`, alt: "Eingangstor mit Schriftzug Olachgut, Kinder auf Gokarts" },
      { src: `${IMG}/bauernhaus.webp`, alt: "Bauernhaus des Olachgut mit blühenden Rosen" },
      { src: `${IMG}/haflinger.webp`, alt: "Haflinger-Pferd mit Betreuerin am Olachgut" },
      { src: `${IMG}/winterwandern.webp`, alt: "Winterwanderung mit Blick über die verschneiten Berge der Region Murau" },
    ],
  },

  booking: {
    heading: "Dein Olachgut-Urlaub beginnt hier",
    headingEmphasis: "Olachgut-Urlaub",
    intro:
      "Wähle Unterkunft, Zeitraum und Personen — Familie Feiel meldet sich persönlich mit deiner Verfügbarkeit am Olachgut.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Nacht in der jeweils günstigsten Saison 2025/26 · Komfortstellplatz für 2 Personen inkl. 5 kW Strom & Dusche · Campingpod inkl. 2 Personen, Bettwäsche & Geschirr · Ferienwohnung/Ferienhaus je Einheit · zzgl. Ortstaxe (€ 2–2,50/Person) und Endreinigung — andere Saisonen höher.",
    highlight: {
      title: "Vier Urlaube an einem Ort",
      text: "Camping, Bauernhof, Reithof und Doggyland — am Olachgut musst du dich nicht entscheiden.",
    },
    categories: [
      { id: "stellplatz", label: "Komfortstellplatz", perNight: 39, perExtraGuest: 11.2 },
      { id: "campingpod", label: "Campingpod (2 Pers.)", perNight: 66.5, perExtraGuest: 13 },
      { id: "ferienwohnung", label: "Ferienwohnung (4 Pers.)", perNight: 105 },
      { id: "ferienhaus", label: "Ferienhaus XXL (bis 17 Pers.)", perNight: 220 },
    ],
  },

  kontakt: {
    coords: { lat: 47.10728, lng: 14.139732 },
    tel: "+43 3532 2162",
    telHref: "tel:+4335322162",
    mail: "office@olachgut.at",
    facebook: "https://www.facebook.com/Olachgut/",
    adresse: "Kaindorf 90 · 8861 St. Georgen am Kreischberg · Steiermark",
  },

  languages: ["DE", "EN", "NL", "HU"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitärhaus", href: "#camping" },
      ],
    },
    { label: "Für Kinder", href: "#kinder" },
    { label: "Aktiv & Reiten", href: "#aktivitaeten" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default olachgut;
