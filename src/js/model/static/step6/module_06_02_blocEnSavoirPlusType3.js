import moduleTypes from '../moduleTypes';

const module_06_02_blocEnSavoirPlusType3 = {
  modulType: moduleTypes.blocEnSavoirPlusType3,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: "Principales catégories d'actions",
  grid: {
    columns: 3,
    rows: 5,
  },
  firstDescription: {
    __html: 'Pour plus de détail, passez la souris sur les différents catégories.',
  },
  cards: [
    {
      color: 'rgba(76,43,29,1.00)',
      hoverColor: 'rgba(76,43,29,1.00)',
      width: 200,
      index: 1,
      position: {
        column: 1,
        row: 1,
      },
      arrowFollowing: true,
      arrowRight: true,
      cardTitle: 'Produits dérivés à engagement ferme',
      cardContent:
        'Contrats financiers comportant l’engagement ferme de réaliser la transaction prévue sur l’actif sous-jacent à la date et au prix fixés. Le dénouement de ces contrats ne donne pas forcément lieu à livraison et peut se faire par règlement de la différence entre le prix fixé et le prix de marché.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(76,43,29,1.00)',
      hoverColor: 'rgba(76,43,29,1.00)',
      width: 200,
      index: 2,
      position: {
        column: 1,
        row: 3,
      },
      arrowFollowing: true,
      arrowRight: false,
      cardTitle: 'Produits dérivés à engagement optionnel',
      cardContent:
        'Contrats financiers comportant la possibilité de ne pas réaliser la transaction prévue sur l’actif sous-jacent à la date et au prix fixés, moyennant une prime.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(110,68,57,1.00)',
      hoverColor: 'rgba(110,68,57,1.00)',
      width: 200,
      index: 3,
      position: {
        column: 2,
        row: 1,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Forward',
      cardContent:
        'Contrat de gré à gré entre deux parties, dans lequel l’acheteur s’engage à acheter au vendeur un actif sous-jacent à une date ultérieure et à un prix déterminé au moment du contrat. Les deux parties s’entendent sur les termes du contrat lors de l’engagement de départ (quand et où la livraison aura lieu, l’identification précise du sous-jacent…).',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(110,68,57,1.00)',
      hoverColor: 'rgba(110,68,57,1.00)',
      width: 200,
      index: 4,
      position: {
        column: 3,
        row: 1,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Future ou contrat à terme',
      cardContent:
        'Contrat négocié sur le marché réglementé, dont la date d’échéance, les sous-jacents, le nombre d’unités comprises dans le contrat (etc…) sont déterminés. Le risque de contrepartie est maîtrisé grâce notamment aux chambres de compensation, et l’investisseur peut, si le marché le permet, solder sa position avant l’échéance du contrat, sans avoir affaire au sous-jacent.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(110,68,57,1.00)',
      hoverColor: 'rgba(110,68,57,1.00)',
      width: 200,
      index: 5,
      position: {
        column: 1,
        row: 2,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Swap',
      cardContent:
        'Contrat de gré à gré entre deux parties portant sur l’échange de deux séries de revenus financiers futurs dont au moins l’une des deux est déterminée par un sous-jacent (taux d’intérêt ou de change, prix d’une matière première ou d’une action…). Cet instrument permet par exemple d’échanger un taux variable contre un taux fixe, et réciproquement.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(110,68,57,1.00)',
      hoverColor: 'rgba(110,68,57,1.00)',
      width: 200,
      index: 6,
      position: {
        column: 1,
        row: 4,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Option',
      cardContent:
        'Contrat de gré à gré donnant le droit, et non l’obligation, d’acheter (« call ») ou de vendre (« put »), moyennant une prime, un sous-jacent (action, indice, matière première, devise…) à une autre partie à un prix fixé et valable pour une période donnée. "',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(110,68,57,1.00)',
      hoverColor: 'rgba(110,68,57,1.00)',
      width: 200,
      index: 7,
      position: {
        column: 1,
        row: 5,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Warrant',
      cardContent:
        'Instrument financier émis par des établissements bancaires et négocié sur le marché réglementé, donnant le droit, et non l’obligation, d’acheter (« call ») ou de vendre (« put »), moyennant le paiement d’une prime, un sous-jacent (action, indice, matière première, devise…) à un prix fixé et valable pour une période donnée. La liquidité de ce produit est assurée par la banque qui le crée. ',
      cardSubTitle: 'cf. Glossaire',
    },
  ],
};

export default module_06_02_blocEnSavoirPlusType3;
