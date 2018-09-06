import moduleTypes from '../moduleTypes';

const module_03_02_blocEnSavoirPlusType3 = {
  modulType: moduleTypes.blocEnSavoirPlusType3,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: 'Principaux indices de référence (ou benchmark en anglais) du marché des actions ',
  grid: {
    columns: 4,
    rows: 5,
  },
  // firstDescription: {
  //   __html: 'Pour plus de détail, passez la souris sur les différents catégories.',
  // },
  cards: [
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 1,
      position: {
        column: 1,
        row: 1,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Indice de référence ou benchmark',
      cardContent: {
        __html: `C’est un panier d’actions sélectionnées selon un certain nombre de critères comme la place de cotation, la capitalisation boursière, le secteur d’activité, la zone géographique… Il sert de repère pour analyser la performance des fonds. Il n’inclut ni frais de transaction, ni frais de gestion.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 2,
      position: {
        column: 4,
        row: 1,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'CAC 40',
      cardContent: {
        __html: `Indice de référence de la place parisienne calculé par NYSE Euronext.<br/> Lancé le 31 décembre 1987 sur une base de 1000 points, il est composé de 40 des plus grosses capitalisations du pays représentatives du marché financier parisien aussi bien en terme de volumes de transactions que de secteurs d’activité ; un titre ne peut cependant pas excéder 15% de pondération. Le CAC 40 est calculé hors dividendes (contrairement à l’indice allemand, le Dax) et valorisé en cours d’ouverture ou de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 3,
      position: {
        column: 3,
        row: 1,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'EUROSTOXX 50 ',
      cardContent: {
        __html: `Indice boursier, créé en 1999 par STOXX Ltd.<br /> Il est composé des 50 entreprises européennes les plus représentatives des pays de la zone Euro dans 18 secteurs d’activité ; un titre ne peut cependant pas excéder 10% de pondération. L’EUROSTOXX 50 est calculé dividendes réinvestis ou non, et valorisé au cours de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 4,
      position: {
        column: 2,
        row: 1,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'MSCI EMU',
      cardContent: {
        __html: `Indice large calculé par Morgan Stanley Capital Index (MSCI) et représentatif des quelques 240 principales capitalisations boursières des pays de la zone Euro. Le poids de chaque titre est déterminé en fonction de sa capitalisation ajustée du flottant. Le MSCI EMU est calculé dividendes réinvestis ou non, et valorisé au cours de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 5,
      position: {
        column: 1,
        row: 2,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'MSCI WORLD ',
      cardContent: {
        __html: `Indice large calculé par MSCI et composé de quelques 1600 actions de sociétés cotées dans plus de 20 pays du monde. Le poids de chaque titre est déterminé en fonction de sa capitalisation ajustée du flottant. Le MSCI World est calculé dividendes réinvestis ou non, et valorisé au cours de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 6,
      position: {
        column: 1,
        row: 4,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'MSCI EMERGING MARKETS ',
      cardContent: {
        __html: `Indice large calculé par MSCI et représentatif des quelques 820 principales entreprises des pays émergents. Le MSCI Emerging markets est calculé dividendes réinvestis ou non, et valorisé au cours de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 7,
      position: {
        column: 1,
        row: 5,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'DOW JONES SUSTAINABILITY INDEX',
      cardContent: {
        __html: `Indice dédié à l’Investissement Socialement Responsable créé en 1999 par la société Dow Jones en partenariat avec l’agence de notation environnementale, sociale et de gouvernance SAM. Y sont sélectionnées, parmi les 2000 plus grosses capitalisations boursières mondiales, les quelques 200 entreprises ayant les meilleures performances en matière de développement durable dans 60 secteurs d’activité et 27 pays. Le DJ Sustainability Index est aussi décliné sur l’Amérique du Nord, l’Europe et l’Asie-Pacifique ; il est calculé dividendes réinvestis ou non, et valorisé au cours d’ouverture ou de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_ACTION_OPAQUE,
      hoverColor: process.env.REACT_APP_ACTION,
      width: 150,
      index: 8,
      position: {
        column: 1,
        row: 3,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'S&P 500 COMPOSITE ',
      cardContent: {
        __html: `Indice calculé par Standard & Poor’s et représentatif des 500 principales entreprises américaines en termes de liquidité et de capitalisation. Le S&P 500 Composite est calculé dividendes réinvestis ou non, et valorisé au cours de clôture.`,
      },
      cardSubTitle: 'cf. Glossaire',
    },
  ],
};

export default module_03_02_blocEnSavoirPlusType3;
