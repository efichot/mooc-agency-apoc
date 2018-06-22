import moduleTypes from '../moduleTypes';

const module_05_01_blocCardsType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardsType1,
  firstDescription: {
    __html: `Parmi les transactions qui ont eu lieu sur le marché des obligations, sélectionnez celle sur laquelle vous souhaitez travailler en cliquant sur la ligne de votre choix.`,
  },
  /*noChapter: false,*/
  chapter: 'Jeu des acteurs des marchés financiers',
  duration: 0.3,
  title: 'Interactions entre acteurs du marché des obligations',
  cards: [
    [
      {
        title: 'Enel',
        content: {
          __html:
            "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 500 millions d’€ le 20 mai 2009",
        },
      },
      {
        title: 'Compagnie financière tradition',
        content: {
          __html:
            "Transaction sur les titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Enel en mai 2009",
        },
      },
      {
        title: 'HSBC global asset management',
        content: {
          __html: "Achat des titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Enel en mai 2009",
        },
      },
    ],
    [
      {
        title: 'Crédit agricole',
        content: {
          __html:
            "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 1,5 milliard d’€ le 27 mai 2009",
        },
      },
      {
        title: 'Compagnie financière tradition',
        content: {
          __html:
            "Transaction sur les titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole en mai 2009",
        },
      },
      {
        title: 'HSBC global asset management',
        content: {
          __html:
            "Achat des titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole en mai 2009",
        },
      },
    ],
    [
      {
        title: 'LCL',
        content: {
          __html:
            "Emprunt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d’€ auprès de la banque Société Générale le 29 mai 2009",
        },
      },
      {
        title: '',
        content: {
          __html: '',
        },
      },
      {
        title: 'Société générale',
        content: {
          __html:
            "Prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d’€ à la banque LCL le 29 mai 2009",
        },
      },
    ],
  ],
};

export default module_05_01_blocCardsType1;
