import moduleTypes from '../moduleTypes';

const module_05_04_blocEnSavoirPlusType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: `Principales catégories d'obligations`,
  firstDescription: {
    __html: 'Pour avoir plus de détail, passez la souris sur les différentes catégories.',
  },
  cards: [
    {
      color: 'rgba(0,156,62,1.00)',
      hoverColor: 'rgba(0,156,62,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Certificat de dépôt (CDN)',
      cardContent: {
        __html: `Titre de créance négociable émis par un établissement de crédit habilité par l’Autorité des Marchés Financiers, d’un montant minimal de 150 000 € et d’une durée de vie d’un jour à un an, négociable de gré à gré.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,156,62,1.00)',
      hoverColor: 'rgba(0,156,62,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Bon du Trésor (BT)',
      cardContent: {
        __html: `Titre de créance négociable émis par le Trésor Public pour le compte de l’État, d’un montant minimum de 150 000 €.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,156,62,1.00)',
      hoverColor: 'rgba(0,156,62,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Bon des institutions et sociétés financières (BISF)',
      cardContent: {
        __html: `Titre de créance négociable émis par les sociétés financières.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(0,156,62,1.00)',
      hoverColor: 'rgba(0,156,62,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Billet de trésorerie',
      cardContent: {
        __html: `Titre de créance négociable émis par des entreprises, autres que les établissements de crédit, d’un montant minimum de 150 000 €.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
  ],
};

export default module_05_04_blocEnSavoirPlusType1;
