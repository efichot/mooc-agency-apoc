import moduleTypes from '../moduleTypes';

const module_12_blocQuiz = {
  /*position: 6.2,*/
  modulType: moduleTypes.blocQuiz,
  name: `Caractéristiques des fonds de votre plan`,
  chapter: 'Questionnaire des fonds',
  noChapter: false,
  duration: 5,
  description: {
    __html: `Pour chacune des dix questions proposées, sélectionnez la bonne réponse à l’aide des DICI et/ou fiches de reporting. 
    Pour cet exercice d’entraînement, vos réponses ne sont pas prises en compte dans le calcul de vos score et classement.`
  },
  questions: [
    {
      questionNumber: 1,
      question: {
        __html: `1 - Vous souhaitez investir pour 5 ans maximum. Combien de fonds du PEG et du PERCO ne correspondent pas à cet horizon ?`
      },
      answers: [
        {
          content: 'A - Le marché primaire',
          correctAnswer: true
        },
        {
          content: 'B - Le marché secondaire',
          correctAnswer: false
        },
        {
          content: 'C - Le marché de gré à gré',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Le qualificatif de primaire fait référence aux titres émis, soit par des émetteurs déjà cotés, soit par des émetteurs qui s’introduisent en Bourse. Par analogie au marché des biens de consommation, on pourrait parler de « marché du neuf », tandis qu’on pourrait qualifier de « marché de l’occasion » le marché secondaire où s’échangent entre investisseurs les titres déjà existants.`
      }
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - Sur quel marché s’échangent les titres non cotés ?`
      },
      answers: [
        {
          content: 'A -  Le marché parallèle',
          correctAnswer: false
        },
        {
          content: 'B- Le marché secondaire',
          correctAnswer: false
        },
        {
          content: 'C - Le marché de gré à gré',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `L’échange de titres entre deux contreparties qui se mettent d’accord sur le prix et les conditions de transaction en dehors du cadre du marché réglementé, se fait sur le marché de gré à gré.`
      }
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Qu’entend-on par marché réglementé ?`
      },
      answers: [
        {
          content: 'A - Le marché des titres cotés ',
          correctAnswer: true
        },
        {
          content: 'B- Le marché des titres non cotés',
          correctAnswer: false
        },
        {
          content: 'C - Le marché des titres cotés et non cotés',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Le marché réglementé assure la cotation des titres en respectant un certain nombre de dispositions réglementaires qui régissent son fonctionnement. Il est distinct du marché de gré à gré où s’échangent les titres non cotés.`
      }
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - Qui régule les marchés financiers réglementés en France ?`
      },
      answers: [
        {
          content: 'A - L’Autorité des Marchés Financiers',
          correctAnswer: true
        },
        {
          content: 'B- La Banque de France',
          correctAnswer: false
        },
        {
          content: 'C - L’Autorité de Contrôle Prudentiel et de Résolution',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `L’Autorité des Marchés Financiers (AMF) est l’autorité publique française indépendante qui régule les marchés financiers. C’est elle qui agrée les sociétés de gestion tandis que l’Autorité de Contrôle Prudentiel et de Résolution (ACPR) agrée les intermédiaires.`
      }
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - Comment appelle-t-on les acteurs qui font des placement sur les marchés financiers ?`
      },
      answers: [
        {
          content: 'A - Les émetteurs',
          correctAnswer: false
        },
        {
          content: 'B- Les intermédiaires',
          correctAnswer: false
        },
        {
          content: 'C - Les investisseurs',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `Sont appelés investisseurs tous les acteurs économiques qui font des placements sur les marchés financiers, achètent des titres ou vendent ceux qu’ils ont achetés.`
      }
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Quelle catégorie d’acteurs ne peut émettre des actions ?`
      },
      answers: [
        {
          content: 'A - Les banques',
          correctAnswer: false
        },
        {
          content: 'B - Les États',
          correctAnswer: true
        },
        {
          content: 'C - Les entreprises',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Les États n’ayant pas de capital contrairement aux entreprises et aux banques, ils ne peuvent pas émettre d'action.`
      }
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Quelle mission n’assure pas l’Autorité des Marchés Financiers ?`
      },
      answers: [
        {
          content:
            'A -  La protection de l’épargne investie dans les produits financiers',
          correctAnswer: false
        },
        {
          content: 'B - L’information des investisseurs',
          correctAnswer: false
        },
        {
          content: 'C - Le contrôle des comptes des entreprises cotées',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `L’Autorité des Marchés Financiers (AMF) veille à la fois à la protection de l’épargne investie dans les produits financiers, à l’information des investisseurs et au bon fonctionnement des marchés financiers.`
      }
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Quel est le rôle d’une société de gestion ?`
      },
      answers: [
        {
          content: 'A - Placer ses propres capitaux',
          correctAnswer: false
        },
        {
          content: 'B- Gérer  pour compte de tiers',
          correctAnswer: true
        },
        {
          content: 'C - Assurer les échanges entre émetteurs et investisseurs',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Elle gère des portefeuilles de valeurs mobilières pour le compte de tiers, dans le cadre de contraintes réglementaires et contractuelles et dans l’objectif d’obtenir le meilleur rendement possible en fonction du risque choisi.`
      }
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Sur quel marché les banques échangent-elles directement entre elles des actifs financiers à court terme ?`
      },
      answers: [
        {
          content: 'A - Le marché interbancaire',
          correctAnswer: true
        },
        {
          content: 'B- Le marché obligataire',
          correctAnswer: false
        },
        {
          content: 'C - Le marché secondaire',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Les banques commerciales (ou banques de détail) qui collectent les ressources des particuliers et prêtent aux entreprises, ont recours au marché interbancaire pour équilibrer ces flux en échangeant directement entre elles à court terme.`
      }
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - Qui intervient sur les marchés financiers à la fois en tant qu’émetteur, investisseur et intermédiaire ?`
      },
      answers: [
        {
          content: 'A - Les États et les collectivités ',
          correctAnswer: false
        },
        {
          content: 'B - Les banques et les assureurs',
          correctAnswer: true
        },
        {
          content: 'C - Les courtiers',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `A travers leurs différents métiers, les groupes financiers (assureurs, banques) peuvent intervenir sur les marchés financiers à la fois en tant qu’émetteur, investisseur et intermédiaire. La réglementation prévoit néanmoins la séparation de ces métiers en filiales juridiquement distinctes de façon à éviter les conflits d’intérêt.`
      }
    }
  ]
};

export default module_12_blocQuiz;
