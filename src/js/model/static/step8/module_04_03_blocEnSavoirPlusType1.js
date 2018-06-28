import moduleTypes from '../moduleTypes';

const module_04_03_blocEnSavoirPlusType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: 'Principaux styles de gestion des actions',
  // firstDescription: {
  //   __html: `Pour plus de détail, passez la souris sur les différents termes et consultez le TABLEAU DES NOTATIONS ci-dessous.

  //             TABLEAU DES NOTATIONS
  //             <a href="/notations _ long_terme.pdf">Notations à long terme </a>
  //             Fichier pdf`
  // },
  cards: [
    {
      color: 'rgba(0,149,60,1.00)',
      hoverColor: 'rgba(0,149,60,1.00)',
      /*      color: 'linear-gradient(rgba(127,0,114,1.00), rgba(0,149,60,1.00))',
      hoverColor: 'linear-gradient(rgba(127,0,114,1.00), rgba(0,149,60,1.00))',
*/ startPosition: 1,
      arrowFollowing: true,
      cardTitle: 'Indice de référence',
      cardContent: `Panier d’obligations respectant des critères de devise, catégorie d’émetteur (État, entreprises…), maturité comprise dans une certaine plage (typiquement : 1-3 ans, 3-5 ans, 7-10 ans, 10 ans et +). Il sert de repère pour analyser la performance des fonds. Il n’inclut ni frais de transaction, ni frais de gestion.`,
    },
    {
      color: 'rgba(116,194,146,1.00)',
      hoverColor: 'rgba(0,149,60,1.00)',
      /*      color: 'linear-gradient(rgba(184,121,175,1.00), rgba(116,194,146,1.00))',
      hoverColor: 'linear-gradient(rgba(127,0,114,1.00), rgba(0,149,60,1.00))',
*/ startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Ftse mts global',
      cardContent: `Indice composé de titres obligataires à taux fixe libellés en euros, émis par les États de la zone Euro et ayant une durée résiduelle d’au moins un an.`,
    },
    {
      color: 'rgba(116,194,146,1.00)',
      hoverColor: 'rgba(0,149,60,1.00)',
      /*      color: 'linear-gradient(rgba(184,121,175,1.00), rgba(116,194,146,1.00))',
      hoverColor: 'linear-gradient(rgba(127,0,114,1.00), rgba(0,149,60,1.00))',
*/ startPosition: 3,
      arrowFollowing: false,
      cardTitle: 'Barclays euro-aggregate corporate',
      cardContent: `Indice représentatif des emprunts obligataires à taux fixe libellés en euros et émis par des émetteurs privés qui reçoivent une note allant de AAA à BBB- par les agences de notation.`,
    },
    {
      color: 'rgba(116,194,146,1.00)',
      hoverColor: 'rgba(0,149,60,1.00)',
      /*      color: 'linear-gradient(rgba(184,121,175,1.00), rgba(116,194,146,1.00))',
      hoverColor: 'linear-gradient(rgba(127,0,114,1.00), rgba(0,149,60,1.00))',
*/ startPosition: 4,
      arrowFollowing: false,
      cardTitle: 'Eonia ou euro overnight index average',
      cardContent: `Indice correspondant à la moyenne pondérée des taux des opérations au jour le jour entre les banques retenues pour le calcul de l’Euribor (Euro Interbank Offered Rate ou taux interbancaire offert entre banques de meilleures signatures pour la rémunération de dépôts dans la zone Euro). Le taux de l’EONIA est calculé par la Banque Centrale Européenne (BCE) et diffusé par la Fédération Bancaire de l’Union Européenne (FBE). L’EONIA capitalisé intègre l’impact du réinvestissement des intérêts.`,
    },
  ],
};

export default module_04_03_blocEnSavoirPlusType1;
