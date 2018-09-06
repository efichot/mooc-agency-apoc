import moduleTypes from '../moduleTypes';

const module_12_blocQuiz = {
  /*position: 6.2,*/
  modulType: moduleTypes.blocQuiz,
  name: `Évaluation de l'étape 1`,
  step: 1,
  chapter: 'Quiz',
  noChapter: false,
  duration: 5,
  description: {
    __html: `Répondez aux dix questions suivantes dans le temps imparti.
    Votre score est déterminé par le nombre de bonnes réponses.
    Seul votre classement dépend de votre rapidité à bien répondre.`,
  },
  questions: [
    {
      questionNumber: 1,
      question: {
        __html: `1 - Quelles questions doit examiner l’épargnant avant d’investir&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Le degré de risque qu’il est prêt à prendre',
          correctAnswer: false,
        },
        {
          content: 'B - Son horizon de placement  ',
          correctAnswer: false,
        },
        {
          content: 'C - Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `La réponse à ces questions va déterminer son profil et l’allocation d’actifs qui lui correspond c’est-à-dire la proportion d’actifs risqués (actions) et moins risqués (obligations et titres monétaires) qui devraient composer son investissement. Plus son horizon est éloigné, plus sa capacité à prendre du risque est forte ; n’ayant pas besoin de liquidités à brève échéance, il n’est pas contraint de sécuriser ses placements pour éviter d’avoir à les vendre au plus mauvais moment, en cas de baisse brutale des marchés.`,
      },
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - Pour quelle raison est-il recommandé de diversifier ses placements sur les marchés actions, obligataire et monétaire&nbsp;?`,
      },
      answers: [
        {
          content: `A -  Ne pas perdre d'argent`,
          correctAnswer: false,
        },
        {
          content: `B - Amortir la baisse d'un des marchés`,
          correctAnswer: true,
        },
        {
          content: 'C - Réduire ses frais',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Les marchés actions, obligataire et monétaire n'évoluent pas de façon parallèle. La baisse de l'un peut être en tout ou partie compensée par la hausse ou la meilleure résistance de l'autre. Mais la diversification n'est pas une garantie de conserver son capital; tous les marchés sont susceptibles de baisser et, en cas de crise, ils peuvent le faire simultanément. Quant aux frais, ils dépendent surtout des politiques commerciales.`,
      },
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Pourquoi les obligations sont-elles moins risquées que les actions&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Leurs performances sont moins ‎volatiles',
          correctAnswer: false,
        },
        {
          content: `B - Sauf cas de faillite, le détenteur d'obligations est rémunéré et remboursé`,
          correctAnswer: false,
        },
        {
          content: 'C - Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Le détenteur d'obligations détient une partie de la dette des États et entreprises qui les ont émises. Il reçoit donc à ce titre une rémunération et il est remboursé à leur échéance, sauf cas de faillite. Pour les actions, il n'y a en revanche aucune obligation de rémunération (le dividende peut être nul), ni de remboursement (le détenteur d'actions a le statut de propriétaire), ce qui explique que leur risque, et donc la volatilité de leurs performances, soient plus grands.`,
      },
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - À quoi sert l'indice de référence d’un fonds&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Calculer sa performance',
          correctAnswer: false,
        },
        {
          content: `B - Mesurer la capacité du gérant à ajouter de la performance`,
          correctAnswer: true,
        },
        {
          content: 'C - Connaître les performances futures du fonds',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Comme son nom l'indique, l'indice de référence permet de voir si la performance de fonds est supérieure, égale ou inférieure à celle des marchés sur lesquels il est investi. Le fonds pouvant détenir des titres différents de ceux de l'indice, ce dernier ne permet ni de calculer les performances, ni de les prévoir avec certitude.`,
      },
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - En fonction de quel critère l’AMF classe-t-elle les fonds monétaires&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  La durée courte des titres détenus',
          correctAnswer: true,
        },
        {
          content: `B - L’actif le plus risqué détenu`,
          correctAnswer: false,
        },
        {
          content: 'C - La proportion de titres non-monétaires détenus',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `L’AMF définit les fonds monétaires en fonction  de la durée des titres qui les composent. Elle distingue les fonds monétaires court terme des fonds monétaires dont les titres peuvent avoir une durée un peu plus longue et qui peuvent donc être plus rémunérateurs.`,
      },
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Quelle proportion d'actions Sodexo doit détenir le fonds Groupe Sodexo PEPS pour être classifié "fonds en titres de l'entreprise"&nbsp;?`,
      },
      answers: [
        {
          content: 'A - 100%',
          correctAnswer: false,
        },
        {
          content: `B - ‎80%`,
          correctAnswer: false,
        },
        {
          content: 'C - Au moins 1/3',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Pour être classifié « fonds en titres de l’entreprise » par l’AMF, il faut être composé d’au moins un tiers en titres de l’entreprise (fonds d’actionnariat salarié) ou encore d’au plus un tiers en titres de l’entreprise (fonds diversifié en titres de l’entreprise), le solde pouvant être indifféremment constitué d’actions, d’obligations ou de monétaire.`,
      },
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Quel pourcentage d’actions doit détenir un fonds actions selon l’AMF&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Au moins 60%',
          correctAnswer: true,
        },
        {
          content: `B - Au plus 60%`,
          correctAnswer: false,
        },
        {
          content: 'C - Au moins 80%',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Pour être classifié « fonds actions » par l’AMF, il faut être composé d’au moins 60% d’actions, le solde pouvant être indifféremment constitué d’obligations ou de monétaire.</br>Cette classification est rendue optionnelle à compter du 1er janvier 2018.`,
      },
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Que détient l’épargnant qui investit dans un FCPE&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  Des actions du fonds',
          correctAnswer: false,
        },
        {
          content: `B - Des parts du fonds`,
          correctAnswer: true,
        },
        {
          content: 'C - Des droits de vote',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le FCPE n’étant pas une société, l’épargnant qui investit dans un FCPE ne détient pas des actions du fonds mais des parts qui correspondent aux montants investis. Il n’est pas actionnaire du fonds et n’intervient pas dans la vie du fonds par un vote. Cela n’empêche en rien que le FCPE puisse lui-même être investi en actions et vote dans les Assemblées Générales des entreprises dont il détient les titres.`,
      },
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Comment se nomme un FCPE ouvert à des entreprises appartenant à des groupes différents&nbsp;?`,
      },
      answers: [
        {
          content: 'A - FCPE dédié',
          correctAnswer: false,
        },
        {
          content: `B - FCPE multi-entreprises`,
          correctAnswer: true,
        },
        {
          content: 'C - FCPE inter-entreprises',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Il s’agit d’un FCPE multi-entreprises. </br>A contrario le FCPE dédié est réservé aux salariés d’entreprises qui appartiennent à un même groupe. Il implique généralement des montants collectés suffisamment importants  pour  justifier des coûts et une gouvernance spécifiques. Si le qualificatif d’inter-entreprises n’est pas utilisé pour les FCPE, il l’est en revanche pour les plans d’épargne entreprise auxquels plusieurs entreprises de groupes différents peuvent adhérer.`,
      },
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - Quelle est la spécificité du fonds solidaire selon l’AMF&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Investir dans des organismes solidaires',
          correctAnswer: true,
        },
        {
          content: `B - Financer exclusivement des associations`,
          correctAnswer: false,
        },
        {
          content: 'C - Investir dans des entreprises aux pratiques responsables',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Selon l’AMF, le fonds solidaire est investi à hauteur de 5 à 10% en titres d’entreprises de l’économie sociale et solidaire qui, depuis la loi n°2014-856 du 31 juillet 2014, se composent des coopératives, mutuelles, fondations, associations, ou des sociétés commerciales remplissant plusieurs critères (gouvernance démocratique inscrite dans les statuts, but autre que le seul partage des résultats, bénéfices réinvestis à hauteur d’au moins 50% dans l’activité et d’au moins 20% en réserve statutaire, mission d’utilité sociale). Il ne faut pas le confondre avec le fonds ISR qui investit dans des entreprises aux pratiques responsables.`,
      },
    },
  ],
};

export default module_12_blocQuiz;
