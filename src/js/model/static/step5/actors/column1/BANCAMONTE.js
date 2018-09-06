import types from '../types';

export default {
  title: 'Banca monte dei pashi',
  type: types.column1.banques,
  firstCard: {
    answerNumber: 4,
    subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
    list: [
      {
        __html: 'Développe une activité de banque commerciale auprès des entreprises et des particuliers en Italie',
      },
      {
        __html: `Détient fin 2010 un portefeuille d'<em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> italiennes de 24 milliards d'euros (soit 10% de son bilan et 160% de ses fonds propres)`,
      },
    ],
  },
  secondCard: {
    answerNumber: 4,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Financer les entreprises et les particuliers',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: 'Néant',
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Financer les entreprises et les particuliers  en Italie',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: 'Néant',
      },
    ],
  },
};
