import types from '../types';

export default {
  title: 'Carrefour',
  type: types.column1.entreprises,
  firstCard: {
    answerNumber: 6,
    subTitle: 'Entreprise de distributinon côtée en bourse',
    list: [
      {
        __html:
          "Est devenue en terme de chiffre d'affaires le premier distributeur en Europe et le deuxième dans le monde après l’américain Walmart",
      },
      {
        __html:
          "Procède en avril 2010 à une émission d'<em style='color: var(--obligation)'>obligations</em> de 1 milliard d'euros pour se refinancer",
      },
    ],
  },
  secondCard: {
    answerNumber: 6,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Se refinancer',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: "Émission d'<em style='color: var(--obligation)'>obligations</em>",
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Se refinancer',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: "Émission d'<em style='color: var(--obligation)'>obligations</em> de 1 milliard d'€ en avril 2010",
      },
    ],
  },
};
