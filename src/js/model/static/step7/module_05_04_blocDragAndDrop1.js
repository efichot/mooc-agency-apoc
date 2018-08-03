import moduleTypes from '../moduleTypes';

const module_05_04_blocDragAndDrop1 = {
  /*position: 9,*/
  modulType: moduleTypes.blocDragAndDrop1,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  firstDescription: {
    __html: `Faites de même pour les obligations d’entreprise ci-dessous&nbsp;: 
- quel secteur d’activité résiste le mieux à la crise&nbsp;? 
- quelle visibilité donne la durée de l’obligation&nbsp;? 
- les ventes ou le résultat sont-ils concentrés sur une zone géographique très touchée par la crise&nbsp;? 

En cas de doute, visionnez à nouveau le début de la 2ième partie de la vidéo intitulée CONTEXTE ÉCONOMIQUE.`,
  },
  noChapter: true,
  chapter: 'Échelle de risque',
  duration: 3,
  title: `Risque des obligations d'entreprise`,
  cards: [
    {
      color: 'white',
      startPosition: 1,
      /*endPosition: 1,*/
      content: {
        isDraggable: false,
        cardTitle: `Pernod Ricard`,
        cardSubTitle: `Consommation`,
        list: [
          `Numéro 2 mondial des vins et spiritueux positionné plutôt sur le haut de gamme`,
          `Noté respectivement BB+, BB+ et Ba par les agences Fitch, S&P et Moody’s à la suite d’un endettement accru par l’acquisition de Vin & Spirit présent en Europe et Amérique du Nord`,
          `Répartition des ventes après acquisition`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `34% - Europe hors France`,
          },
          {
            legendColor: `rgba(135,184,67,1.00)`,
            legendText: `28% - Amériques`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `28% - Asie et reste du monde`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `10% - France`,
          },
        ],
      },
    },
    {
      color: 'white',
      startPosition: 2,
      /*endPosition: 1,*/
      content: {
        isDraggable: false,
        cardTitle: `Banco Santander`,
        cardSubTitle: `Banque`,
        list: [
          `Numéro 1 en Espagne (plus de 10% du marché du crédit), au nombre des 5 plus grandes banques en Grande-Bretagne, fortement implantée au Brésil, Mexique et Chili`,
          `Notée en 2010 AA par les agences Fitch, S&P et Moody’s`,
          `Répartition du résultat net`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `37% - Europe (Banque de détail)`,
          },
          {
            legendColor: `rgba(135,184,67,1.00)`,
            legendText: `11% - Europe (autres activités)`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `16% - UK`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `20% - Brésil`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `16% - Amérique Latine hors Brésil`,
          },
        ],
      },
    },
    {
      color: 'white',
      startPosition: 3,
      /*endPosition: 1,*/
      content: {
        isDraggable: false,
        cardTitle: `Carrefour`,
        cardSubTitle: `Consommation`,
        list: [
          `Numéro 2 mondial de la distribution implanté principalement en Espagne, Italie et Belgique, ainsi qu’au Brésil`,
          `Noté en 2010 respectivement A-, A et A3 par les agences Fitch, S&P et Moody’s, soit l’une des meilleures notations du secteur`,
          `Répartition des ventes`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `46% - France`,
          },
          {
            legendColor: `rgba(135,184,67,1.00)`,
            legendText: `39% - Europe hors France`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `15% - Amériques`,
          },
        ],
      },
    },
    {
      color: 'white',
      startPosition: 4,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `Obligation Pernod Ricard`,
        cardSubTitle: `7% - Janvier 2015`,
        list: [
          `Émise en mai 2009 et remboursée en janvier 2015`,
          `Cours de 100( exprimés en % de la valeur nominale, soit 50,000 €`,
          `Montant total de 800 millions d'€ pour refinancer un crédit bancaire`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 5,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `Obligation Banco Santander`,
        cardSubTitle: `3,5% - Octobre 2015`,
        list: [
          `Émise en octobre 2010 et remboursée en octobre 2015`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 50 000 €)`,
          `Montant total de 1 milliard d’€ dans le cadre de son activité de financement de l'économie`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 6,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `obligation carrefour`,
        cardSubTitle: `4% - Avril 2020`,
        list: [
          `Émise en avril 2010 et remboursée en avril 2020`,
          `Cours de 100 (exprimé en % de la valeur nominale, soit 1 000 €)`,
          `Montant total de 1 milliard d’€ pour se refinancer`,
        ],
        legend: [],
      },
    },
  ],
};

export default module_05_04_blocDragAndDrop1;
