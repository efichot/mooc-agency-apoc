import types from '../types';

export default {
  title: 'Amundi',
  type: types.column3.societes,
  firstCard: {
    answerNumber: 11,
    subTitle: `Société de gestion d'actifs cotée en Bourse`,
    list: [
      {
        __html: 'Gère le fonds Spie Batignolles Actionnariat pour le compte des salariés',
      },
      {
        __html: `Investit en <em style='color: ${
          process.env.REACT_APP_ACTION
        }'>actions</em> Spie Batignolles cédées en mai 2009 par la Financière Spie Batignolles`,
      },
    ],
  },
  secondCard: {
    answerNumber: 11,
    title1: 'Besoins',
    list1: [
      {
        __html: `Investir l’épargne des salariés en <em style='color: ${
          process.env.REACT_APP_ACTION
        }'>actions</em> de l’entreprise`,
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Achat d'<em style='color: ${process.env.REACT_APP_ACTION}'>actions</em> existantes`,
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: `Investir l’épargne des salariés  de Spie Batignolles en <em style='color: ${
          process.env.REACT_APP_ACTION
        }'>actions</em> de l’entreprise via le Plan d'Epargne Entreprise`,
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Achat d'<em style='color: ${
          process.env.REACT_APP_ACTION
        }'>actions</em> Spie Batignolles cédées par la Financière Spie Batignolles en mai 2009`,
      },
    ],
  },
};
