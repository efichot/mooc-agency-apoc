import moduleTypes from '../moduleTypes';

const module_13_blocQuiz = {
  /*position: 6.2,*/
  modulType: moduleTypes.blocQuiz,
  name: `Évaluation de l'étape 2`,
  step: 2,
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
        __html: `1 - À quoi sert le DICI`,
      },
      answers: [
        {
          content: 'A - Vérifier si la gestion du fonds atteint les objectifs fixés',
          correctAnswer: false,
        },
        {
          content: 'B - Comparer les fonds au niveau européen ',
          correctAnswer: false,
        },
        {
          content: 'C - Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Le Document d’Information Clé pour l’Investisseur est remis, depuis le 1er juillet 2011, aux épargnants souhaitant investir dans un fonds. C’est un document standardisé au niveau européen donnant une information claire et synthétique permettant à l’épargnant  d’évaluer et  de comparer les fonds grâce notamment à l’affichage d’un niveau de risque et de rendement de 1 à 7 (SRRI).`,
      },
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - Que mesure le SRRI du fonds&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Sa performance',
          correctAnswer: false,
        },
        {
          content: 'B - Son risque',
          correctAnswer: false,
        },
        {
          content: 'C - Son niveau de risque et de rendement',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Le SRRI ou Synthetic Risk and Reward Indicator (indicateur synthétique de risque et de rendement) est, pour la majorité des fonds, basé sur un calcul de volatilité sur cinq ans glissants, reposant sur des rendements hebdomadaires puis ramené à une base annuelle.
          Compris entre 1 pour les fonds les moins risqués et 7 pour les plus volatiles, le SRRI est calculé chaque semaine et donne lieu à la mise à jour du DICI en cas de changement de note pendant 4 mois consécutifs.`,
      },
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Qu’implique une performance absolue positive pour l’investisseur&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  La valeur de son investissement a augmenté',
          correctAnswer: true,
        },
        {
          content: 'B - La valeur de son investissement a baissé',
          correctAnswer: false,
        },
        {
          content: 'C - La valeur de son investissement est supérieure à celle de l’indice de référence',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La performance absolue mesure la performance d’un fonds sans référence à un indice ou à l’évolution d’un marché.`,
      },
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - Qu’implique une performance relative positive pour l’investisseur&nbsp;?`,
      },
      answers: [
        {
          content: 'A -  La valeur de son investissement a augmenté',
          correctAnswer: false,
        },
        {
          content: 'B - La valeur de son investissement a baissé',
          correctAnswer: false,
        },
        {
          content: 'C - La valeur de son investissement est supérieure à celle de l’indice de référence',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `La performance relative résulte de la comparaison entre la performance du fonds et celle de son indice ou de son marché. La performance relative du fonds peut donc être positive quand bien même sa performance absolue est négative.`,
      },
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - Qu’est-ce qu’une surpondération&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Une position plus importante dans le fonds que dans l’indice',
          correctAnswer: true,
        },
        {
          content: 'B - Une position plus importante dans l’indice que dans le fonds',
          correctAnswer: false,
        },
        {
          content: 'C - La position la plus importante du fonds',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Les principales surpondérations sont en général les 10 positions présentant, en % de l’actif du fonds, les plus forts écarts positifs par rapport à l’indice de référence. À l’inverse, on parle de sous-pondérations.`,
      },
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Qu’est-ce que la maturité d’une obligation&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Sa durée',
          correctAnswer: true,
        },
        {
          content: "B - Sa date d'émission",
          correctAnswer: false,
        },
        {
          content: 'C - Sa date de remboursement',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La maturité est la durée de l’obligation de sa date d’émission (ou de création) à sa date d’échéance (ou de remboursement).`,
      },
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Comment réagit une obligation de sensibilité 3 à une hausse des taux d’intérêt de 1%&nbsp;?`,
      },
      answers: [
        {
          content: 'A - Son cours monte de 3%',
          correctAnswer: false,
        },
        {
          content: 'A - Son cours baisse de 3%',
          correctAnswer: true,
        },
        {
          content: "C - Cela n'a aucun effet",
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `La sensibilité mesure l’impact d’une variation des taux de 1% sur le cours d’un produit de taux (obligation ou produit monétaire) ou la valeur liquidative d’un OPC (valeur du portefeuille obligataire et monétaire détenu par le fonds). `,
      },
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Qu’est-ce que la Tracking Error&nbsp;?`,
      },
      answers: [
        {
          content: 'A - La marge d’erreur du gérant du fonds',
          correctAnswer: false,
        },
        {
          content: 'B - L’écart de performance entre le fonds et son indice',
          correctAnswer: true,
        },
        {
          content: 'C - La sous-performance du fonds',
          correctAnswer: false,
        },
      ],
      explication: {
        __html: `Elle mesure la dispersion prévisionnelle (ex-ante) ou passée (ex-post) des écarts de performance entre un fonds et son indice de référence. Plus la TE est proche de 0, plus le fonds se comporte comme son indice de référence en terme de risque et de performance (gestion passive). Plus elle est élevée, plus le gérant prend le risque de s’écarter de l’indice de référence dans l’objectif de le battre (gestion active).`,
      },
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Que mesure le Ratio de Sharpe&nbsp;?`,
      },
      answers: [
        {
          content: 'A - La performance du fonds ',
          correctAnswer: false,
        },
        {
          content: 'B -  Le risque du fonds',
          correctAnswer: false,
        },
        {
          content: 'C - La capacité du gérant à ajouter de la performance en prenant du risque ',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Il mesure le couple rendement-risque de l’investissement en partant du principe qu’un risque ne vaut d’être pris que s’il permet d’obtenir une performance supérieure à celle d’un placement sans risque. Il calcule le supplément de performance par rapport au taux sans risque obtenu pour chaque % de volatilité (risque) consenti.`,
      },
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - Quelle est la différence entre la Ratio de Sharpe et le Ratio d’Information?`,
      },
      answers: [
        {
          content: 'A -  La façon de mesurer la performance',
          correctAnswer: false,
        },
        {
          content: 'B - La façon de mesurer le risque',
          correctAnswer: false,
        },
        {
          content: 'C - Les deux',
          correctAnswer: true,
        },
      ],
      explication: {
        __html: `Le Ratio de Sharpe mesure la performance ajoutée par rapport au taux sans risque en fonction du risque pris en terme de volatilité. Le Ratio d’Information mesure la performance ajoutée par rapport à l’indice de référence en fonction du risque pris par rapport à cet indice.`,
      },
    },
  ],
};

export default module_13_blocQuiz;
