import moduleTypes from '../moduleTypes';
import doubleArrow from '../../../../assets/img/icons/double-arrow.png';
import arrowWithCircle from '../../../../assets/img/icons/arrow-with-circle.png';
import module_03_03_1 from '../../../../assets/img/step8/module_03_03_1.pdf';
import module_03_03_2 from '../../../../assets/img/step8/module_03_03_2.pdf';
import module_03_03_3 from '../../../../assets/img/step8/module_03_03_3.pdf';
import module_03_03_4 from '../../../../assets/img/step8/module_03_03_4.pdf';

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
          { __html: 'Que la performance du fonds réplique exactement<br />celle de l’indice de référence' },
          { __html: "Que la performance du fonds ne s'écarte pas trop<br />de celle de l’indice de référence" },
        ],
        width: 450,
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
        CHOIX 3

        Quel type de données économiques privilégier ?
        Pour faire apparaître des exemples de données, cliquez sur les propositions ci-dessous.`,
      },
      answers: ['Quantitatives', 'Qualitatives'],
      files: [
        [
          {
            title: 'EXEMPLE DE DONNÉES',
            subTitle: 'Fichier pdf',
            fileUrl: module_03_03_1,
            fileName: 'Macro-économiques quantitatives',
          },
          {
            subTitle: 'Fichier pdf',
            fileUrl: module_03_03_2,
            fileName: 'Micro-économiques quantitatives',
          },
        ],
        [
          {
            title: 'EXEMPLE DE DONNÉES',
            subTitle: 'Fichier pdf',
            fileUrl: module_03_03_3,
            fileName: 'Macro-économiques qualitatives',
          },
          {
            subTitle: 'Fichier pdf',
            fileUrl: module_03_03_4,
            fileName: 'Micro-économiques qualitatives',
          },
        ],
      ],
      width: 150,
    },
  ],
  moreQuestions: [
    {
      description: { __html: 'CHOIX 4<br />Quel processus de sélection appliquer ?' },
      answers: [
        "Le pays et le secteur d'activité puis l'entreprise",
        "L'entreprise puis le pays et le secteur d’activité",
      ],
      width: 450,
      ifCheckedShowMoreQuestions: 0,
    },
  ],
};

const module_03_03_blocEnSavoirPlusType3QCMType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType3QCMType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'Schéma des processus de gestion',
  duration: 2,
  title: 'Processus de gestion actions',
  grid: {
    columns: 8,
    rows: 12,
    gridAutoRows: 50,
    popupRows: 4,
    gridTemplateColumns: '7fr 1fr 6fr 1fr 7fr 1fr 7fr 1fr',
  },
  firstDescription: {
    __html: `Le processus de gestion matérialise la façon dont est géré le fonds.
    Pour construire votre propre processus de gestion, il vous faut décider quels types de données utiliser et comment.
    Le schéma des processus de gestion s'activera en fonction des choix que vous ferez.`,
  },
  ecusson: {
    background: process.env.REACT_APP_ACTION,
    text: 'Gestion actions',
  },
  questions,
  descriptionWhenNoMoreQuestion: {
    __html: `Comme indiqué sur le schéma ci-dessous, vous avez construit le processus de gestion de votre fonds actions.
Pour découvrir les autres approches de gestion possibles dans un fonds actions, faites apparaître le reste du schéma et glissez la souris sur les termes dont vous souhaitez connaître la définition.`,
  },
  showMoreQuestionsConditions: [
    [
      questions.originalQuestions[0].answers[0],
      questions.originalQuestions[1][0].answers[1],
      questions.originalQuestions[2].answers[0],
    ],
    [
      questions.originalQuestions[0].answers[1],
      questions.originalQuestions[1][1].answers[0],
      questions.originalQuestions[2].answers[1],
    ],
    [
      questions.originalQuestions[0].answers[1],
      questions.originalQuestions[1][1].answers[0],
      questions.originalQuestions[2].answers[0],
    ],
  ],
  error: [
    {
      condition: [
        questions.originalQuestions[0].answers[0],
        questions.originalQuestions[1][0].answers[0],
        questions.originalQuestions[2].answers[1],
      ],
      errorMessage: {
        __html: 'Attention ! L’approche qualitative ne s’applique pas à la gestion structurée. Faites un autre choix.',
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
      height: 1.5,
      index: 1,
      style: {
        gridColumnStart: 1,
        gridColumnEnd: 1,
        gridRowStart: 4,
        gridRowEnd: 7,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'GESTION ACTIVE',
      visibleIf: [
        [questions.originalQuestions[0].answers[0], questions.originalQuestions[1][0].answers[1]],
        [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]],
      ],
      cardContent:
        'Elle part du principe que, si les marchés sont généralement efficients (à savoir que les cours de bourse intègrent et reflètent l’ensemble des informations pertinentes) sur le long terme, ils ne le sont ni toujours, ni parfaitement, ce qui offre des opportunités. La gestion active s’appuie sur des anticipations permettant de sélectionner les titres, les secteurs d’activité et les zones géographiques qui devraient avoir les meilleures performances.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 2,
      style: {
        gridColumnStart: 1,
        gridColumnEnd: 1,
        gridRowStart: 9,
        gridRowEnd: 12,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'GESTION PASSIVE',
      visibleIf: [
        [questions.originalQuestions[0].answers[0], questions.originalQuestions[1][0].answers[0]],
        [questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[1]],
      ],
      cardContent:
        'Elle part du principe que les marchés sont efficients et, par voie de conséquence, qu’il est rare de pouvoir faire mieux à long terme. La gestion passive se contente de « copier » : elle peut dupliquer exactement l’indice, le répliquer en sélectionnant les titres qui reproduisent le plus fidèlement son évolution ou utiliser des produits dérivés permettant d’obtenir la même performance que l’indice.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 4,
        gridRowEnd: 7,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      arrow: doubleArrow,
      visibleIf: 'always',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 3,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 5,
        gridRowStart: 4,
        gridRowEnd: 6,
        alignSelf: 'start',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche quantitative',
      visibleIf: [
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
        'Elle s’appuie sur des bases de données (historiques de cours, comptes et ratios, titres, portefeuilles et indices) et des modèles mathématiques qui permettent d’effectuer des tris, d’automatiser et d’optimiser la gestion. L’approche quantitative s’applique à la fois à la gestion active (anticipations construites sur des données et un modèle quantitatifs dans le but de faire mieux que l’indice) et à la gestion passive (utilisation de données et d’un modèle quantitatifs dans le but de répliquer l’indice).',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 4,
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 5,
        gridRowStart: 5,
        gridRowEnd: 7,
        alignSelf: 'end',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Approche qualitative',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
        ],
      ],
      cardContent:
        'Elle s’appuie sur la connaissance de l’entreprise (ses métiers, ses dirigeants, la concurrence, l’environnement). Elle a recours à l’analyse des comptes, des résultats et des perspectives de l’entreprise qui est faite par les analystes financiers, et qui permet à ces derniers et aux gérants d’apprécier la sous ou sur-évaluation du cours de bourse. L’approche qualitative ne s’applique qu’à la gestion active.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 5,
      style: {
        gridColumnStart: 2,
        gridColumnEnd: 4,
        gridRowStart: 9,
        gridRowEnd: 12,
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
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[1],
          questions.originalQuestions[2].answers[0],
        ],
      ],
      cardContent:
        'Elle s’appuie sur des bases de données (historiques de cours, comptes et ratios, titres, portefeuilles et indices) et des modèles mathématiques qui permettent d’effectuer des tris, d’automatiser et d’optimiser la gestion. L’approche quantitative s’applique à la fois à la gestion active (anticipations construites sur des données et un modèle quantitatifs dans le but de faire mieux que l’indice) et à la gestion passive (utilisation de données et d’un modèle quantitatifs dans le but de répliquer l’indice).',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 4,
        gridColumnEnd: 5,
        gridRowStart: 9,
        gridRowEnd: 12,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      arrow: doubleArrow,
      visibleIf: 'always',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 6,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 4,
        gridRowEnd: 6,
        alignSelf: 'start',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion benchmarkée',
      visibleIf: [[questions.originalQuestions[0].answers[0], questions.originalQuestions[1][0].answers[1]]],
      cardContent:
        'Elle vise une performance proche ou supérieure à celle du benchmark (ou indice de référence) retenu. La gestion benchmarkée relève de la gestion active et applique soit l’approche quantitative soit l’approche qualitative.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 7,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 5,
        gridRowEnd: 7,
        alignSelf: 'end',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion non benchmarkée',
      visibleIf: [[questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[0]]],
      cardContent:
        'Elle se fixe un objectif de performance indépendamment de l’évolution des marchés et donc des indices, en visant la meilleure performance possible en fonction du risque choisi. La gestion non benchmarkée relève de la gestion active et applique soit l’approche quantitative soit l’approche qualitative.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 8,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 9,
        gridRowEnd: 11,
        alignSelf: 'start',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion indicielle',
      visibleIf: [[questions.originalQuestions[0].answers[0], questions.originalQuestions[1][0].answers[0]]],
      cardContent:
        'Elle vise à reproduire la performance d’un indice en répliquant le plus fidèlement possible et au moindre coût sa composition. La gestion indicielle relève de la gestion passive et n’applique que l’approche quantitative.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1.5,
      index: 9,
      style: {
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 10,
        gridRowEnd: 12,
        alignSelf: 'end',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Gestion structurée ',
      visibleIf: [[questions.originalQuestions[0].answers[1], questions.originalQuestions[1][1].answers[1]]],
      cardContent:
        'Elle vise à garantir un capital, une performance et/ou un revenu en structurant un profil risque/rentabilité. La gestion structurée relève de la gestion passive et n’applique que l’approche quantitative',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 6,
        gridColumnEnd: 7,
        gridRowStart: 2,
        gridRowEnd: 9,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      arrow: arrowWithCircle,
      visibleIf: [
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
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
      ],
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      height: 1,
      index: 10,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 1,
        gridRowEnd: 2,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      cardTitle: 'APPROCHE TOP-DOWN',
      visibleIf: [
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
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
      ],
      cardContent:
        'Elle consiste à faire les choix d’allocation entre pays et secteurs d’activité préalablement à celui des titres. L’approche top-down repose d’abord sur une analyse macro-économique des pays et des secteurs d’activité, puis sur une analyse micro-économique des entreprises. Le fonds est ainsi composé de façon descendante, dans le respect des objectifs de gestion fixés.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 11,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 7,
        gridRowStart: 2,
        gridRowEnd: 3,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Allocation  entre pays et secteurs',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[1],
        ],
      ],
      cardContent: {
        __html:
          'Elle constitue l’une des deux étapes de tout processus de gestion active et consiste à investir dans les pays et les secteurs d’activité les plus à même de permettre l’atteinte des objectifs du fonds en terme de rendement et de risque. L’allocation comprend deux dimensions : <br />• stratégique qui consiste à allouer les actifs du fonds en fonction de son profil en terme de rendement et de risque, de son horizon de placement et du montant des encours, <br />• tactique qui consiste à tirer profit des opportunités de marché en sur ou sous-pondérant les pays et les secteurs d’activité.',
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 3,
        gridRowEnd: 4,
        alignSelf: 'center',
        pointerEvents: 'none',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: `"stratégique"`,
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[1],
        ],
      ],
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 4,
        gridRowEnd: 5,
        alignSelf: 'center',
        pointerEvents: 'none',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: `"tactique"`,
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[1],
        ],
      ],
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      height: 1,
      index: 12,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 5,
        gridRowEnd: 6,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      cardTitle: 'APPROCHE BOTTOM-UP',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
      ],
      cardContent:
        'Elle consiste à faire la sélection des titres d’entreprises préalablement à celle des pays et secteurs d’activité. L’approche bottom-up repose d’abord sur une analyse micro-économique des entreprises, puis sur une analyse macro-économique des pays et des secteurs d’activité. La pondération des pays et des secteurs d’activité est en grande partie la conséquence du choix des titres d’entreprises. Le fonds est ainsi composé de façon ascendante, dans le respect des objectifs de gestion fixés.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 13,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 6,
        gridRowEnd: 7,
        alignSelf: 'center',
        pointerEvents: 'auto',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Sélection des titres',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[1],
        ],
      ],
      cardContent: {
        __html:
          '(ou stock picking en anglais).<br /><br />Elle constitue l’une des deux étapes de tout processus de gestion active et consiste à sélectionner les titres d’entreprises les plus à même de permettre l’atteinte des objectifs du fonds en terme de rendement et de risque. Elle repose sur une analyse du passé et établit des prévisions pour le futur',
      },
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 7,
        gridRowEnd: 8,
        alignSelf: 'center',
        pointerEvents: 'none',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Analyse (passé)',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[1],
        ],
      ],
    },
    {
      color: process.env.REACT_APP_WHITE,
      hoverColor: process.env.REACT_APP_WHITE,
      height: 1,
      index: 14,
      style: {
        gridColumnStart: 7,
        gridColumnEnd: 8,
        gridRowStart: 8,
        gridRowEnd: 9,
        alignSelf: 'center',
        pointerEvents: 'none',
      },
      buttonStyle: {
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
      },
      cardTitle: 'Prévision (futur)',
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[1],
        ],
      ],
    },
    {
      color: 'transparent',
      hoverColor: 'transparent',
      style: {
        gridColumnStart: 8,
        gridColumnEnd: 9,
        gridRowStart: 2,
        gridRowEnd: 9,
        alignSelf: 'center',
        pointerEvents: 'auto',
        transform: 'scale(-1,-1)',
      },
      arrow: arrowWithCircle,
      visibleIf: [
        [
          questions.originalQuestions[0].answers[0],
          questions.originalQuestions[1][0].answers[1],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[1],
          questions.moreQuestions[0].answers[1],
        ],
        [
          questions.originalQuestions[0].answers[1],
          questions.originalQuestions[1][1].answers[0],
          questions.originalQuestions[2].answers[0],
          questions.moreQuestions[0].answers[0],
        ],
      ],
    },
    {
      color: 'rgba(128,128,128,1.00)',
      hoverColor: 'rgba(128,128,128,1.00)',
      style: {
        gridColumnStart: 3,
        gridColumnEnd: 5,
        gridRowStart: 4,
        gridRowEnd: 7,
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
        gridColumnStart: 5,
        gridColumnEnd: 6,
        gridRowStart: 4,
        gridRowEnd: 7,
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

export default module_03_03_blocEnSavoirPlusType3QCMType1;
