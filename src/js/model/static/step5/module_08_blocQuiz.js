import moduleTypes from '../moduleTypes';

const module_08_blocQuiz = {
  /*position: 6.2,*/
  modulType: moduleTypes.blocQuiz,
  name: `Caractéristiques des fonds de votre plan`,
  chapter: 'Questionnaire des fonds',
  step: 5,
  noChapter: false,
  duration: 5,
  description: {
    __html: `Pour chacune des dix questions proposées, sélectionnez la bonne réponse à l’aide des DICI et/ou fiches de reporting.
    Pour cet exercice d’entraînement, vos réponses ne sont pas prises en compte dans le calcul de vos score et classement.`,
  },
  questions: [
    {
      questionNumber: 1,
      question: {
        __html: `1 - Sur quel marché s’échangent les titres nouvellement émis ?`,
      },
      answers: [
        {
          content: ' 0',
          correctAnswer: false,
        },
        {
          content: '  2',
          correctAnswer: true,
        },
        {
          content: ' 7',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La durée de placement recommandée est supérieure à 5 ans pour le fonds Groupe Sodexo PEPS et supérieure à 8 ans pour Amundi Convictions ESR. Les fonds dont la durée de placement est inférieure à 5 ans sont tous compatibles avec un horizon de placement de 5 ans. Toutefois la durée de placement recommandée pour les fonds Amundi 3 mois ESR et Amundi Label Monétaire ESR est de 3 mois. En investissant dans ces fonds, vous ne prenez pas de risque mais vous ne faites pas non plus fructifier votre épargne. Sachant que votre horizon de placement est d’au moins 5 ans, vous pourriez investir une partie de votre épargne dans d’autres fonds, quitte à la réinvestir dans Amundi 3 mois ESR et Amundi Label Monétaire ESR  quand le moment de mobiliser cette épargne se rapprochera.`,
      },
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - Vous avez lu que la reprise économique allait s’accélérer en zone euro. Quel fonds du PERCO peut permettre de prendre en compte cette situation ?`,
      },
      answers: [
        {
          content: ' Amundi Convictions ESR',
          correctAnswer: false,
        },
        {
          content: '  CPR ES Croissance',
          correctAnswer: false,
        },
        {
          content: ' Expertise Europe Optima',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Expertise Europe Optima est investi sur l’Europe et il peut être exposé jusqu’à 90% aux actions qui constituent l’actif le plus porteur dans les périodes où une accélération de la croissance est anticipée. Les fonds Amundi Convictions ESR et CPR ES Croissance sont investis sur le monde et donc structurellement moins exposés sur l’Europe. Quant au fonds Amundi Label Harmonie Solidaire ESR qui est aussi présent dans le PERCO, il ne peut investir plus de 30% en actions.`,
      },
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Vous projetez de débloquer l’épargne de votre PEG dans l’année. Quelle attitude adopter ?`,
      },
      answers: [
        {
          content: ' Sécuriser votre épargne en arbitrant vers le fonds monétaire Amundi 3 mois ESR',
          correctAnswer: true,
        },
        {
          content: '  Laisser votre épargne sur le fonds actions Groupe Sodexo PEPS',
          correctAnswer: false,
        },
        {
          content:
            ' Diversifier votre épargne entre le fonds Amundi Label Équilibre Solidaire ESR et le fonds Groupe Sodexo PEPS',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Vous souhaitez donner du sens à votre investissement financier en soutenant des acteurs qui ont une mission d’utilité sociale. Quel fonds choisir ? La répartition de votre épargne dépend de votre profil d’investisseur et de votre horizon de placement. Puisque vous avez besoin de liquidités à brève échéance, la sécurisation de votre épargne est préférable afin d’éviter d’avoir à vendre au plus mauvais moment, en cas de baisse brutale des marchés financiers. Mieux vaut donc investir dans un fonds de risque 1 comme Amundi 3 mois ESR.`,
      },
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - Vous souhaitez donner du sens à votre investissement financier en soutenant des acteurs qui ont une mission d’utilité sociale. Quel fonds choisir ?`,
      },
      answers: [
        {
          content: ' Amundi 3 mois ESR',
          correctAnswer: false,
        },
        {
          content: '  Amundi Label Équilibre Solidaire ESR',
          correctAnswer: true,
        },
        {
          content: ' Aucun des deux',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `5 à 10% du fonds Amundi Label Équilibre Solidaire ESR sont investis dans les entreprises de l’économie sociale et solidaire dont l’objet principal est le soutien aux personnes fragilisées, la lutte contre les exclusions et les inégalités, l’éducation, le lien social, le développement durable, la transition énergétique ou la solidarité internationale (loi n°2014-856 du 31 juillet 2014).`,
      },
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - Compte-tenu des bonnes perspectives du Groupe Sodexo, vous vous étonnez que le fonds Groupe Sodexo PEPS proposé dans le PEG soit plus risqué que le fonds Amundi Convictions ESR proposé dans le PERCO. Comment l’expliquer ?`,
      },
      answers: [
        {
          content: ' Les perspectives de croissance du Groupe Sodexo sont surestimées',
          correctAnswer: false,
        },
        {
          content: '  La performance du fonds Groupe Sodexo PEPS dépend d’un seul titre',
          correctAnswer: true,
        },
        {
          content: ' Les titres non cotés détenus par Amundi Convictions ESR réduisent le risque',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le fonds Groupe Sodexo PEPS est investi exclusivement en actions du Groupe Sodexo. Contrairement au fonds Amundi Convictions ESR dont les investissements sont répartis sur des actions de nombreuses entreprises, son risque est concentré. Cela ne signifie pas que le fonds Groupe Sodexo PEPS sera moins performant que le fonds Amundi Convictions ESR ; par exemple si la croissance du Groupe Sodexo se révélait supérieure à celle des entreprises dont les titres sont détenus par Amundi Convictions ESR, la performance du fonds Groupe Sodexo PEPS pourrait même être supérieure.
        Quant aux titres non cotés détenus à hauteur de 0 à 30% par Amundi Convictions ESR, ils ne réduisent pas le risque car, échangés de gré à gré entre deux parties, ils peuvent être difficiles à vendre. Ils ne bénéficient pas de la liquidité assurée par la multiplicité des investisseurs présents sur les marchés cotés.`,
      },
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Au moment d’investir, vous hésitez entre le fonds Amundi Label Harmonie Solidaire ESR et le fonds Europe Expertise Optima qui ont la même durée minimum de placement recommandée mais des niveaux de risque respectifs de 3 et de 5. À partir de quels éléments décider ?`,
      },
      answers: [
        {
          content: ' Votre propension naturelle à prendre ou ne pas prendre de risque',
          correctAnswer: false,
        },
        {
          content: '  Votre propre horizon de placement ',
          correctAnswer: false,
        },
        {
          content: ' Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Ces deux fonds étant proposés dans le PERCO, on peut penser que votre horizon de placement est long. Vous pouvez donc accroître en proportion votre exposition aux actions qui sont aussi les actifs les plus performants à long terme, en répartissant par exemple vos investissements entre Amundi Label Harmonie Solidaire ESR et Europe Expertise Optima.`,
      },
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Vous souhaitez investir au niveau mondial et en fonction des grands enjeux de long terme. Quel fonds privilégier dans le PERCO ?`,
      },
      answers: [
        {
          content: ' Expertise Europe Optima',
          correctAnswer: false,
        },
        {
          content: '  CPR ES Croissance',
          correctAnswer: false,
        },
        {
          content: ' Amundi Convictions ESR ',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Amundi Convictions ESR a pour objectif sur le long terme d’investir au niveau mondial dans des thématiques et des classes d’actifs en ligne avec la conjoncture économique et liées aux défis mondiaux. En phase de croissance, le fonds privilégie les marchés actions et les valeurs de croissance. Inversement, en phase de décélération voire de récession, le fonds privilégie les valeurs défensives et les classes d’actifs moins risquées.`,
      },
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Vous pensez investir sur le marché obligataire grâce au fonds Amundi Label Harmonie ESR. Quel élément pourrait vous en dissuader ?`,
      },
      answers: [
        {
          content: ' Des anticipations de hausse brutale des taux d’intérêt',
          correctAnswer: true,
        },
        {
          content: '  Le fait que les obligations détenues dans ce fonds soient non cotées',
          correctAnswer: false,
        },
        {
          content: ' Les deux',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le fonds Amundi Label Harmonie ESR est majoritairement investi en obligations cotées. Il est donc sensible aux mouvements des taux d’intérêt. Leur hausse brutale rendrait le rendement des obligations détenues par le fonds comparativement moins intéressant puisque moins élevé que celui des nouvelles obligations émises sur le marché. Cela provoquerait donc une baisse de la valeur des obligations détenues et donc de la valeur du fonds.`,
      },
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Vous vous étonnez que les deux fonds monétaires proposés respectivement dans le PEG et le PERCO, Amundi 3 mois ESR et Amundi Label Monétaire ESR, puissent avoir des performances négatives. Quelle raison invoquer ?`,
      },
      answers: [
        {
          content: ' Le gérant ne respecte pas l’objectif de ces fonds',
          correctAnswer: false,
        },
        {
          content: '  Leur gestion est de mauvaise qualité',
          correctAnswer: false,
        },
        {
          content: ' Leur performance reflète celle du marché monétaire',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `La performance du marché monétaire est négative depuis 2015 comme l’indique l’évolution de l’EONIA qui est l’indice de référence de ce marché. Les fonds Amundi 3 mois ESR et Amundi Label Monétaire ESR étant classifiés « monétaires » par l’Autorité des Marchés Financiers, ils sont donc quasi intégralement investis sur le marché monétaire et leur performance est donc en ligne avec son évolution. Leur gérant peut néanmoins investir en partie sur des obligations dont l’échéance est très proche, ce qui explique que la performance puisse être meilleure que celle de l’indice de référence en dépit des frais de gestion supportés par ces fonds mais pas par l’indice.`,
      },
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - Dans le cadre du PERCO, vous souhaitez investir 50% en produits de taux (monétaire et obligataire) et 50% en actions. Quelle proposition privilégier ?`,
      },
      answers: [
        {
          content: ' 50% en Amundi Label Monétaire ESR et 50% en Amundi Label Harmonie Solidaire ESR',
          correctAnswer: false,
        },
        {
          content: '  100% en Amundi Convictions',
          correctAnswer: false,
        },
        {
          content: ' 100% en CPR ES Croissance',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Le fonds CPR ES Croissance est le seul qui présente en moyenne la répartition souhaitée en terme d’actifs. Le fonds Amundi Convictions a vocation à être investi principalement en actions, tandis que le fonds Amundi Label Monétaire ESR est investi à 100 % en produits de taux et que le fonds Amundi Label Harmonie Solidaire ESR ne peut pas l’être à plus de 30% en actions.`,
      },
    },
  ],
};

export default module_08_blocQuiz;
