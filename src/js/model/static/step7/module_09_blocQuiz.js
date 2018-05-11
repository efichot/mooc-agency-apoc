import moduleTypes from '../moduleTypes';

const module_09_blocQuiz = {
  /*position: 6.2,*/
  modulType: moduleTypes.blocQuiz,
  name: `Évaluation de l'étape 7`,
  chapter: 'Quiz',
  noChapter: false,
  duration: 5,
  description: {
    __html: `Répondez aux dix questions suivantes dans le temps imparti.
    Votre score est déterminé par le nombre de bonnes réponses.
    Seul votre classement dépend de votre rapidité à bien répondre.`
  },
  questions: [
    {
      questionNumber: 1,
      question: {
        __html: `1 - À quoi mesure-t-on le degré de risque d’un titre quand on investit ?`
      },
      answers: [
        {
          content: 'A - À sa sous-performance',
          correctAnswer: false
        },
        {
          content: 'B - À son rendement bas',
          correctAnswer: true
        },
        {
          content: 'C - À sa volatilité',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Plus le prix ou le cours d’un titre est volatile, plus le titre est risqué. L’évaluation de son prix ou de son cours est alors difficile à anticiper pour l’investisseur, à la hausse comme à la baisse. L’investisseur qui prend beaucoup de risque, peut gagner beaucoup mais aussi perdre beaucoup, et inversement.`
      }
    },
    {
      questionNumber: 2,
      question: {
        __html: `2 - À la sortie d’une crise économique, sur quel secteur un gérant a-t-il plutôt intérêt à investir ?`
      },
      answers: [
        {
          content: 'A - La construction',
          correctAnswer: true
        },
        {
          content: 'B - Le luxe',
          correctAnswer: false
        },
        {
          content: 'C - L’agro-alimentaire',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `La construction fait partie des secteurs cycliques qui ont tendance à amplifier les mouvements économiques. À la sortie d’une crise, leurs titres ont tendance à surperformer tandis que les titres des secteurs défensifs comme le luxe ou l’agroalimentaire ont tendance à sous-performer.`
      }
    },
    {
      questionNumber: 3,
      question: {
        __html: `3 - Que mesurent les agences de notation?`
      },
      answers: [
        {
          content:
            'A - La capacité de remboursement à court terme des émetteurs',
          correctAnswer: false
        },
        {
          content:
            'B - La capacité de remboursement à moyen et long terme des émetteurs',
          correctAnswer: true
        },
        {
          content: 'C - Les deux',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Les agences de notation évaluent la capacité des emprunteurs (État, collectivités locales ou entreprises) à rembourser le capital et les intérêts de leurs dettes à un instant et sur une période donnés. Elles émettent des notes à court terme (dettes à moins d’un an) et à long terme (dettes à plus d’un an).`
      }
    },
    {
      questionNumber: 4,
      question: {
        __html: `4 - De ces trois obligations d’État laquelle a tendance à être la plus volatile ?`
      },
      answers: [
        {
          content: 'A - L’obligation à 5 ans',
          correctAnswer: false
        },
        {
          content: 'B - L’obligation à 20 ans',
          correctAnswer: false
        },
        {
          content: 'C - L’obligation à 10 ans',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `Plus l’échéance de l’obligation est éloignée, moins la visibilité est grande pour l’investisseur et plus le titre est risqué donc volatile.`
      }
    },
    {
      questionNumber: 5,
      question: {
        __html: `5 - Pourquoi le monétaire est-il considéré comme la classe d’actif la moins risquée ?`
      },
      answers: [
        {
          content: 'A - Il offre une bonne rémunération',
          correctAnswer: false
        },
        {
          content: 'B - Les échéances sont courtes',
          correctAnswer: true
        },
        {
          content: 'C - Il n’y a pas de risque de change',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Les titres monétaires ayant la durée la plus faible (inférieure à un an), ils présentent pour l’investisseur une forte visibilité et donc le risque le plus faible.`
      }
    },
    {
      questionNumber: 6,
      question: {
        __html: `6 - Que fait le gérant pour limiter le risque du portefeuille ?`
      },
      answers: [
        {
          content: 'A - Il diversifie ses placements',
          correctAnswer: true
        },
        {
          content: 'B - Il achète moins de titres',
          correctAnswer: false
        },
        {
          content: 'C - Il vend des titres',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Plus un portefeuille est investi sur un nombre important de titres et donc diversifié, moins il est risqué, et inversement. D’où l’intérêt de la gestion collective qui permet à l’épargnant d’avoir accès à une gestion diversifiée que ses montants de placement ou sa connaissance des marchés financiers ne lui permettent de réaliser à titre individuel.`
      }
    },
    {
      questionNumber: 7,
      question: {
        __html: `7 - Que fait le gérant pour améliorer la performance du portefeuille ?`
      },
      answers: [
        {
          content: 'A - Des arbitrages intersectoriels',
          correctAnswer: false
        },
        {
          content: 'B - Des arbitrages intra-sectoriels',
          correctAnswer: false
        },
        {
          content: 'C - Les deux',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `En fonction de la conjoncture, le gérant peut arbitrer entre secteurs cycliques, défensifs et financier, mais aussi à l’intérieur d’un même secteur où l’exposition géographique de l’entreprise peut notamment être un élément de différentiation boursière entre les titres.`
      }
    },
    {
      questionNumber: 8,
      question: {
        __html: `8 - Qu’appelle-t-on le risque crédit ?`
      },
      answers: [
        {
          content: 'A -  Le risque que les taux d’intérêt s’envolent',
          correctAnswer: false
        },
        {
          content: 'B - Le risque que l’émetteur fasse des pertes',
          correctAnswer: false
        },
        {
          content: 'C - Le risque que l’émetteur fasse faillite',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `C’est le seul cas où l’investisseur peut perdre le versement des intérêts et le capital investi. Le risque crédit permet de distinguer deux obligations de même durée émises par deux émetteurs différents.`
      }
    },
    {
      questionNumber: 9,
      question: {
        __html: `9 - Que fait le cours d’une obligation ou d’un titre monétaire en cas de hausse des taux du marché ?`
      },
      answers: [
        {
          content: 'A - Il baisse',
          correctAnswer: true
        },
        {
          content: 'B - Il monte',
          correctAnswer: false
        },
        {
          content: 'C - Il ne bouge pas',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Il baisse car cela signifie que le rendement qui justifiait ce prix, devient moins intéressant par rapport aux nouveaux taux proposés sur le marché. Ce mécanisme obéit à une logique d’arbitrage.`
      }
    },
    {
      questionNumber: 10,
      question: {
        __html: `10 - Qu’indique un coupon élevé au moment de l’émission d’un titre obligataire ou monétaire ?`
      },
      answers: [
        {
          content: 'A - Que l’émetteur est risqué',
          correctAnswer: true
        },
        {
          content: 'B - Que l’émetteur est peu endetté',
          correctAnswer: false
        },
        {
          content: 'C - Que l’émetteur est profitable',
          correctAnswer: false
        }
      ],
      explication: {
        __html: `Plus l’émetteur est risqué, plus il a besoin de proposer une rémunération élevée pour attirer les investisseurs.`
      }
    }
  ]
};

export default module_09_blocQuiz;
