import types from '../types';

export default {
  title: 'Lcl',
  type: types.column1.banques,
  firstCard: {
    answerNumber: 9,
    subTitle: 'Entreprise du secteur bancaire non cotée en Bourse',
    list: [
      {
        __html:
          'Intervient sur le marché interbancaire pour assurer au jour le jour l’adéquation entre ses ressources à placer et ses besoins à financer ',
      },
      {
        __html: `Procède le 29 mai 2009 à un emprunt <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaire</em> de 10 millions d'€ auprès de la banque Société Générale `,
      },
    ],
  },
  secondCard: {
    answerNumber: 9,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Financer son manque de liquidité au jour J',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Emprunt <em style='color: ${process.env.REACT_APP_MONETAIRE}'>monétaire</em>`,
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Financer son manque de liquidité au 29 mai 2009',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Emprunt <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaire</em> de 10 millions d'€ auprès de la banque Société Générale le 29 mai 2009`,
      },
    ],
  },
};
