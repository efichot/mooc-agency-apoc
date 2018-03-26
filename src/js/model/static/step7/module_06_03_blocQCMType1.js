import moduleTypes from '../moduleTypes';

const module_06_03_blocQCMType1 = {
  /*position: 13,*/
  modulType: moduleTypes.blocQCMType1,
  linkWithBlocSubMenu1ButtonPosition: 3,
  noChapter: false,
  chapter: 'Échelle de risque',
  duration: 1,
  name: `Risque des titres de créance négociables`,
  cards: [
    {
      color: 'white',
      startPosition: 1,
      content: {
        bigBorder: true,
        cardTitle: `CRÉDIT AGRICOLE`,
        cardSubTitle: `Banque`,
        list: [
          `Premier acteur bancaire en France et numéro 1 de la banque de détail en Europe`,
          `Notée en 2009 F1+, A1 et P1 par les agences Fitch, S&P et Moody’s`,
          `Répartition du résultat net`
        ],
        legend: [
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `31% - Banque de proximité`
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `43% - Métiers spécialisés`
          },
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `26% - Banque de financement et d'investissement`
          }
        ]
      }
    },
    {
      color: 'white',
      startPosition: 2,
      content: {
        bigBorder: false,
        cardTitle: `titre de créance négociable crédit agricole`,
        cardSubTitle: `0,3% Septembre 2009`,
        list: [
          `Émis le 27 mai 2009 et remboursé le 1er septembre 2009`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 50 000 €)`,
          `Montant total de l’émission de 1,5 milliard d’€ pour des besoins de trésorerie à court terme`
        ],
        legend: []
      }
    },
    {
      color: 'white',
      startPosition: 3,
      content: {
        bigBorder: true,
        cardTitle: `Enel`,
        cardSubTitle: `Énergie et gaz`,
        list: [
          `Groupe italien de production et distribution d’énergie et de gaz, présent en Europe et en Amérique Latine`,
          `Noté en août 2009 F2 et A-2 par les agences Fitch et S&P`,
          `Répartition des ventes`
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `88% - Électricité`
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `05% - Gaz`
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `7% - Autres`
          }
        ]
      }
    },
    {
      color: 'white',
      startPosition: 4,
      content: {
        isDraggable: false,
        bigBorder: false,
        cardTitle: `titre de créance négociable enel`,
        cardSubTitle: `3,5% Août 2009`,
        list: [
          `Émis le 20 mai 2009 et remboursé le 25 août 2009`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 50 000 €)`,
          `Montant total de l’émission de 500 millions d’€ pour des besoins de trésorerie à court terme via sa filiale financière ENEL Finance`
        ],
        legend: []
      }
    }
  ],
  question: {
    __html: `Quel titre est le plus exposé au contexte économique de 2010 et 2011 ? 
    Sélectionnez la bonne réponse et validez.`
  },
  answers: [
    {
      content: 'TCN Crédit Agricole',
      correctAnswer: false
    },
    {
      content: 'TCN Enel',
      correctAnswer: false
    },
    {
      content: 'Aucun des deux',
      correctAnswer: true
    }
  ],
  description: {
    __html: `Les titres de créance négociables de Crédit Agricole et Enel arrivant respectivement à échéance les 1ier septembre et 25 août 2009, ils ne sont en rien affectés par les événements de 2010 et 2011. L’investisseur qui les achetés, à savoir HSBC Global Asset Management pour son fonds HSBC Monétaire, a été depuis bien longtemps remboursé.`
  }
};

export default module_06_03_blocQCMType1;
