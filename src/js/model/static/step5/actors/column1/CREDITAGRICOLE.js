import types from '../types';

export default {
  title: 'Crédit agricole',
  type: types.column1.banques,
  firstCard: {
    answerNumber: 8,
    subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
    list: [
      {
        __html:
          "Intervient sur le marché <em style='color: rgba(0,159,63,1.00)'>monétaire</em> pour des besoins de trésorerie à court terme",
      },
      {
        __html:
          "Procède le 27 mai 2009 à une émission <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 1,5 milliard d'euros",
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
        __html: "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em>",
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Se financer à court terme',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html:
          "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 1,5 milliard d'€ le 27 mai 2009",
      },
    ],
  },
};
