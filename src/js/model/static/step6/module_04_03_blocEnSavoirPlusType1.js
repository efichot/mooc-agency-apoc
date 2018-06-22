import moduleTypes from '../moduleTypes';

const module_04_03_blocEnSavoirPlusType1 = {
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
      color: 'rgba(133,0,121,1.00)',
      hoverColor: 'rgba(133,0,121,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Obligation à taux fixe',
      cardContent: {
        __html: `Titre de créance représentatif d’un emprunt émis par une entreprise, une entité du secteur public ou un État, donnant droit à des intérêts fixes versés à intervalles réguliers sur une durée établie, ainsi qu’au remboursement du nominal à la date d’échéance.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(133,0,121,1.00)',
      hoverColor: 'rgba(133,0,121,1.00)',
      startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Obligation à taux variable',
      cardContent: {
        __html: `Titre de créance dont le taux d’intérêt varie, le plus souvent par rapport à un taux d'emprunt d’État ou de marché obligataire -TMO- (Eonia ou Euribor).`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(133,0,121,1.00)',
      hoverColor: 'rgba(133,0,121,1.00)',
      startPosition: 3,
      arrowFollowing: false,
      cardTitle: 'Obligation indexée',
      cardContent: {
        __html: `Titre de créance dont les intérêts et/ou le capital sont liés à un indice. Les plus connues sont les obligations indexées sur l’inflation, pour lesquelles la valeur nominale et le paiement des intérêts sont liés à l’indice des prix de vente au détail.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(133,0,121,1.00)',
      hoverColor: 'rgba(133,0,121,1.00)',
      startPosition: 4,
      arrowFollowing: false,
      cardTitle: 'Obligation zéro coupon',
      cardContent: {
        __html: `Titre de créance sans coupon (intérêt versé), vendu avec un escompte significatif par rapport à la valeur nominale. Le détenteur est ainsi rémunéré à l’échéance.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(133,0,121,1.00)',
      hoverColor: 'rgba(133,0,121,1.00)',
      startPosition: 5,
      arrowFollowing: false,
      cardTitle: 'Obligation perpétuelle',
      cardContent: {
        __html: `Titre de créance sans date de remboursement, vendu avec un revenu majoré par rapport à l’obligation classique puisque son détenteur n’a pas la certitude d’être remboursé et, qu’en cas de faillite de l’émetteur (on parle alors de défaut), il est le dernier des créanciers à être remboursé, après notamment les détenteurs d’obligations non perpétuelles.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
    {
      color: 'rgba(133,0,121,1.00)',
      hoverColor: 'rgba(133,0,121,1.00)',
      startPosition: 6,
      arrowFollowing: false,
      cardTitle: 'Obligation convertible',
      cardContent: {
        __html: `Titre de créance qui offre la possibilité d’échanger l’obligation contre un nombre établi d’actions de l’émetteur à un prix et dans des délais fixés.`,
      },
      cardSubTitle: `cf. Glossaire`,
    },
  ],
};

export default module_04_03_blocEnSavoirPlusType1;
