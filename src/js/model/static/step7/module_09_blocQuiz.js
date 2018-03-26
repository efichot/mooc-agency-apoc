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
  questions: {
    question_1: {
      question: {
        __html: `1 - À quoi mesure-t-on le degré de risque d’un titre quand on investit?`
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
    question_2: {
      question: {
        __html: `2 - À la sortie d’une crise économique, sur quel secteur un gérant a-t-il plutôt intérêt à investir?`
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
    question_3: {
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
          correctAnswer: false
        },
        {
          content: ' C - Les deux',
          correctAnswer: true
        }
      ],
      explication: {
        __html: `Les agences de notation évaluent la capacité des emprunteurs (État, collectivités locales ou entreprises) à rembourser le capital et les intérêts de leurs dettes à un instant et sur une période donnés. Elles émettent des notes à court terme (dettes à moins d’un an) et à long terme (dettes à plus d’un an).`
      }
    }
  }
};

export default module_09_blocQuiz;
