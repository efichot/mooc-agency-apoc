import moduleTypes from '../moduleTypes';

const module_05_02_blocEnSavoirPlusType1 = {
  modulType: moduleTypes.blocEnSavoirPlusType1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: 'Principaux styles de gestion des actions',
  height: 650,
  // firstDescription: {
  //   __html: `Pour plus de détail, passez la souris sur les différents termes et consultez le TABLEAU DES NOTATIONS ci-dessous.

  //             TABLEAU DES NOTATIONS
  //             <a href="/notations _ long_terme.pdf">Notations à long terme </a>
  //             Fichier pdf`
  // },
  cards: [
    {
      color: 'rgba(209,93,64,1.00)',
      hoverColor: 'rgba(209,93,64,1.00)',
      startPosition: 1,
      arrowFollowing: true,
      cardTitle: 'Indice de référence composite',
      cardSubTitle: 'cf. Glossaire',
      cardContent: `Il synthétise l’évolution de plusieurs indices de façon à refléter la composition cible du fonds de type mixte.`,
    },
    {
      color: 'rgba(239,157,142,1.00)',
      hoverColor: 'rgba(209,93,64,1.00)',
      startPosition: 2,
      arrowFollowing: false,
      cardTitle: 'Exemple',
      cardSubTitle: 'cf. Glossaire',
      cardContent: {
        __html: `35% STOXX 50 SPECIAL OPENNING NET (1)<br />
               + 30% FTSE MTS  GLOBAL<br />
               + 15% JPM GBI GLOBAL TRADED INDEX HEDGED EURO (2)<br />
               + 12% S&P 500 COMPOSITE<br />
               + 6% MSCI JAPAN (3)<br />
               + 2% MSCI EM (EMERGING MARKETS)</br>
               (1) La mention SPECIAL OPENNING NET indique que la valeur journalière retenue pour l’EUROSTOXX 50 est le cours d’ouverture.</br>
               (2) L’indice JPM Government Bond Index GLOBAL TRADED INDEX HEDGED EURO calculé par JP Morgan est composé de titres obligataires d’États dont la notation minimum est BBB- sur l’échelle de l’agence de
               notation Standard & Poor’s ou Baa3 sur l’échelle de Moody’s (catégorie Investment Grade) ;
               il est couvert contre le risque de change par rapport à l’euro.</br>
               (3) L’indice MSCI JAPAN calculé par la société Morgan Stanley Capital International est représentatif des
               grandes et moyennes capitalisations japonaises. Le poids de chaque valeur dans l’indice est pondéré en
               fonction de l’importance de sa capitalisation ajustée du flottant.`,
      },
    },
  ],
};

export default module_05_02_blocEnSavoirPlusType1;
