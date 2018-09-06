import moduleTypes from '../moduleTypes';
import tripleArrow from '../../../../assets/img/icons/triple-arrow.png';

const module_04_02_blocEnSavoirPlusType3QCMType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType3QCMType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'Schéma des processus de gestion',
  duration: 2,
  title: 'Processus de gestion taux',
  ecusson: {
    background: `linear-gradient(to right, ${process.env.REACT_APP_OBLIGATION}, ${process.env.REACT_APP_MONETAIRE})`,
    text: 'Gestion de taux',
  },
  grid: {
    columns: 5,
    rows: 7,
    gridAutoRows: 75,
    popupRows: 7,
  },
  firstDescription: {
    __html: `La gestion taux consiste à allouer le risque de votre fonds en fonction d’un certain nombre de paramètres.
Pour découvrir à partir de quels paramètres construire un processus de gestion taux, glissez la souris sur les termes dont vous souhaitez connaître la définition. `,
  },
  cards: [
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 1,
      style: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 2 + 4,
        gridRowEnd: 3 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'ALLOCATION DU RISQUE',
      visibleIf: 'always',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 2,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 1 + 4,
        gridRowEnd: 2 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: { __html: "COURBE DES TAUX<br />Évolution des taux d'intérêt" },
      visibleIf: 'always',
      cardContent:
        'Elle représente le niveau des différents taux d’intérêt à un moment donné, en fonction de leur durée respective.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 3,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 2 + 4,
        gridRowEnd: 3 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: { __html: "SENSIBILITÉ<br />Aux mouvements des taux d'intérêt" },
      visibleIf: 'always',
      cardContent:
        'Elle mesure l’impact d’une variation des taux de 1% sur le cours d’un produit de taux (obligation ou titre monétaire) ou la valeur liquidative d’un OPC (valeur du portefeuille obligataire et monétaire détenu par le fonds). Pour un OPC de taux, une sensibilité de 4 signifie que sa valeur liquidative progressera de 4% en cas de baisse des taux d’intérêt de 1%, et diminuera de 4% en cas de hausse des taux d’intérêt de 1%.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 4,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 3 + 4,
        gridRowEnd: 4 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'DIVERSIFICATION',
      visibleIf: 'always',
      cardContent:
        'La diversité des émetteurs et des émissions de produits de taux permet d’utiliser le levier de la diversification dans le but d’améliorer la performance des différentes catégories d’OPC obligataires et monétaires. Un OPC principalement investi en titres d’Etats peut ainsi détenir une part de diversification en titres émis par des entreprises (appelés « obligations crédit ou corporate »).',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 5,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 1 + 4,
        gridRowEnd: 2 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: { __html: 'MATURITÉ<br />Durée de vie de la dette' },
      visibleIf: 'always',
      cardContent:
        'Elle mesure la durée de vie d’un produit de taux, de la date d’émission à la date d’échéance à laquelle le montant de la dette est remboursée et où le paiement des intérêts s’arrête. La maturité résiduelle mesure le temps restant à courir jusqu’à l’échéance. Ces calculs s’appliquent aussi aux OPC de taux, désignant dans le premier cas la durée de vie maximale des titres éligibles au fonds, dans le second la Maturité Moyenne Pondérée (MMP) ou Weighted Average Maturity (WAM) du fonds.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 6,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 2 + 4,
        gridRowEnd: 3 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: { __html: 'DURATION<br />Durée de vie moyenne pondérée de la dette' },
      visibleIf: 'always',
      cardContent:
        'Elle mesure la durée de vie moyenne d’un produit de taux pondérée par les flux de versement des intérêts (coupons) et de remboursement du capital actualisés, à savoir que les versements les plus proches dans le temps ont un poids plus important que les versements plus éloignés. A la différence de la simple durée résiduelle, la duration prend en compte le fait que les coupons versés peuvent être réinvestis, permettant d’atteindre la valeur cumulée des intérêts et du capital avant l’échéance (la duration est inférieure -ou égale en cas d’obligation zéro coupon- à la maturité). La valeur d’une obligation de duration 6 ans diminuera de 6% en cas de hausse des taux d’intérêt de 1%, et inversement. <br />La duration permet de comparer la sensibilité aux taux d’intérêt d’obligations de maturités et rendements différents ; par exemple une obligation de duration 6 ans sera 2 fois plus sensible aux variations des taux d’intérêt qu’une obligation de duration 3 ans, quels que soient la date d’échéance et le montant des coupons. La duration peut aussi être calculée pour un OPC et elle est mesurée par la Durée de Vie Moyenne Pondérée (DVMP) ou Weighted Average Life (WAL).',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 7,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 3 + 4,
        gridRowEnd: 4 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: { __html: "RISQUE DE CRÉDIT<br />Classification et notation de l'émetteur" },
      visibleIf: 'always',
      cardContent:
        'Il désigne le risque que l’émetteur du produit de taux (Etat, collectivité publique, entreprise) ne rembourse pas sa dette à l’échéance. Le risque de crédit relatif à chaque émetteur et à chaque émission est évalué par les agences de notation que sont Moody’s, Standard and Poor’s, Fitch et Dagong, selon des échelles qui vont respectivement de Aaa à C pour Moody’s et de AAA à D pour les trois autres. Moody’s et Standard and Poor’s sont des entreprises américaines, Fitch est européenne et Dagong chinoise. Les obligations notées de AAA à BBB- sont classées en « investment grade » et répondent à un niveau de risque faible requis notamment par les investisseurs institutionnels; les obligations notées de BB+ à D sont classées en « speculative grade » ou « high yield » et offrent des rendements élevés pour des risques élevés.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 1 + 4,
        gridRowEnd: 4 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      arrow: tripleArrow,
      visibleIf: 'always',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 1 + 4,
        gridRowEnd: 4 + 4,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      arrow: tripleArrow,
      visibleIf: 'always',
    },
  ],
};

export default module_04_02_blocEnSavoirPlusType3QCMType1;
