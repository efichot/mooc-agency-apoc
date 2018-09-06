import moduleTypes from '../moduleTypes';
import doubleArrow from '../../../../assets/img/icons/double-arrow-3.png';
import arrowRightBig from '../../../../assets/img/icons/arrow-right-big.png';
import module_05_03_1 from '../../../../assets/img/step8/module_05_03_1.pdf';
import module_05_03_2 from '../../../../assets/img/step8/module_05_03_2.pdf';
import module_05_03_3 from '../../../../assets/img/step8/module_05_03_3.pdf';
import module_05_03_4 from '../../../../assets/img/step8/module_05_03_4.pdf';

const questions = {
  originalQuestions: [
    {
      description: { __html: 'CHOIX 1<br />Souhaitez-vous un indice de référence pour votre fonds ?' },
      answers: ['Oui', 'Non'],
      width: 250,
    },
    [
      {
        description: { __html: 'CHOIX 2<br />Dans quel objectif ?' },
        answers: [
          { __html: 'Que l’indice de référence guide la composition de votre fonds' },
          { __html: 'Que l’indice de référence mesure a posteriori<br /> la performance de votre fonds' },
        ],
        width: 500,
      },
      {
        description: { __html: 'CHOIX 2<br />Dans quel objectif ?' },
        answers: [
          { __html: 'Réaliser sans contrainte d’univers la meilleure performance possible' },
          { __html: 'Bénéficier d’une garantie' },
        ],
        width: 550,
      },
    ],
    {
      description: {
        __html: `
        CHOIX 3<br />
        Quel type de données économiques privilégier ?<br />
        Pour faire apparaître des exemples de données, cliquez sur les propositions ci-dessous.`,
      },
      answers: ['Quantitatives', 'Qualitatives'],
      files: [
        [
          {
            title: 'EXEMPLE DE DONNÉES',
            subTitle: 'Fichier pdf',
            fileUrl: module_05_03_1,
            fileName: 'Macro-économiques quantitatives',
          },
          {
            subTitle: 'Fichier pdf',
            fileUrl: module_05_03_2,
            fileName: 'Micro-économiques quantitatives',
          },
        ],
        [
          {
            title: 'EXEMPLE DE DONNÉES',
            subTitle: 'Fichier pdf',
            fileUrl: module_05_03_3,
            fileName: 'Macro-économiques qualitatives',
          },
          {
            subTitle: 'Fichier pdf',
            fileUrl: module_05_03_4,
            fileName: 'Micro-économiques qualitatives',
          },
        ],
      ],
      width: 250,
    },
  ],
  moreQuestions: [
    {
      description: { __html: 'CHOIX 4<br />Quel processus de sélection appliquer ?' },
      answers: [
        'Allocation entre classes d’actifs puis sélection dans chaque classe d’actifs',
        'Sélection dans chaque classe d’actifs puis allocation entre classes d’actifs',
      ],
      width: 650,
      ifCheckedShowMoreQuestions: 0,
    },
  ],
};

