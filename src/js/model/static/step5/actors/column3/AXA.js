import types from '../types';

export default {
  title: 'Axa',
  type: types.column3.societes,
  firstCard: {
    subTitle: 'Entreprise du secteur de l’assurance cotée en Bourse',
    answerNumber: 15,
    list: [
      {
        __html:
          'Gère  les sommes destinées à couvrir les dommages et la protection des biens des assurés en cas de sinistre',
      },
      {
        __html: `Investit 150 millions d'€ en <em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> émises par Pernod Ricard et Carrefour en mai 2009 et avril 2010`,
      },
    ],
  },
  secondCard: {
    answerNumber: 14,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Investir les sommes destinées à couvrir les besoins des bénéficiaires',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Achat d'<em style='color: ${process.env.REACT_APP_OBLIGATION}'>obligations</em> nouvelles`,
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Investir les sommes destinées à couvrir les dommages et la protection des biens des assurés',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Achat d'<em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> Pernod Ricard et Carrefour émises en mai 2009 et avril 2010`,
      },
    ],
  },
};
