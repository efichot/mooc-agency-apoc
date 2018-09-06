import types from '../types';

export default {
  title: 'Oddo securities',
  type: types.column2.investisseurs,
  firstCard: {
    subTitle: `Entreprise d'investissement non cotée en Bourse`,
    answerNumber: 17,
    list: [
      {
        __html: `Transmet et exécute dans les meilleures conditions les ordres d'achat ou de vente passés par les investisseurs`,
      },
      {
        __html: `Procède aux transactions sur les <em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> émises par les Etats allemand, italien, et Banco Santander en janvier, février et octobre 2010`,
      },
    ],
  },
  secondCard: {
    answerNumber: 17,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Exécuter les ordres des investisseurs',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Transactions sur le marché <em style='color: ${process.env.REACT_APP_OBLIGATION}'>obligataire</em>`,
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: `Exécuter les ordres d'achat de l’ERAFP*`,
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Transactions sur les <em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> émises par les Etats allemand et italien, et Banco Santander en janvier, février et octobre 2010`,
      },
    ],
  },
};
