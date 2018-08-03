import types from '../types';

export default {
  title: 'Monsieur Martin',
  type: types.column3.particuliers,
  firstCard: {
    answerNumber: 12,
    subTitle: 'Investisseur particulier',
    list: [
      {
        __html: 'Gère  directement son épargne en Bourse ',
      },
      {
        __html:
          "Investit en avril 2009 20 000 € en <em style='color: var(--action)'>actions</em> Lafarge, car il anticipe, après la crise de 2008, une reprise de l’économie et le rebond de Lafarge qui devrait tirer parti de l’acquisition d'Orascom Cement et de son positionnement sur les pays émergents",
      },
    ],
  },
  secondCard: {
    answerNumber: 12,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Investir son épargne',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: "Achat d'<em style='color: var(--action)'>actions</em> nouvelles",
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Investir 20 000 euros',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: "Achat d'<em style='color: var(--action)'>actions</em> Lafarge émises en avril 2009",
      },
    ],
  },
};
