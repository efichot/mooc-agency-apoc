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
    Pour cet exercice d’entraînement, vos réponses ne sont pas prises en compte dans le calcul de vos score et classement.`,
  },
  questions: [
    {
      questionNumber: 1,
      question: {
        __html: `1 - Qu’est-ce qu’une action&nbsp;?`,
      },
      answers: [
        {
          content: 'Une fraction de capital',
          correctAnswer: true,
        },
        {
          content: 'B - Une fraction de dette',
          correctAnswer: false,
        },
        {
          content: 'C - Aucun des deux',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Toute action représente une part du capital d’une entreprise; c’est un titre de propriété et non une dette.`,
      },
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - Qu’implique obligatoirement le titre action&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  Voter à l’Assemblée Générale des actionnaires',
          correctAnswer: false,
        },
        {
          content: 'B - Verser un dividende',
          correctAnswer: false,
        },
        {
          content: 'C - Aucune obligation',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Toute action est assortie d’un droit financier (le dividende) et d’un droit politique (le droit de vote), mais d’aucune obligation: l’actionnaire peut ne pas voter et l’Assemblée Générale des actionnaires peut décider que le dividende de l’année sera nul.`,
      },
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Qu’est-ce qu’une action à droit de vote double&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Une action qui vaut deux fois plus cher',
          correctAnswer: false,
        },
        {
          content: 'B - Une action réservée à l’actionnaire majoritaire ',
          correctAnswer: false,
        },
        {
          content: 'C - Une action qui donne deux voix à l’Assemblée Générale',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `L’action à droit de vote double donne à son détenteur un poids double dans les décisions votées en Assemblée Générale des actionnaires. Depuis la loi Florange du 29 mars 2014, ce droit est attribué d’office aux actionnaires des entreprises françaises cotées qui détiennent leurs actions depuis au moins deux ans, sauf si une décision contraire est adoptée par l’Assemblée Générale ou si les statuts prévoient déjà l’octroi de ce droit en faveur des actionnaires détenant leurs actions depuis une période déterminée.`,
      },
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - Quel statut a le détenteur d’une obligation vis-à-vis de l’émetteur&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Celui de propriétaire',
          correctAnswer: false,
        },
        {
          content: 'B - Celui de créancier',
          correctAnswer: true,
        },
        {
          content: 'C - Celui de prestataire',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Toute obligation représente une part de dette émise par une entreprise, une entité du secteur public ou un État ; c’est donc un titre de créance et non un titre de propriété ou une prestation de service.`,
      },
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - Quelle(s) obligation(s) doit remplir l’émetteur d’une obligation&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Rémunérer son détenteur ',
          correctAnswer: false,
        },
        {
          content: 'B - Rembourser son détenteur',
          correctAnswer: false,
        },
        {
          content: 'C - Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `L’obligation est un titre de créance assorti d’une double obligation de rémunérer en versant un revenu et de rembourser le nominal à l’échéance.`,
      },
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Qu’est-ce qu’une obligation à taux variable&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Une obligation dont le prix varie',
          correctAnswer: false,
        },
        {
          content: 'B - Une obligation dont le coupon varie',
          correctAnswer: true,
        },
        {
          content: 'C - Une obligation dont l’échéance varie',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `L’obligation à taux variable est un titre de créance dont la rémunération (ou coupon) matérialisée par  un taux d’intérêt varie le plus souvent par rapport à un taux d’emprunt d’État ou de marché obligataire. Comme toute obligation, elle a une échéance fixée à l’émission et peut s’échanger à un prix qui varie en fonction des taux du marché et du risque de l’émetteur.`,
      },
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Qu’est-ce qui différencie une action d’une obligation&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  Une action n’a jamais d’échéance',
          correctAnswer: true,
        },
        {
          content: 'B - Une obligation ne peut pas s’échanger',
          correctAnswer: false,
        },
        {
          content: 'C - Une action ne rémunère pas son détenteur',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Toute action est un titre de propriété; elle peut être cédée à un autre investisseur, voire rachetée par son émetteur à un prix qui va dépendre de celui du marché, mais en aucun cas remboursée; elle n’a pas d’échéance mais donne droit à une rémunération, le dividende qui est fixé à l’Assemblée Générale Annuelle des actionnaires. À l’opposé l’obligation est un titre de créance assortie d’une échéance et d’une rémunération fixées à son émission; elle peut néanmoins être échangée entre investisseurs jusqu’à sa date de remboursement.`,
      },
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Qu’est-ce qui différencie un titre monétaire -ou titre de créance négociable (TCN)- d’une obligation&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  Le TCN doit être remboursé à l’échéance',
          correctAnswer: false,
        },
        {
          content: 'B - L’obligation distribue un revenu',
          correctAnswer: false,
        },
        {
          content: 'C - La durée du TCN se compte en mois, celle de l’obligation en années',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `TCN et obligation ont en commun la double obligation de rémunérer et de rembourser à l’échéance. Ce sont des titres de créance dont la seule différence est la durée: celle du TCN se compte en mois, celle de l’obligation en années.`,
      },
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Dans quel cas le Titre de créance négociable (TCN) et l’obligation ne sont pas remboursés&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Résultat déficitaire de l’émetteur',
          correctAnswer: false,
        },
        {
          content: 'B - Faillite de l’émetteur',
          correctAnswer: true,
        },
        {
          content: 'C - Aucun, TCN et obligation sont toujours remboursés',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La faillite est le seul cas dans lequel l’émetteur de TCN ou d’obligations est dans l’incapacité d’honorer son obligation de remboursement. Un résultat déficitaire ne remet pas en cause le fonctionnement de l’entité vis-à-vis de ses créanciers; il peut par contre conduire l’Assemblée Générale des actionnaires à voter un dividende nul pour les détenteurs d’actions.`,
      },
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - A quoi sert un produit dérivé&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Gérer les risques liés aux fluctuations de valeur de l’actif concerné',
          correctAnswer: false,
        },
        {
          content: 'B - Prendre des  positions à l’achat ou à la vente avec une mise de fonds limitée',
          correctAnswer: false,
        },
        {
          content: 'C - Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Les produits dérivés ont une double fonction: celle de gérer les risques associés aux fluctuations de cours, de taux ou de prix de nombreux actifs, mais aussi celle de prendre des positions à l’achat ou à la vente avec une mise de fonds limitée.`,
      },
    },
  ],
};

export default module_12_blocQuiz;
