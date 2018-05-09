import moduleTypes from '../moduleTypes';

const module_04_bis_blocEnSavoirPlusType2 = {
  modulType: moduleTypes.blocEnSavoirPlusType2,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: true,
  /*chapter: 'En savoir plus',*/
  /*duration: 2,*/
  title: ``,
  firstDescription: {
    __html: `À votre avis, à quelle catégorie appartient le fonds que vous avez composé ? Sélectionnez la bonne réponse et validez.`
  },
  cards: [
    {
      color: 'rgba(250,250,250,1.00)',
      hoverColor: 'rgba(250,250,250,1.00)',
      startPosition: 1,
      arrowFollowing: false,
      cardTitle: 'Fonds Actions',
      cardContent: {
        __html: `<div><span class='card-title'>FONDS ACTIONS</span></br><span class='card-subtitle'>Cf. Glossaire</span></br></br>Pour être classifié « fonds actions » par l’AMF, il faut être composé d’au moins 60% d’actions, le solde pouvant être indifféremment constitué d’obligations ou de titres monétaires.</br>Cette classification est rendue optionnelle à compter du 1ier janvier 2018.</div>`
      },
      cardSubTitle: `cf. Glossaire`
    },
    {
      color: 'rgba(250,250,250,1.00)',
      hoverColor: 'rgba(250,250,250,1.00)',
      startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Fonds Obligataire',
      cardContent: {
        __html: `<div><span class='card-title'>FONDS OBLIGATAIRE</span></br><span class='card-subtitle'>Cf. Glossaire</span></br></br> Pour être classifié « fonds obligataire » par l’AMF, il faut être composé d’au plus 10% d’actions, le solde pouvant être indifféremment constitué d’obligations ou de titres monétaires.</br>Cette classification est rendue optionnelle à compter du 1ier janvier 2018.</br></div>`
      },
      cardSubTitle: `cf. Glossaire`
    },
    {
      color: 'rgba(250,250,250,1.00)',
      hoverColor: 'rgba(250,250,250,1.00)',
      startPosition: 3,
      arrowFollowing: false,
      cardTitle: 'Fonds Monétaire',
      cardContent: {
        __html: `<div><span class='card-title'>FONDS MONÉTAIRE</span></br><span class='card-subtitle'>Cf. Glossaire</span></br></br>Pour être classifié « fonds monétaire » par l’AMF, il faut être constitué quasi exclusivement de titres monétaires. L’AMF classifie les fonds monétaires en fonction de la durée des titres qui les composent, ce qui ne permet de fait qu'une faible proportion d'obligations de durée courte, et bien sûr aucune action. L’AMF distingue le fonds monétaire court terme (durée maximale des titres détenus de 397 jours) et le fonds monétaire (durée maximale des titres détenus de 2 ans).</div>`
      },
      cardSubTitle: `cf. Glossaire`
    },
    {
      color: 'rgba(250,250,250,1.00)',
      hoverColor: 'rgba(250,250,250,1.00)',
      startPosition: 5,
      arrowFollowing: false,
      cardTitle: "Fonds en titres de l'entreprise",
      cardContent: {
        __html: `<div><span class='card-title'>FONDS EN TITRES DE L'ENTREPRISE</span></br><span class='card-subtitle'>Cf. Glossaire</span></br></br>Pour être classifié « fonds en titres de </br>l’entreprise » par l’AMF, il faut être composé d’au plus un tiers en titres de l’entreprise (fonds diversifié en titres de l’entreprise) ou d’au moins un tiers en titres de l’entreprise (fonds d’actionnariat salarié), le solde pouvant être indifféremment constitué d’actions, d’obligations ou de monétaire.</div>`
      },
      cardSubTitle: `cf. Glossaire`
    },
    {
      color: 'rgba(250,250,250,1.00)',
      hoverColor: 'rgba(250,250,250,1.00)',
      startPosition: 4,
      arrowFollowing: false,
      cardTitle: 'Fonds de type mixte',
      cardContent: {
        __html: `<div><span class='card-title'>FONDS DE TYPE MIXTE</span></br><span class='card-subtitle'>Cf. Glossaire</span></br></br>Composé d’actions, d’obligations et de titres monétaires, il n’est ni un fonds actions, ni un fonds obligataire, ni un fonds monétaire, ni un fonds en titres de l’entreprise).</br>La classification « fonds diversifié » à laquelle il appartenait, a été supprimée par l’AMF à compter du 1ier janvier 2018.</div>`
      },
      cardSubTitle: `cf. Glossaire`
    }
  ]
};

export default module_04_bis_blocEnSavoirPlusType2;
