import type { CampsiteConfig } from "../types";

/**
 * Olachgut Camping GmbH — St. Georgen am Kreischberg, Steiermark.
 * Quelle: leads/olachgut/raw/digest (Stand Scrape). 100 % quellbelegt, Du-Anrede.
 * Design FIX: kein theme (Original-Palette), heroVariant "center".
 */
const IMG = "/campsites/olachgut";

const olachgut: CampsiteConfig = {
  name: "Camping Olachgut",
  shortName: "Olachgut",
  slug: "olachgut",
  ort: "St. Georgen am Kreischberg",
  region: "Steiermark",
  brandKind: "5-Sterne-Camping am Bauernhof",
  regionLong: "Region Murau-Kreischberg · Obersteiermark · Österreich",

  heroVariant: "center",

  claim: "Fünf-Sterne-Camping am Erlebnis-Bauernhof",
  claimEmphasis: "Erlebnis-Bauernhof",
  emailDetail: "euer Erlebnis-Sanitärhaus mit der Felsendusche unterm Wasserfall",
  intro:
    "Fünf-Sterne-Komfort auf zehn Hektar Wiese, ein Erlebnis-Bauernhof mit seltenen Tierrassen und eine eigene Reithalle — am Olachgut in St. Georgen verbringst du deinen Urlaub mitten in der Region Murau-Kreischberg.",

  logo: { src: `${IMG}/logo-9d2fbfce6f.png`, alt: "Olachgut Logo" },

  statement: {
    text: "Bei uns wohnst du auf zehn Hektar Wiese — zwischen Komfortstellplatz, Reithalle und einem Bauernhof voller Tiere.",
    emphasis: "zehn Hektar Wiese",
  },

  pillars: [
    {
      title: "Fünf-Sterne-Camping",
      text: "Komfortstellplätze mit Strom, Wasser und Abwasser, ein Erlebnis-Sanitärhaus und Platz auf drei sonnigen Wiesenebenen.",
      image: { src: `${IMG}/gallery-fe26a7916d.webp`, alt: "Campingfamilie unter dem Vorzelt am Olachgut, Murau-Kreischberg" },
    },
    {
      title: "Erlebnis-Bauernhof",
      text: "Kärntner Brillenschafe, Scheckenziegen, Noriker und Pinzgauer Kühe — am Olachgut leben seltene Tierrassen artgerecht und zum Anfassen nah.",
      image: { src: `${IMG}/gallery-51205b08ad.webp`, alt: "Ziege auf der Bauernhofwiese am Olachgut" },
    },
    {
      title: "Reitparadies Olachgut",
      text: "Eine eigene Reithalle, geprüftes Fachpersonal und geduldige Pferde: Reiten lernst du hier bei jedem Wetter, vom Kind bis zum Profi.",
      image: { src: `${IMG}/gallery-46bb0ad205.webp`, alt: "Zwei Reiterinnen im Reitplatz am Olachgut mit Bergkulisse" },
    },
  ],

  usps: [
    "Fünf-Sterne-Campingplatz",
    "Eigene Reithalle & Ponys",
    "Erlebnis-Bauernhof",
    "Doggyland für Hunde",
    "Umweltzeichen-Betrieb",
  ],

  trust: {
    heading: "Camping, Bauernhof und Reithof in einem",
    headingEmphasis: "in einem",
    intro:
      "Familie Feiel führt das Olachgut als Fünf-Sterne-Campingplatz, Erlebnis-Bauernhof und Reithof zugleich — ausgezeichnet mit dem österreichischen und europäischen Umweltzeichen für nachhaltigen Urlaub.",
  },

  awards: [
    { label: "Österreichisches & Europäisches Umweltzeichen" },
    { label: "Unter Österreichs 25 beliebtesten Campingplätzen" },
  ],

  hero: {
    aerial: { src: `${IMG}/gallery-ea83586228.webp`, alt: "Wohnmobile auf der Campingwiese am Freizeitteich des Olachgut, Murau-Kreischberg" },
  },

  camping: {
    heading: "Dein Stellplatz am Olachgut",
    intro:
      "Zehn Hektar Wiese auf drei Ebenen, gegliedert durch alte Laub- und Nadelbäume: Komfortstellplätze mit allem Anschluss, ein Erlebnis-Sanitärhaus und jede Menge Platz zum Spielen.",
    features: [
      {
        title: "Komfortstellplätze",
        text: "Alle Plätze mit Strom-, Wasser- und Abwasseranschluss (Eurostecker, 16 Ampere) — Dauerplätze zusätzlich mit fixem Flüssiggasanschluss.",
        image: { src: `${IMG}/gallery-e73355da28.webp`, alt: "Komfortstellplatz mit Wohnwagen und Vorzelt am Olachgut" },
      },
      {
        title: "Erlebnis-Sanitärhaus",
        text: "Duschen unter dem Wasserfall, eine Lichterdusche und ein barrierefreier Sanitärraum — hier wird das Waschen zum Erlebnis.",
        image: { src: `${IMG}/amenity-585f67edf7.webp`, alt: "Erlebnis-Sanitärhaus mit Felswänden am Olachgut" },
      },
      {
        title: "Eigener Freizeitteich",
        text: "Am hauseigenen Freizeitteich kommen Erholungssuchende und planschende Kinder gleichermaßen voll auf ihre Kosten.",
        image: { src: `${IMG}/activity-14284e9e43.webp`, alt: "Kinder mit Schlauchboot am Freizeitteich des Olachgut" },
      },
      {
        title: "Doggyland & Agility",
        text: "Hunde sind herzlich willkommen — im Doggyland warten ein Agilityparcours und viel Auslauf auf deinen Vierbeiner.",
        image: { src: `${IMG}/gallery-c79436ea3c.webp`, alt: "Hund springt durch den Reifen im Doggyland am Olachgut" },
      },
      {
        title: "Dauercamping",
        text: "Dein zweites Zuhause: Dauer- und Saisonplätze für alle, die das Olachgut zu jeder Jahreszeit genießen möchten.",
        image: { src: `${IMG}/gallery-cf0a4ce258.webp`, alt: "Dauercamper mit Wohnwagen und Sonnensegel am Olachgut" },
      },
      {
        title: "Freizeitanlage & Sport",
        text: "Street-Soccer-Platz, Hüpfkissen, Riesenschach, Veranstaltungspavillon und ein 3D-Bogenparcours — hier kommt keine Langeweile auf.",
        image: { src: `${IMG}/gallery-8c2a0636c5.webp`, alt: "Freizeitanlage mit Hüpfkissen und Riesenschach am Olachgut" },
      },
    ],
  },

  mobilheime: {
    heading: "Unterkünfte am Bauernhof",
    intro:
      "Kein Zelt dabei? Im Bauernhaus und in der alten Mühle warten Ferienwohnungen, ein Ferienhaus und gemütliche Komfortzimmer auf dich.",
    items: [
      {
        name: "Appartements im Bauernhaus",
        kind: "Ferienwohnung Typ B · 3–4 Personen",
        text: "Zwei gemütliche Appartements im Bauernhaus mit Schlafzimmer sowie Wohn- und Schlafraum.",
        image: { src: `${IMG}/accommodation-a40edacab4.webp`, alt: "Bauernhaus mit Appartements am Olachgut" },
        priceFrom: 105,
        features: ["3–4 Personen", "Eigene Küche", "Mitten am Hof"],
      },
      {
        name: "Ferienhaus mit zwei Wohnungen",
        kind: "Ferienwohnung Typ C · 4–5 Personen",
        text: "Großzügiges Ferienhaus mit zwei Appartements, Kinderzimmer und eigenem Sanitärbereich.",
        image: { src: `${IMG}/accommodation-dd0bde301d.webp`, alt: "Ferienhaus am Olachgut mit Blick auf die Hofwiese" },
        priceFrom: 125,
        features: ["4–5 Personen", "Kinderzimmer", "Voll ausgestattet"],
      },
      {
        name: "Komfortzimmer",
        kind: "Doppelzimmer mit Frühstück",
        text: "Helle Komfortzimmer mit Frühstück oder Halbpension — ideal für einen kurzen Aufenthalt.",
        image: { src: `${IMG}/gallery-dbaf6d7036.webp`, alt: "Komfortzimmer mit Holzbett am Olachgut" },
        priceFrom: 50,
        features: ["Frühstück möglich", "Halbpension buchbar", "Ruhige Lage"],
      },
    ],
  },

  kinder: {
    heading: "Für kleine Bauernhof-Fans",
    headingEmphasis: "Bauernhof-Fans",
    intro:
      "Ponys streicheln, Schafe füttern, auf dem Hüpfkissen toben — am Olachgut sind Kinder den ganzen Tag draußen und mittendrin.",
    features: [
      {
        title: "Hüpfkissen & Spielwiese",
        text: "Auf dem großen Hüpfkissen, beim Riesenschach und auf der weiten Spielwiese mit Bergblick ist den ganzen Tag etwas los.",
        image: { src: `${IMG}/kids-e2b75fecf2.webp`, alt: "Kind springt auf dem Trampolin der Freizeitanlage am Olachgut" },
      },
      {
        title: "Ponys zum Liebhaben",
        text: "Unsere geduldigen Ponys lassen sich striegeln, führen und bei den ersten Reitversuchen liebevoll an der Longe bewegen.",
        image: { src: `${IMG}/gallery-e09bd00161.webp`, alt: "Mädchen führt ein Pony über die Wiese am Olachgut" },
      },
      {
        title: "Tiere zum Anfassen",
        text: "Brillenschafe, Ziegen und Hofkatzen freuen sich über Besuch — am Erlebnis-Bauernhof kommen Kinder den Tieren ganz nah.",
        image: { src: `${IMG}/award-4585a74394.png`, alt: "Kind umarmt ein Schaf am Bauernhof des Olachgut" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv in Murau-Kreischberg",
    intro:
      "Vom Sattel auf den Berg: Reiten, Radeln, Wandern und im Winter Skifahren am Kreischberg — rund ums Olachgut wird es nie langweilig.",
    items: [
      {
        title: "Reitstunden in der Reithalle",
        text: "Geprüftes Fachpersonal unterrichtet im Sommer in der eigenen Reithalle — vom Schnuppern an der Longe bis zur Privatstunde.",
        image: { src: `${IMG}/gallery-c180269d90.webp`, alt: "Kind reitet in der Reithalle am Olachgut" },
      },
      {
        title: "Radeln durch die Region",
        text: "Direkt vom Hof starten Rad- und Wanderwege durch die grüne Region Murau hinein in die Obersteiermark.",
        image: { src: `${IMG}/gallery-0591d4535b.webp`, alt: "Kind mit Fahrrad vor dem Olachgut in Murau-Kreischberg" },
      },
      {
        title: "Bergsommer am Kreischberg",
        text: "Mit der Gondel hinauf und über Almwiesen zurück — der Kreischberg liegt nur wenige Minuten vom Olachgut entfernt.",
        image: { src: `${IMG}/gallery-14af182217.webp`, alt: "Familie wandert unter der Gondelbahn am Kreischberg" },
      },
      {
        title: "Skifahren am Kreischberg",
        text: "Im Winter wird das Olachgut zum Basislager: Das Skigebiet Kreischberg mit Kinderland ist schnell erreicht.",
        image: { src: `${IMG}/gallery-3fd8f30589.webp`, alt: "Kinder beim Skikurs am Kreischberg nahe dem Olachgut" },
      },
      {
        title: "Winter abseits der Piste",
        text: "Schneeschuhwandern und stille Winterwege führen direkt aus der Region hinauf in die verschneiten Wälder.",
        image: { src: `${IMG}/activity-561a4155ce.webp`, alt: "Schneeschuhwanderin über dem winterlichen Murtal" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Murtal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauernautobahn (A10) bis St. Michael im Lungau, dann via Tamsweg Richtung Murau und Kreischberg — der Ort liegt auf 864 m Seehöhe.",
      },
      {
        title: "Aus dem Osten",
        text: "Aus Wien über Semmering, Bruck an der Mur, Judenburg und Scheifling nach Murau, dann weiter Richtung Kreischberg.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Anreise per Bahn ins Murtal; Murtalbahn und Regionalbusse bringen dich bis in die Region Murau-Kreischberg.",
      },
    ],
  },

  galerie: {
    heading: "Olachgut in Bildern",
    headingEmphasis: "Olachgut",
    intro:
      "Vom Willkommensbogen bis zur Bauernhofwiese — ein paar Eindrücke aus dem Urlaub am Olachgut.",
    tag: "Sommer & Winter",
    moreCount: 40,
    images: [
      { src: `${IMG}/gallery-1e5418bf16.webp`, alt: "Golferin mit Murtalbahn im Hintergrund, nahe dem Olachgut" },
      { src: `${IMG}/gallery-4fd1738ee3.webp`, alt: "Kinder beim gemeinsamen Essen am Olachgut" },
      { src: `${IMG}/gallery-7036a58ccd.webp`, alt: "Enten am Wasser am Olachgut" },
      { src: `${IMG}/gallery-a8835ccd2e.webp`, alt: "Willkommensbogen am Eingang zum Olachgut" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Olachgut",
    headingEmphasis: "am Olachgut",
    intro:
      "Sag uns Zeitraum und Personen — Familie Feiel meldet sich persönlich mit deiner Verfügbarkeit und einem ehrlichen Preis.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise Vor-/Nachsaison: Stellplatz inkl. 5 kW Strom & Dusche für 2 Personen; Campingpod für 2 Pers. inkl. Bettwäsche & Geschirr ab € 66,50 (Vor-/Nachsaison), € 70 im Winter & Sommer — im Sommer höher; zzgl. Nächtigungsabgabe (€ 2) & Umweltbeitrag (€ 1) pro Nacht.",
    highlight: { title: "Fünf Sterne am Bauernhof", text: "Komfortcamping, Reithalle und Tiere — alles auf einem Platz." },
    categories: [
      { id: "stellplatz", label: "Komfortstellplatz", perNight: 39, perExtraGuest: 11 },
      { id: "campingpod", label: "Campingpod (2 Pers.)", perNight: 66.5, perExtraGuest: 16 },
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
        { label: "Sanitär & Freizeit", href: "#camping" },
      ],
    },
    { label: "Bauernhof & Kinder", href: "#kinder" },
    { label: "Reiten & Aktiv", href: "#aktivitaeten" },
    { label: "Unterkünfte", href: "#mobilheime" },
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
