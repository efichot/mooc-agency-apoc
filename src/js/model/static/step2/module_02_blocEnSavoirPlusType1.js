import moduleTypes from '../moduleTypes';

const module_02_blocEnSavoirPlusType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: `Principaux indices de référence (ou benchmark en anglais) du marché des actions`,
  cards: [
    {
      color: 'rgba(255,92,49,1.00)',
      hoverColor: 'rgba(249,166,141,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Indice du marché actions',
      cardContent: {
        __html: `Paniers d’actions sélectionnées selon un certain nombre de critères comme la place de cotation, la capitalisation boursière, le secteur d’activité, la zone géographique… Ils servent de repère pour analyser la performance des fonds. Ils n’incluent ni frais de transaction, ni frais de gestion.
       
      Citons par exemple le CAC 40 composé de 40 des plus grosses capitalisations boursières françaises, le MSCI EMU, le S&amp;P 500 et le MSCI EMERGING MARKETS respectivement représentatifs des quelque 240 principales capitalisations de la zone Euro, des 500 principales entreprises américaines et des quelque 820 principales entreprises des pays émergents.`
      },
      cardSubTitle: `cf. Glossaire`
    },
    {
      color: 'rgba(0,142,59,1.00)',
      hoverColor: 'rgba(118,191,145,1.00)',
      startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Indice des marchés obligataires',
      cardContent: {
        __html: `Paniers d’obligations ou de titres monétaires respectant des critères de devise, catégorie d’émetteur (État, entreprises…), durée comprise dans une certaine plage (typiquement : 1-3 ans, 3-5 ans, 7-10 ans, 10 ans et +). … Ils servent de repère pour analyser la performance des fonds. Ils n’incluent ni frais de transaction, ni frais de gestion.&lt; br&gt;
      
      Citons par exemple le FTSE MTS GLOBAL (ex EURO MTS GLOBAL) composé d’obligations à taux fixe libellées en euros et émises par les États de la zone Euro, ou l’EONIA, indice du marché monétaire représentatif des échanges au jour le jour entre grandes banques de la zone Euro.`
      },
      cardSubTitle: `cf. Glossaire`
    },
    {
      color: 'rgba(201,44,64,1.00)',
      hoverColor: 'rgba(229,150,146,1.00)',
      startPosition: 3,
      arrowFollowing: false,
      cardTitle: `Indices composites`,
      cardContent: {
        __html: `Il synthétise l’évolution de plusieurs indices de façon à refléter la composition cible du fonds de type mixte.
      Par exemple: 
      35% STOXX 50 SPECIAL OPENNING NET (1)
      + 30% FTSE MTS GLOBAL
      + 15% JPM GBI GLOBAL TRADED INDEX HEDGED EURO (2)
      + 12% S&amp;P 500 COMPOSITE
      + 6% MSCI JAPAN (3)
      + 2% MSCI EM (EMERGING MARKETS)
      
      (1) La mention SPECIAL OPENNING NET indique que la valeur journalière retenue pour l’EUROSTOXX 50 est le cours d’ouverture.
      (2) L’indice JPM Government Bond Index GLOBAL TRADED INDEX HEDGED EURO calculé par la société JP Morgan est :
      • composé de titres obligataires d’États bien notés par les agences de notation (catégorie Investment Grade),
      • couvert contre le risque de change par rapport à l’euro.
      (3) L’indice MSCI Japan calculé par la société Morgan Stanley Capital International est représentatif des grandes et moyennes capitalisations japonaises.`
      },
      cardSubTitle: `cf. Glossaire`
    }
  ]
};

export default module_02_blocEnSavoirPlusType1;
