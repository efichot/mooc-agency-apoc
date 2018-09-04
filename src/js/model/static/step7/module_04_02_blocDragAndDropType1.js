import moduleTypes from '../moduleTypes';
import button_finger from '../../../../assets/img/icons/button-finger.png';

const module_04_02_blocDragAndDropType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocDragAndDrop1,
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  firstDescription: {
    __html: `Classez sur l’axe horizontal, « de moins à plus de risque », les entreprises ci-dessous à l’aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div> en fonction de plusieurs paramètres&nbsp;: 
      - pour être moins sensible au marché boursier, vaut-il mieux être cotée ou non&nbsp;? 
      - l’activité et la stratégie de l’entreprise résistent-elles plus ou moins bien à la crise&nbsp;? 
      - ses ventes se concentrent-elles sur une zone géographique plus ou moins touchée par la crise&nbsp;? 

      Puis validez. En cas de doute sur la façon dont l’Europe, les États-Unis et les pays émergents ont réagi à la crise, visionnez à nouveau la 2ième partie de la vidéo intitulée CONTEXTE ÉCONOMIQUE.`,
  },
  /*noChapter: false,*/
  chapter: 'Échelle de risque',
  duration: 4,
  title: 'Risque des titres actions',
  cards: [
    {
      color: 'white',
      startPosition: 1,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `spie batignolles`,
        cardSubTitle: `BTP - non coté`,
        list: [
          `Evaluée à dire d’expert une fois par an sous le contrôle du commissaire aux comptes et de l’AMF (données comptables de l’entreprise et décote liée à la faible liquidité des titres)`,
          `Très bon carnet de commandes pour 2010 et 2011`,
          `Répartition des ventes (100% en France)`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `35% - Construction`,
          },
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `26% - Travaux publics`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `20% - Génie civile et fondations`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `13% - Énergie et aménagement`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `6% - Immobilier et concessions`,
          },
        ],
      },
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `PERNOD RICARD`,
        cardSubTitle: `Consommation - coté`,
        list: [
          `Numéro 2 mondial des vins et spiritueux positionné plutôt sur le haut de gamme`,
          `Répartition des ventes après acquisition du groupe suédois Vin & Spirit présent en Europe et Amérique du Nord`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `34% - Europe hors France`,
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
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
      startPosition: 3,
      endPosition: 5,
      content: {
        isDraggable: true,
        cardTitle: `LAFARGE`,
        cardSubTitle: `Matériaux BTP - coté`,
        list: [
          `Stratégie axée sur le ciment (57% des ventes) et les marchés émergents`,
          `Répartition des ventes après acquisition du cimentier Orascom Cement présent en Egypte, Irak, Algérie, Corée du Sud, Pakistan, Espagne, Turquie`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `32% - Europe de l'Ouest`,
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `22% - Amérique du Nord`,
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `21% - Bassin méditerranéen`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `11% - Asie`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `9% - Europe de l'Est`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `5% - Amérique Latine`,
          },
        ],
      },
    },
    {
      color: 'white',
      startPosition: 4,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `BANCA MONTE DEI PASCHI`,
        cardSubTitle: ` Banque - cotée`,
        list: [
          `Principalement implantée en Toscane, dans le centre et le nord-est de l’Italie`,
          `Bilan et fonds propres constitués d’obligations de l’État italien à hauteur de respectivement 10% et 160%`,
          `Répartition du résultat net`,
        ],
        legend: [
          {
            legendColor: `rgba(138,196,84,1.00)`,
            legendText: `100% - Italie`,
          },
        ],
      },
    },
    {
      color: 'white',
      startPosition: 5,
      endPosition: 4,
      content: {
        isDraggable: true,
        cardTitle: `HEIDELBERG CEMENT`,
        cardSubTitle: `Matériaux BTP - coté`,
        list: [
          `Stratégie d’intégration verticale (61% des ventes en bétons, granulats , matériaux et services)`,
          `Répartition des ventes après acquisition du groupe de matériaux Hanson Plc présent en Amérique du Nord, Royaume-Uni, Australie-Asie et Europe continentale`,
        ],
        legend: [
          {
            legendColor: `rgba(111,151,73,1.00)`,
            legendText: `50% - Europe/Asie Centrale`,
          },
          {
            legendColor: `rgba(132,182,81,1.00)`,
            legendText: `28% - Amérique du Nord`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `20% - Asie/Afrique/Australie`,
          },
          {
            legendColor: `rgba(191,219,177,1.00)`,
            legendText: `2% - Services`,
          },
        ],
      },
    },
  ],
};

export default module_04_02_blocDragAndDropType1;
