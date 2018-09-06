import types from '../types';

export default {
  title: 'Compagnie financiere tradition',
  type: types.column2.courtiers,
  firstCard: {
    subTitle: 'Société de courtage cotée en Bourse',
    answerNumber: 18,
    list: [
      {
        __html: `Sert d'intermédiaire pour une opération financière entre deux parties`,
      },
      {
        __html: `Procède aux transactions sur les titres <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaires</em> émis par Crédit Agricole et ENEL en mai 2009`,
      },
      {
        __html: `Procède aux transactions sur les <em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> émises par Carrefour en avril 2010`,
      },
    ],
  },
  secondCard: {
    answerNumber: 18,
    title1: 'Besoins',
    list1: [
      {
        __html: `Réaliser le placement de titres émis auprès d'investisseurs`,
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Transactions sur le marché <em style='color: ${process.env.REACT_APP_MONETAIRE}'>monétaire</em>`,
      },
      {
        __html: `Transactions sur le marché <em style='color: ${process.env.REACT_APP_OBLIGATION}'>obligataire</em>`,
      },
    ],
  },
  thirdCard: {
    title: 'Compagnie financière tradition',
    subTitle: 'Société de courtage',
    headList1: 'Besoins',
    list1: [
      {
        __html: `Placer les émissions <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaire</em> de Crédit Agricole et Enel auprès de HSBC Asset Management`,
      },
      {
        __html: `Placer l’émission <em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligataire</em> de Carrefour auprès de Axa`,
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Transactions sur les titres <em style='color: ${
          process.env.REACT_APP_MONETAIRE
        }'>monétaires</em> émis par Crédit Agricole et Enel en mai 2009`,
      },
      {
        __html: `Transaction sur les <em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> émises par Carrefour `,
      },
    ],
  },
};
