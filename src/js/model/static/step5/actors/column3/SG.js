import types from '../types';

export default {
  title: 'Societe generale',
  type: types.column3.societes,
  firstCard: {
    answerNumber: 10,
    subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
    list: [
      {
        __html:
          'Intervient sur le marché interbancaire pour assurer au jour le jour l’adéquation entre ses ressources à placer et ses besoins à financer',
      },
      {
        __html:
          "Procède le 29 mai 2009 à un prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d'€ auprès de la banque LCL ",
      },
    ],
  },
  secondCard: {
    answerNumber: 10,
    title1: 'Besoins',
    list1: [
      {
        __html: 'Placer son excédent de liquidité au jour J',
      },
    ],
    title2: 'Opérations',
    list2: [
      {
        __html: "Prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em>",
      },
    ],
  },
  thirdCard: {
    subTitle: '',
    headList1: 'Besoins',
    list1: [
      {
        __html: 'Placer son excédent de liquidité au 29 mai 2009',
      },
    ],
    headList2: 'Opérations',
    list2: [
      {
        __html:
          "Prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d'€ à la banque LCL le 29 mai 2009",
      },
    ],
  },
};
