import moduleTypes from '../moduleTypes';

const module_12_blocQuiz = {
  /* position: 6.2, */
  modulType: moduleTypes.blocQuiz,
  name: `Évaluation du module 1`,
  step: 1,
  noMargin: true,
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
        __html: `1 - Quelles questions doit examiner l’épargnant avant de placer son argent&nbsp;?`,
      },
      answers: [
        {
          content: ' Le degré de risque qu’il est prêt à prendre',
          correctAnswer: false,
        },
        {
          content: '  Son horizon de placement  ',
          correctAnswer: false,
        },
        {
          content: ' Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `La réponse à ces deux questions va déterminer son profil et l’allocation d’actifs qui lui correspond c’est-à-dire la proportion d’actifs risqués (actions) et moins risqués (obligations et titres monétaires) qui devraient composer son placement. Plus son horizon est éloigné, plus sa capacité à prendre du risque est forte ; n’ayant pas besoin de liquidités à brève échéance, il n’est pas obligé de sécuriser ses placements pour éviter d’avoir à les vendre au plus mauvais moment, en cas de baisse brutale des marchés financiers.`,
      },
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - Pour quelle raison est-il recommandé de diversifier ses placements sur les marchés actions, obligataire et monétaire&nbsp;?`,
      },
      answers: [
        {
          content: `  Ne pas perdre d'argent`,
          correctAnswer: false,
        },
        {
          content: `  Amortir la baisse d'un des marchés`,
          correctAnswer: true,
        },
        {
          content: ' Réduire ses frais',
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
          content: ' Leurs performances sont moins ‎volatiles',
          correctAnswer: false,
        },
        {
          content: `  Sauf cas de faillite, le détenteur d'obligations est rémunéré et remboursé`,
          correctAnswer: false,
        },
        {
          content: ' Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Détenir des obligations revient à détenir une partie de la dette des États, organismes publics et entreprises concernés. Le fonds qui détient des obligations reçoit donc à ce titre une rémunération et il est remboursé à leur échéance, sauf cas de faillite de l’État, de l’organisme public ou de l’entreprise. Pour les actions, il n'y a en revanche aucune obligation de rémunération (le dividende peut être nul), ni de remboursement (le détenteur d'actions a le statut de propriétaire), ce qui explique que leur risque, et donc la volatilité de leurs performances, soient plus grands.`,
      },
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - Quelle caractéristique rend les fonds monétaires peu risqués&nbsp;?`,
      },
      answers: [
        {
          content: ' Leur performance est toujours positive',
          correctAnswer: false,
        },
        {
          content: `  La durée des titres détenus est courte`,
          correctAnswer: true,
        },
        {
          content: ' Leur rendement est garanti',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La durée courte des titres détenus, et donc leur remboursement à brève échéance, donnent beaucoup de visibilité sur la rémunération attendue. Mais cette rémunération est liée au niveau des taux d’intérêt ; elle peut être négative et n’est pas garantie. L’Autorité des Marchés Financiers (AMF) définit les fonds monétaires en fonction de la durée des titres. Elle distingue les fonds monétaires court terme des fonds monétaires dont les titres peuvent avoir une durée un peu plus longue et qui peuvent donc être plus rémunérateurs.`,
      },
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - De quoi est composé un fonds en titres de l’entreprise &nbsp;?`,
      },
      answers: [
        {
          content: '  D’actions de l’entreprise',
          correctAnswer: false,
        },
        {
          content: `  D’obligations de l’entreprise`,
          correctAnswer: false,
        },
        {
          content: ' Les deux sont possibles',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Un fonds en titres de l’entreprise est composé d’actions ou d’obligations émises par l’entreprise qui les propose ainsi aux salariés. En pourcentage du fonds, ces titres représentent au moins un tiers (fonds d’actionnariat salarié notamment) ou au plus un tiers (fonds diversifié en titres de l’entreprise) ; le solde est indifféremment constitué d’actions, d’obligations ou de titres monétaires d’autres émetteurs.`,
      },
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Pourquoi un fonds en titres de l’entreprise est-il considéré comme risqué&nbsp;?`,
      },
      answers: [
        {
          content: ' Il est moins diversifié ',
          correctAnswer: true,
        },
        {
          content: `  Il est moins performant `,
          correctAnswer: false,
        },
        {
          content: ' L’horizon de placement est plus lointain',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Il est moins diversifié car le poids des titres de l’entreprise est plus important que celui de chacun des autres titres. Sa performance va donc beaucoup dépendre de l’évolution d’un seul titre, celui de l’entreprise concernée ; cela ne signifie pas qu’il sera moins performant (l’évolution peut se faire à la hausse comme à la baisse), ni qu’il faille garder les parts du fonds plus longtemps (le fonds en titres de l’entreprise est éligible au Plan d’Épargne de l’entreprise dont la durée est de 5 ans).`,
      },
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Quel pourcentage d’actions doit détenir un fonds actions selon l’AMF&nbsp;?`,
      },
      answers: [
        {
          content: ' La volatilité de sa performance ',
          correctAnswer: true,
        },
        {
          content: `  Sa performance négative `,
          correctAnswer: false,
        },
        {
          content: ' Les deux',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La volatilité de la performance d’un fonds fait prendre à l’épargnant le risque d’avoir à retirer son argent à un moment où son placement est perdant. C’est pour cette raison qu’il est recommandé de placer son épargne dans un fonds risqué quand on n’a pas besoin de cet argent à brève échéance. L’épargnant a ainsi le temps de voir la performance du fonds s’améliorer avant de vendre.`,
      },
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Que détient l’épargnant qui place de l’argent dans un Fonds Commun de Placement d’Entreprise (FCPE)&nbsp;?`,
      },
      answers: [
        {
          content: '  Des actions du fonds',
          correctAnswer: false,
        },
        {
          content: `  Des parts du fonds`,
          correctAnswer: true,
        },
        {
          content: ' Des droits de vote',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le FCPE n’étant pas une société, l’épargnant qui place de l’argent dans un FCPE ne détient pas des actions du fonds mais des parts qui correspondent aux montants placés. Il n’est pas actionnaire du fonds et n’intervient pas dans la vie du fonds par un vote. Cela n’empêche en rien que le FCPE puisse lui-même être investi en actions et vote dans les Assemblées Générales des entreprises dont il détient les titres.`,
      },
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Comment se nomme un FCPE proposé par des entreprises appartenant à des groupes différents&nbsp;?`,
      },
      answers: [
        {
          content: ' FCPE dédié',
          correctAnswer: false,
        },
        {
          content: `  FCPE multi-entreprises`,
          correctAnswer: true,
        },
        {
          content: ' FCPE inter-entreprises',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Il s’agit d’un FCPE multi-entreprises.
		A contrario le FCPE dédié est réservé aux salariés d’entreprises qui appartiennent à un même groupe. Il implique généralement des montants collectés 		suffisamment importants pour justifier des coûts et une gouvernance spécifiques. Si le qualificatif d’inter-entreprises n’est pas utilisé pour les 		FCPE, il l’est en revanche pour les dispositifs -ou plans- d’épargne salariale auxquels plusieurs entreprises de groupes différents peuvent adhérer.`,
      },
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 -  Quelle est la spécificité du fonds solidaire&nbsp;?`,
      },
      answers: [
        {
          content: ' Investir dans des organismes solidaires',
          correctAnswer: true,
        },
        {
          content: `  Financer exclusivement des associations`,
          correctAnswer: false,
        },
        {
          content: ' Investir dans des entreprises aux pratiques responsables',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Le fonds solidaire investit, entre 5 et 10% des sommes collectées, dans les entreprises de l’économie sociale et solidaire (coopératives, mutuelles, fondations, associations, ou sociétés commerciales ayant une mission d’utilité sociale, un but autre que lucratif et une gouvernance démocratique). Il ne faut pas le confondre avec le fonds ISR qui investit dans des entreprises aux pratiques responsables.`,
      },
    },
  ],
};

export default module_12_blocQuiz;
