import moduleTypes from '../moduleTypes';

const module_12_blocQuiz = {
  /*position: 6.2,*/
  modulType: moduleTypes.blocQuiz,
  name: `Caractéristiques des fonds de votre plan`,
  chapter: 'Questionnaire des fonds',
  step: 4,
  noChapter: false,
  duration: 5,
  description: {
    __html: `Pour chacune des dix questions proposées, sélectionnez la bonne réponse à l’aide des DICI et/ou fiches de reporting.
Pour cet exercice d’entraînement, vos réponses ne sont pas prises en compte dans le calcul de vos score et classement.
`,
  },
  questions: [
    {
      questionNumber: 1,
      question: {
        __html: `1 - Vous projetez de débloquer votre épargne dans l’année. Quelle attitude adopte&nbsp;?`,
      },
      answers: [
        {
          content: 'Sécuriser votre épargne en arbitrant vers le fonds Amundi Trésorerie ESR',
          correctAnswer: true,
        },
        {
          content: '   Laisser votre épargne sur le fonds Amundi Label Actions Solidaire',
          correctAnswer: false,
        },
        {
          content:
            ' Diversifier votre épargne entre le fonds ADP Diversifié Prudent et le fonds ADP Diversifié Dynamique',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La répartition de votre épargne dépend de votre profil d’investisseur et de votre horizon de placement. Puisque vous avez besoin de liquidités à brève échéance, la sécurisation de votre épargne est préférable afin d’éviter d’avoir à vendre au plus mauvais moment, en cas de baisse brutale des marchés financiers. Mieux vaut donc investir dans un fonds de risque 1 comme Amundi Trésorerie ESR.`,
      },
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 -  Vous souhaitez donner du sens à votre investissement financier en soutenant des acteurs qui ont une mission d’utilité sociale. Quel fonds choisir&nbsp;?`,
      },
      answers: [
        {
          content: '    ADP Diversifié Prudent',
          correctAnswer: false,
        },
        {
          content: '  Amundi Label Actions Solidaire ESR',
          correctAnswer: true,
        },
        {
          content: ' Aucun des fonds proposés',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `5 à 10% du fonds Amundi Label Actions Solidaire ESR sont investis dans les entreprises de l’économie sociale et solidaire dont l’objet principal est le soutien aux personnes fragilisées, la lutte contre les exclusions et les inégalités, l’éducation, le lien social, le développement durable, la transition énergétique ou la solidarité internationale (loi n°2014-856 du 31 juillet 2014).
		Le solde, soit 90 à 95% du fonds, est investi en actions d’entreprises financièrement performantes mais aussi socialement responsables, c’est-à-dire respectueuses de l’environnement, des hommes et des règles de bonne gouvernance.
		Le fait que le fonds soit essentiellement investi en actions explique que son risque soit de 5.`,
      },
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Qu’est-ce qu’une action à droit de vote double&nbsp;?`,
      },
      answers: [
        {
          content: '  Les perspectives de croissance du Groupe ADP sont irréalistes',
          correctAnswer: false,
        },
        {
          content: '   La performance du fonds ADP Actionnariat Salarié dépend d’un seul titre ',
          correctAnswer: true,
        },
        {
          content: ' Les titres solidaires détenus par Amundi Label Actions Solidaire ESR réduisent le risque',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le fonds ADP Actionnariat Salarié est investi exclusivement en actions du Groupe ADP. Contrairement au fonds Amundi Label Actions Solidaire ESR dont les investissements sont répartis sur des actions de nombreuses entreprises, son risque est plus concentré. Cela ne signifie pas que ADP Actionnariat Salarié sera moins performant que Amundi Label Actions Solidaire ESR ; ce ne sera le cas que si la performance du Groupe ADP se révèle inférieure à celle des entreprises dont les titres sont détenus par Amundi Label Actions Solidaire ESR.
		Quant aux titres solidaires détenus à hauteur de 5 à 10% par ce fonds, ils ne réduisent pas le risque car, étant non cotés, ils peuvent être difficiles à vendre. Ils ne bénéficient pas de la liquidité assurée par la multiplicité des investisseurs présents sur les marchés cotés.
		`,
      },
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - Vous souhaitez investir dans les titres de votre entreprise. Quelles raisons pourraient vous inciter à choisir le fonds ADP Obligations&nbsp;?`,
      },
      answers: [
        {
          content: ' Vous êtes déjà investi dans le fonds ADP Actionnariat Salarié',
          correctAnswer: false,
        },
        {
          content: '  Vous souhaitez une valorisation régulière de votre investissement',
          correctAnswer: false,
        },
        {
          content: '  Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Le fonds ADP Obligations vous permet de diversifier vos investissements dans les titres de votre entreprise, mais contrairement au fonds ADP Actionnariat Salarié, il ne donne pas droit à l’abondement de votre entreprise.
À travers ADP Actionnariat Salarié, vous êtes investi en actions cotées de votre entreprise et donc exposé aux fluctuations des marchés actions : en période de forte croissance des marchés, vous pouvez gagner beaucoup, mais en cas de retournement et si vous devez vendre, vous pouvez perdre autant.
À travers ADP Obligations, vous êtes investi en obligations non cotées du Groupe ADP et votre épargne sera annuellement valorisée au minimum entre 0,47 et 1,42% en fonction de la part de titres monétaires dans le fonds (1 à 2 tiers selon les souscriptions), et dans l’hypothèse où le rendement du marché monétaire reste à son niveau bas actuel de -0,35% et où votre entreprise ne fait pas faillite.`,
      },
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - Vous pensez investir sur le marché obligataire grâce au fonds ADP Diversifié Prudent. Quel élément pourrait vous en dissuader&nbsp;?`,
      },
      answers: [
        {
          content: ' Des anticipations de hausse brutale des taux d’intérêt ',
          correctAnswer: true,
        },
        {
          content: '   Le fait que les obligations détenues dans ce fonds soient non cotées',
          correctAnswer: false,
        },
        {
          content: ' Les deux',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le fonds ADP Diversifié Prudent est majoritairement investi en obligations cotées. Il est donc sensible aux mouvements des taux d’intérêt. Leur hausse brutale rendrait le rendement des obligations détenues par le fonds comparativement moins intéressant que celui des nouvelles obligations émises sur le marché. Cela provoquerait une baisse de la valeur des obligations détenues et donc de la valeur du fonds.
ADP Diversifié Prudent est un fonds dédié aux salariés du Groupe ADP, mais ce n’est pas un fonds en titres de l’entreprise comme ADP Obligations qui, lui, est investi en obligations non cotées du Groupe ADP.
`,
      },
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Vous avez lu que les rendements du marché monétaire sont négatifs en 2017. Pourquoi les performances du fonds Amundi Trésorerie ESR le sont-elles beaucoup moins&nbsp;?`,
      },
      answers: [
        {
          content: ' Le gérant ne respecte pas l’objectif du fonds',
          correctAnswer: false,
        },
        {
          content: '  Amundi Trésorerie ESR n’est pas un fonds monétaire',
          correctAnswer: true,
        },
        {
          content: ' C’est impossible, il doit y avoir une erreur',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Amundi Trésorerie ESR est un fonds obligataire dont l’objectif est de surperformer l’indice du marché monétaire, l’EONIA, tout en gardant un risque très faible (soit moins de 0,5% annualisé) par rapport à cet indice. Il peut donc investir dans des fonds monétaires mais aussi dans des fonds obligataires investis dans des obligations dont l’échéance est courte, offrant ainsi une forte visibilité et donc un risque faible. En 2017 le rendement un peu plus élevé de ces fonds obligataires a permis de compenser en partie la performance négative du marché monétaire sans pour autant modifier le risque de 1 du fonds et sa durée minimum de placement de 6 mois.`,
      },
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Au moment d’investir, vous hésitez entre le fonds ADP Diversifié Prudent et le fonds ADP Diversifié Dynamique qui ont la même durée minimum de placement recommandée mais des niveaux de risque respectifs de 3 et de 5. À partir de quels éléments décider&nbsp;?`,
      },
      answers: [
        {
          content: '  Votre propension naturelle à prendre ou ne pas prendre de risque',
          correctAnswer: false,
        },
        {
          content: '  Votre propre horizon de placement',
          correctAnswer: false,
        },
        {
          content: '  Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Si vous avez une durée maximale de placement de 5 ans, votre choix va dépendre de votre profil personnel et de la perte maximale potentielle que vous seriez prêt à assumer, sachant que ADP Diversifié Dynamique est en moyenne 3,5 fois plus exposé aux actifs risqués que sont les actions, que ADP Diversifié Prudent.
Si votre horizon de placement est plus long, vous pouvez accroître en proportion votre exposition aux actions qui sont aussi les actifs les plus performants à long terme, en répartissant par exemple vos investissements entre ADP Diversifié Dynamique et ADP Diversifié Prudent.
`,
      },
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Vous souhaitez investir 30% en produits de taux (monétaire et obligataire) et 70% en actions. Quelle proposition privilégier&nbsp;?`,
      },
      answers: [
        {
          content: '  30% en Amundi Trésorerie ESR et 70% en ADP Diversifié Dynamique',
          correctAnswer: false,
        },
        {
          content: '  30% en ADP Diversifié Prudent et 70% en Amundi Label Actions Solidaire ESR',
          correctAnswer: false,
        },
        {
          content: ' 100% en ADP Diversifié Dynamique',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `ADP Diversifié Dynamique présente à lui seul la répartition souhaitée en moyenne entre les différents actifs. Y rajouter 30% en Amundi Trésorerie ESR reviendrait à investir au total 49% en produits de taux.
