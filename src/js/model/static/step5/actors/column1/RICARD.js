import types from '../types';

export default {
  title: 'Pernod ricard',
  type: types.column1.entreprises,
  firstCard: {
    answerNumber: 3,
    subTitle: 'Entreprise du secteur des biens de consommation cotée en Bourse',
    list: [
      {
        __html: `A acquis en avril 2008 le groupe suédois Vin & Spirit pour 5,6 milliards d'euros`,
      },
      {
        __html: `Procède en avril 2009 à une émission d'<em style='color: ${
          process.env.REACT_APP_ACTION
        }'>actions</em> de 1 milliard d'euros pour réduire l’endettement dû à l’acquisition et au ralentissement économique des Etats-Unis et de l’Europe`,
      },
      {
        __html: `Procède en mai 2009 à une émission d'<em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> de 800 millions d'euros pour se refinancer`,
      },
    ],
  },
  secondCard: {
    answerNumber: 3,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Réduire l’endettement suite à une acquisition et un contexte économique défavorable',
      },
      {
        __html: 'Se refinancer',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Émission d'<em style='color: ${process.env.REACT_APP_ACTION}'>actions</em>`,
      },
      {
        __html: `Émission d'<em style='color: ${process.env.REACT_APP_OBLIGATION}'>obligations</em>`,
      },
    ],
  },
  thirdCard: {
    subTitle: 'Cotée',
    headList1: 'Besoins',
    list1: [
      {
        __html:
          'Réduire l’endettement suite à l’acquisition du groupe suédois Vin & Spirit et au ralentissement économique des Etats-Unis et de l’Europe',
      },
      {
        __html: 'Se refinancer',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Émission d'<em style='color: ${
          process.env.REACT_APP_ACTION
        }'>actions</em> de 1 milliard d'€ en avril 2009`,
      },
      {
        __html: `Émission d'<em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> de 800 millions d'€ en mai 2009`,
      },
    ],
  },
};
