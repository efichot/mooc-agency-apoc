import types from '../types';

export default {
  title: 'Banco santander',
  type: types.column1.banques,
  firstCard: {
    answerNumber: 5,
    subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
    list: [
      {
        __html: `S’est fortement développée hors d'Espagne par croissance interne et externe à l’international`,
      },
      {
        __html: `Procède en octobre 2010 à une émission d'<em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em>  de 1 milliard d'euros  dans le cadre de son activité de  banque commerciale auprès des entreprises et des particuliers`,
      },
    ],
  },
  secondCard: {
    answerNumber: 5,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Financer les entreprises et les particuliers',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: `Émission d'<em style='color: ${process.env.REACT_APP_OBLIGATION}'>obligations</em>`,
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Financer les entreprises et les particuliers  en Espagne et à l’international',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html: `Émission d'<em style='color: ${
          process.env.REACT_APP_OBLIGATION
        }'>obligations</em> de 1 milliard d'€ en octobre 2010`,
      },
    ],
  },
};