ADP Diversifié Prudent est en moyenne investi à 20 % en monétaire, 60 % en obligations et  20 % en actions, et le fonds Amundi Label Actions Solidaire ESR entre 90 à 95% en actions et 5 à 10 % en titres solidaires. La répartition proposée ne permet donc pas de réaliser l’investissement souhaité.

`,
      },
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Vous souhaitez investir pour 5 ans maximum. Combien de fonds du dispositif d’ADP ne correspondent pas à cet horizon &nbsp;?`,
      },
      answers: [
        {
          content: ' 5',
          correctAnswer: false,
        },
        {
          content: '  1',
          correctAnswer: false,
        },
        {
          content: ' 0s',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Tous les fonds proposés par le dispositif d’ADP sont compatibles avec une durée d’investissement de 5 ans maximum. Toutefois la durée de placement recommandée du fonds Amundi Trésorerie ESR est de 6 mois. En investissant dans ce fonds, vous ne prenez pas de risque mais vous ne faites pas non plus fructifier votre épargne. Dans ce contexte vous pourriez investir une partie de votre épargne dans d’autres fonds, quitte à la réinvestir dans Amundi Trésorerie ESR quand le moment de mobiliser cette épargne se rapprochera.`,
      },
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - Vous avez lu que la reprise économique allait s’accélérer en zone euro dans un contexte global de croissance mondiale. Quel fonds du dispositif du dispositif d’ADP peut permettre de prendre en compte cette situatio&nbsp;?`,
      },
      answers: [
        {
          content: ' ADP Diversifié Prudent',
          correctAnswer: false,
        },
        {
          content: '   ADP Diversifié Dynamique',
          correctAnswer: true,
        },
        {
          content: '  ADP Obligations',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `ADP Diversifié Dynamique est le fonds le plus exposé (70% en moyenne) aux actions qui constituent l’actif le plus porteur dans les périodes où une accélération de la croissance est anticipée. Il est en outre investi, comme l’indique son indice de référence, pour une partie importante en zone euro (40% STOXX 50), mais aussi aux États-Unis (17% S&P500), au Japon (8% MSCI Japon) et sur les marchés émergents (5% MSCI Emerging Markets).`,
      },
    },
  ],
};

export default module_12_blocQuiz;
