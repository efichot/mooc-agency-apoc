import moduleTypes from '../moduleTypes';

const module_02_blocEnSavoirPlusType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType1,
  /* linkWithBlocSubMenu1ButtonPosition: 2, */
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: `Principaux indices de référence (ou benchmark en anglais) du marché des actions`,
  firstDescription: {
    __html: 'Pour plus de détail sur les indices de référence, passez la souris sur les principales catégories.',
  },
  cards: [
    {
      color: process.env.REACT_APP_ACTION,
      hoverColor: process.env.REACT_APP_ACTION_OPAQUE,
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Indices du marché actions',
      cardContent: {
        __html: `Paniers d’actions sélectionnées selon un certain nombre de critères comme le lieu où l’entreprise est cotée (place de cotation), la valeur qu’elle représente (capitalisation), le secteur d’activité ou/et la zone géographique dans lesquels l’entreprise est présente…
        Ils servent de repère pour analyser la performance des fonds, mais ils n’incluent ni la rémunération de l’intermédiaire qui, dans un fonds, achète et vend les titres (frais de transaction), ni celle de la société de gestion qui gère le fonds (frais de gestion).<br />

      Citons par exemple le CAC 40 composé de 40 des plus grosses capitalisations boursières françaises, le MSCI EMU, le S&amp;P 500 et le MSCI EMERGING MARKETS respectivement représentatifs des quelque 240 principales capitalisations de la zone Euro, des 500 principales entreprises américaines et des quelque 820 principales entreprises des pays émergents.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: `linear-gradient(to right, ${process.env.REACT_APP_OBLIGATION}, ${process.env.REACT_APP_MONETAIRE})`,
      hoverColor: `linear-gradient(to right, ${process.env.REACT_APP_OBLIGATION_OPAQUE}, ${
        process.env.REACT_APP_MONETAIRE_OPAQUE
      })`,
      startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Indices des marchés obligataire et monétaire',
      cardContent: {
        __html: `Paniers d’obligations ou de titres monétaires respectant des critères de devise, catégorie d’émetteur (États, organismes publics, entreprises…), durée comprise dans une certaine plage (typiquement : 1-3 ans, 3-5 ans, 7-10 ans, 10 ans et +)…
        Ils servent de repère pour analyser la performance des fonds, mais ils n’incluent ni la rémunération de l’intermédiaire qui, dans un fonds, achète et vend les titres (frais de transaction), ni celle de la société de gestion qui gère le fonds (frais de gestion).<br />

        Citons par exemple le FTSE MTS GLOBAL (ex EURO MTS GLOBAL) composé d’obligations à rémunération -ou taux- fixe, libellées en euros et émises par les États de la zone Euro, ou l’EONIA, indice du marché monétaire représentatif des échanges au jour le jour entre grandes banques de la zone Euro.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: `linear-gradient(to right, ${process.env.REACT_APP_ACTION}, ${process.env.REACT_APP_OBLIGATION} 33%, ${
        process.env.REACT_APP_MONETAIRE
      } 95%)`,
      hoverColor: `linear-gradient(to right, ${process.env.REACT_APP_ACTION_OPAQUE}, ${
        process.env.REACT_APP_OBLIGATION_OPAQUE
      } 33%, ${process.env.REACT_APP_MONETAIRE_OPAQUE} 95%)`,
      startPosition: 3,
      arrowFollowing: false,
      cardTitle: `Indices composites`,
      cardContent: {
        __html: `Il synthétise l’évolution de plusieurs indices de façon à refléter la composition cible du fonds de type mixte.
      Par exemple: <br />
      35% MSCI EMU<br />
      + 30% FTSE MTS GLOBAL<br />
      + 15% JPM GBI GLOBAL TRADED INDEX HEDGED EURO (1)<br />
      + 12% S&amp;P 500 COMPOSITE<br />
      + 8% MSCI EM (EMERGING MARKETS)<br /><br />

      (1) Cet indice calculé par la société JP Morgan est&nbsp;:<br />
      • composé d’obligations d’États bien notés par les agences de notation (catégorie Investment Grade),<br />
      • couvert contre le risque de change par rapport à l’euro.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
  ],
};

export default module_02_blocEnSavoirPlusType1;