const module_05_03_blocEnSavoirPlusType3QCMType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType3QCMType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'Schéma des processus de gestion',
  duration: 2,
  title: 'Processus de gestion actions',
  grid: {
    columns: 7,
    rows: 11,
    gridAutoRows: 37,
    popupRows: 4,
    gridTemplateColumns: '7fr 1fr 7fr 7fr 1fr 7fr 1fr',
  },
  ecusson: {
    background: `linear-gradient(to right, ${process.env.REACT_APP_ACTION}, ${process.env.REACT_APP_OBLIGATION}, ${
      process.env.REACT_APP_MONETAIRE
    })`,
    text: 'Gestion diversifiée',
  },
  firstDescription: {
    __html: `Le processus de gestion matérialise la façon dont est géré le fonds.
Pour construire votre propre processus de gestion, il vous faut décider quels types de données utiliser et comment.

Le schéma des processus de gestion s’activera en fonction des choix que vous ferez. 
La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs qui composent le fonds en fonction des anticipations, elle est considérée comme de la gestion active. `,
  },
  questions,
  descriptionWhenNoMoreQuestion: {
    __html: `Comme indiqué sur le schéma ci-dessous, vous avez construit le processus de gestion de votre fonds diversifié.
Pour découvrir les autres approches de gestion possibles dans un fonds diversifié, faites apparaître le reste du schéma et glissez la souris sur les termes dont vous souhaitez connaître la définition. `,
  },
  showMoreQuestionsConditions: [
    [
      questions.originalQuestions[0].answers[0],
      questions.originalQuestions[1][0].answers[0],
      questions.originalQuestions[2].answers[1],
    ],
    [
      questions.originalQuestions[0].answers[0],
      questions.originalQuestions[1][0].answers[1],
      questions.originalQuestions[2].answers[1],
    ],
    [
      questions.originalQuestions[0].answers[1],
      questions.originalQuestions[1][1].answers[0],
      questions.originalQuestions[2].answers[1],
    ],
  ],
  error: [
    {
      condition: [
        questions.originalQuestions[0].answers[0],
        questions.originalQuestions[1][0].answers[0],
        questions.originalQuestions[2].answers[1],
        questions.moreQuestions[0].answers[1],
      ],
      errorMessage: {
        __html:
          'Attention ! La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs, son approche ne peut être que top-down. Faites un autre choix.',
      },
    },
    {
      condition: [
        questions.originalQuestions[0].answers[0],
        questions.originalQuestions[1][0].answers[1],
        questions.originalQuestions[2].answers[1],
        questions.moreQuestions[0].answers[1],
      ],
      errorMessage: {
        __html:
          'Attention ! La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs, son approche ne peut être que top-down. Faites un autre choix.',
      },
    },
    {
      condition: [
        questions.originalQuestions[0].answers[1],
        questions.originalQuestions[1][1].answers[0],
        questions.originalQuestions[2].answers[1],
        questions.moreQuestions[0].answers[1],
      ],
      errorMessage: {
        __html:
          'Attention ! La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs, son approche ne peut être que top-down. Faites un autre choix.',
      },
    },
    {
      condition: [
        questions.originalQuestions[0].answers[1],
        questions.originalQuestions[1][1].answers[1],
        questions.originalQuestions[2].answers[1],
      ],
      errorMessage: {
        __html: 'Attention ! L’approche qualitative ne s’applique pas à la gestion structurée. Faites un autre choix.',
      },
    },
  ],
  cards: [
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 1,
      style: {
        gridColumnStart: 1,
        gridColumnEnd: 1,
        gridRowStart: 6 + 2,
        gridRowEnd: 8 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'GESTION ACTIVE',
      visibleIf: 'always',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 2,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 2 + 2,
        gridRowEnd: 4 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche quantitative',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[0],
          questions.originalQuestions[2].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
        ],
      ],
      cardContent:
        'Elle s’appuie sur des bases de données (historiques de cours, comptes et ratios, titres, portefeuilles et indices) et des modèles mathématiques qui permettent d’effectuer des tris, d’automatiser et d’optimiser la gestion.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 3,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 4 + 2,
        gridRowEnd: 6 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche qualitative',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[0],
          questions.originalQuestions[2].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
        ],
      ],
      cardContent:
        "Elle s’appuie sur la connaissance de l’émetteur. Elle a recours à l'analyse de ses comptes et perspectives qui est faite par les analystes financiers (pour les actions) ou les analystes crédits (pour les obligations), et qui permet d'évaluer le titre.",
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 4,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 9 + 2,
        gridRowEnd: 11 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche quantitative',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[1],
          questions.originalQuestions[2].answers[0],
        ],
      ],
      cardContent:
        'Elle s’appuie sur des bases de données (historiques de cours, comptes et ratios, titres, portefeuilles et indices) et des modèles mathématiques qui permettent d’effectuer des tris, d’automatiser et d’optimiser la gestion.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 5,
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 2 + 2,
        gridRowEnd: 4 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion profilée',
      cardTitleToShow: "Gestion profilée (suit la répartition des classes d'actif de son indice composite)",
      visibleIf: [
        [questions.originalQuestions[0].answers[0], questions.originalQuestions[1][0].answers[0]],
        // [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]],
      ],
      cardContent:
        'Elle combine plusieurs classes d’actif en fonction d’une allocation fixée a priori, qui reproduit les différentes composantes de l’indice de référence retenu (ou indice composite) et varie à l’intérieur de fourchettes étroites.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 6,
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 4 + 2,
        gridRowEnd: 6 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion flexible',
      cardTitleToShow: "Gestion flexible (suit la répartition des classes d'actif de son indice composite)",
      visibleIf: [
        [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]],
        // [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]],
      ],
      cardContent:
        'Elle combine plusieurs classes d’actif en fonction d’une allocation fixée a priori, qui reproduit les différentes composantes de l’indice de référence retenu (ou indice composite) et varie à l’intérieur de fourchettes étroites.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 7,
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 6 + 2,
        gridRowEnd: 8 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
        marginTop: 10,
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion de performance absolue',
      cardTitleToShow: 'Gestion de perf. absolue (objectif de perf. et/ou de volatilité exprimé en valeur numérique)',
      visibleIf: [
        [questions.originalQuestions[0].answers[0], questions.originalQuestions[1][0].answers[1]],
        // [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]],
      ],
      cardContent: {
        __html:
          'Elle fonctionne comme la gestion flexible, mais s’y ajoute un objectif de performance et/ou de volatilité exprimé en valeur numérique.<br />L’éventuel indice de référence est utilisé à titre de comparaison, a posteriori.',
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 8,
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 9 + 2,
        gridRowEnd: 11 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion structurée',
      cardTitleToShow: 'Gestion structurée (structure un profil rentabilité/rique avec une garantie)',
      visibleIf: [
        [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[1]],
        // [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]],
      ],
      cardContent: {
        __html:
          'Elle combine des actifs financiers traditionnels (actions, obligations…) et des instruments dérivés (options). La performance du fonds est liée aux actifs sous-jacents (actifs auxquels le fonds est exposé via les dérivés) par une formule mathématique ou un algorithme de façon à offrir une protection ou une garantie.',
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 9,
      style: {
        gridColumnStart: 6,
        gridColumnEnd: 7,
        gridRowStart: 6 + 2,
        gridRowEnd: 8 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche Top Down',
      cardTitleToShow: "Sélection dans chaque classe d'actif",
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
      ],
      cardContent: {
        __html:
          'La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs qui composent le fonds, elle met en œuvre une approche top-down. Le fonds est composé de façon descendante, dans le respect des objectifs de gestion fixés.',
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 2,
      index: 10,
      style: {
        gridColumnStart: 6,
        gridColumnEnd: 7,
        gridRowStart: 2 + 2,
        gridRowEnd: 4 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche Top Down',
      cardTitleToShow: "Allocation entre classes d'actifs",
      cardButtonSubTitle: '(taux, actions, immobilier, alternatif...)',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
      ],
      cardSubTitle: 'cf. Glossaire',
      cardContent: {
        __html:
          'La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs qui composent le fonds, elle met en œuvre une approche top-down. Le fonds est composé de façon descendante, dans le respect des objectifs de gestion fixés.',
      },
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      height: 1,
      index: 11,
      style: {
        gridColumnStart: 6,
        gridColumnEnd: 7,
        gridRowStart: 1 + 2,
        gridRowEnd: 2 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      cardTitle: 'APPROCHE TOP-DOWN',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
      ],
      cardContent: {
        __html:
          'La gestion diversifiée consistant à allouer le poids respectif des différentes classes d’actifs qui composent le fonds, elle met en œuvre une approche top-down. Le fonds est composé de façon descendante, dans le respect des objectifs de gestion fixés.',
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 4 + 2,
        gridRowEnd: 10 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
        backgroundSize: '100% 100%',
      },
      arrow: doubleArrow,
      visibleIf: 'always',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 3 + 2,
        gridRowEnd: 7 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
        backgroundSize: '100% 100%',
      },
      arrow: doubleArrow,
      visibleIf: 'always',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 3 + 2,
        gridRowEnd: 7 + 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
        backgroundSize: '100% 100%',
      },
      arrow: arrowRightBig,
      visibleIf: 'always',
    },
    {
      color: 'rgba(128,128,128,1.00)',
      hoverColor: 'rgba(128,128,128,1.00)',
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 4,
        gridRowStart: 3 + 2,
        gridRowEnd: 5 + 2,
        alignSelf: 'center',
        justifySelf: 'center',
        pointerEvents: 'none',
        height: 20,
        width: 35,
        display: 'flex',
        justifyContent: 'center',
      },
      buttonStyle: {
        color: process.env.REACT_APP_WHITE,
        flexGrow: 1,
        margin: 0,
        padding: 0,
      },
      cardTitle: 'OU',
      visibleIf: 'always',
    },
    {
      color: 'rgba(128,128,128,1.00)',
      hoverColor: 'rgba(128,128,128,1.00)',
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 3 + 2,
        gridRowEnd: 5 + 2,
        alignSelf: 'center',
        justifySelf: 'center',
        pointerEvents: 'none',
        height: 20,
        width: 35,
        display: 'flex',
        justifyContent: 'center',
      },
      buttonStyle: {
        color: process.env.REACT_APP_WHITE,
        flexGrow: 1,
        margin: 0,
        padding: 0,
      },
      cardTitle: 'OU',
      visibleIf: 'always',
    },
    {
      color: 'rgba(128,128,128,1.00)',
      hoverColor: 'rgba(128,128,128,1.00)',
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 5 + 2,
        gridRowEnd: 7 + 2,
        alignSelf: 'center',
        justifySelf: 'center',
        pointerEvents: 'none',
        height: 20,
        width: 35,
        display: 'flex',
        justifyContent: 'center',
      },
      buttonStyle: {
        color: process.env.REACT_APP_WHITE,
        flexGrow: 1,
        margin: 0,
        padding: 0,
      },
      cardTitle: 'OU',
      visibleIf: 'always',
    },
  ],
};

export default module_05_03_blocEnSavoirPlusType3QCMType1;
