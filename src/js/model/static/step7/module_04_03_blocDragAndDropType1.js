import moduleTypes from '../moduleTypes';
import button_finger from '../../../../assets/img/icons/button-finger.png';

const module_04_03_blocDragAndDropType1 = {
  /*position: 6.1,*/
  modulType: moduleTypes.blocDragAndDrop1,
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  firstDescription: {
    __html: `Classez à présent sur un nouvel axe horizontal, «&nbsp;de moins à plus de risque&nbsp;», les portefeuilles (ou fonds) des investisseurs qui ont acheté ces actions à l’aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div> et en fonction du degré de risque que présente la composition de leur portefeuille dans le contexte décrit, puis validez.`,
  },
  noChapter: false,
  chapter: 'Échelle de risque',
  duration: 4,
  title: 'Risque des fonds',
  explication: {
    title: 'Du moins au plus risqué',
    description: {
      __html: `Le FCPE (ou Fonds Commun de Placement d’Entreprise) SPIE BATIGNOLLES est investi en actions Spie Batignolles peu risquées dans le contexte décrit. La part des actions Heidelberg Cement, Lafarge, Pernod Ricard et Banca Monte Dei Paschi représente 10% du fonds BNP PARIBAS ACTIONS EUROPE dont le risque est donc diversifié sur un grand nombre de titres. Les actions Lafarge représentent par contre 25% du portefeuille de MONSIEUR MARTIN qui est donc concentré sur un titre risqué dans le contexte décrit.`,
    },
  },
  cards: [
    {
      color: 'white',
      startPosition: 1,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `fcpe spie batignolles`,
        /*cardSubTitle: `BTP - non coté`,*/
        list: [
          `Réservé aux salariés Spie Batignolles`,
          `Investi en actions non cotées de l’entreprise Spie Batignolles reprise en 2003 par ses dirigeants`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: ` FONDS BNP PARIBAS ACTIONS EUROPE`,
        /*cardSubTitle: `Consommation - coté`,*/
        list: [
          `101,6 millions d’€ investis en actions européennes`,
          `Dont 10 millions d’€ en actions Heidelberg Cement, Lafarge et Pernod Ricard émises en 2009 et en actions  Banca Monte Dei Paschi acquises en 2010 sur le marché pour diversifier l’exposition du fonds en terme de secteurs d’activité`,
        ],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 3,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `  PORTEFEUILLE DE MONSIEUR MARTIN `,
        /*cardSubTitle: `Matériaux BTP - coté`,*/
        list: [
          `80 000 € investis en actions européennes`,
          `Dont 20 000 € en actions Lafarge émises en 2009 car Monsieur Martin anticipe, après la crise de 2008,  une reprise de l’économie et le rebond du titre grâce à l’acquisition d’Orascom Cement et à l’exposition de Lafarge aux pays émergents`,
        ],
        legend: [],
      },
    },
  ],
};

export default module_04_03_blocDragAndDropType1;
