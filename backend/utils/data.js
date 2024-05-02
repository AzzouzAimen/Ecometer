const FixedPosteAttributs = [
  {
    index: "1.1",
    postName: "Emissions directes des postNames fixes de combustion",
    category: "Combustibles",
    Scope: "1",
  },
  {
    index: "1.2",
    postName: "Emissions directes des sources mobiles de combustion",
    category: "Combustibles",
    Scope: "1",
  },
  {
    index: "1.3",
    postName: "Emissions directes des procédés hors énergie",
    category: "ProcessEtEmissionFugitives",
    Scope: "1",
  },
  {
    index: "1.4",
    postName: "Emissions directes fugitives",
    category: "ProcessEtEmissionFugitives",
    Scope: "1",
  },
  {
    index: "1.5",
    postName: "Émissions issues de la biomasse (sols et forêts)",
    category: "UTCF",
    Scope: "1",
  },
  {
    index: "2.1",
    postName: "Emissions indirectes liées à la consommation d'électricité",
    category: "Electricite",
    Scope: "2",
  },
  {
    index: "2.2",
    postName:
      "Emissions indirectes liées à la consommation d'énergie autre que l'électricité",
    category: "ReseauxDeChaleurEtFroid",
    Scope: "2",
  },
  {
    index: "3.1",
    postName: "Transport de marchandise amont",
    category: "TransportDeMarchandises",
    Scope: "3",
  },
  {
    index: "3.2",
    postName: "Transport de marchandise aval",
    category: "TransportDeMarchandises",
    Scope: "3",
  },
  {
    index: "3.3",
    postName: "Déplacements domicile-travail",
    category: "TransportDePersonnes",
    Scope: "3",
  },
  {
    index: "3.4",
    postName: "Déplacements des visiteurs et des clients ",
    category: "TransportDePersonnes",
    Scope: "3",
  },
  {
    index: "3.5",
    postName: "Déplacements professionnels",
    category: "TransportDePersonnes",
    Scope: "3",
  },
  {
    index: "4.1",
    postName: "Achats de biens",
    category: "AchatsDeBiens",
    Scope: "3",
  },
  {
    index: "4.2",
    postName: "Immobilisations de biens",
    category: "AchatsDeBiens",
    Scope: "3",
  },
  {
    index: "4.3",
    postName: "Gestion des déchets",
    category: "TraitementDesDechets",
    Scope: "3",
  },
  {
    index: "4.4",
    postName: "Actifs en leasing amont",
    category: "Combustibles",
    Scope: "3",
  },
  {
    index: "4.5",
    postName: "Achats de services",
    category: "AchatsDeServices",
    Scope: "3",
  },
  {
    index: "5.1",
    postName: "Utilisation des produits vendus ",
    category: "Combustibles",
    Scope: "3",
  },
  {
    index: "5.2",
    postName: "Actifs en leasing aval ",
    category: "Combustibles",
    Scope: "3",
  },
  {
    index: "5.3",
    postName: "Fin de vie des produits vendus",
    category: "TraitementDesDechets",
    Scope: "3",
  },
  {
    index: "5.4",
    postName: "Investissements",
    category: "Combustibles",
    Scope: "3",
  },
  {
    index: "6.1",
    postName: "Autres émissions indirecte",
    category: "Combustibles",
    Scope: "1",
  },
];

module.exports = { FixedPosteAttributs }