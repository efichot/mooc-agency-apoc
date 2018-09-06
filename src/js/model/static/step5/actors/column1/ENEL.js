import types from '../types';

export default {
  title: 'Enel',
  type: types.column1.entreprises,
  firstCard: {
    answerNumber: 8,
    subTitle: 'Entreprise du secteur électrique cotée en Bourse',
    list: [
      {
        __html: `Intervient sur le marché <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaire</em> pour des besoins de trésorerie à court terme  via sa filiale financière ENEL Finance`,
      },
      {
        __html: `Procède le 20 mai 2009 à une émission <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaire</em> de 500 millions d'euros`,
      },
    ],
  },
  secondCard: {
    answerNumber: 8,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Se financer à court terme',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Émission de titres <em style='color: ${process.env.REACT_APP_MONETAIRE}'>monétaires</em>`,
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Se financer à court terme via sa filiale financière ENEL Finance',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Émission de titres <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaires</em> de 500 millions d'€ le 20 mai 2009`,
      },
    ],
  },
};
