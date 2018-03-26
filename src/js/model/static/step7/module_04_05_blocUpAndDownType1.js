import moduleTypes from '../moduleTypes';

const module_04_05_blocUpAndDownType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocUpAndDownType1,
  linkWithBlocSubMenu1ButtonPosition: 1,
  firstDescription: {
    __html: `À la lumière de ce qui s’est réellement passé, déplacez sur l’axe vertical ci-dessous, « de moins à plus de performance », les actions précédemment classées sur l’axe horizontal du risque, à l’aide du bouton, puis validez.
        En cas de doute, visionnez à nouveau le graphique des performances au tout début de la vidéo ci-dessus.`
  },
  noChapter: false,
  chapter: 'Échelle de performance',
  duration: 3,
  name: 'performance des titres actions',
  cards: [
    {
      color: 'white',
      startPosition: 1,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `spie batignolles`,
        cardSubTitle: `BTP - non coté`
      }
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `PERNOD RICARD`,
        cardSubTitle: `Consommation - coté`
      }
    },
    {
      color: 'white',
      startPosition: 3,
      endPosition: 5,
      content: {
        isDraggable: true,
        cardTitle: `BANCA MONTE DEI PASCHI`,
        cardSubTitle: ` Banque - cotée`
      }
    },
    {
      color: 'white',
      startPosition: 4,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `HEIDELBERG CEMENT`,
        cardSubTitle: `Matériaux BTP - coté`
      }
    },
    {
      color: 'white',
      startPosition: 5,
      endPosition: 4,
      content: {
        isDraggable: true,
        cardTitle: `LAFARGE`,
        cardSubTitle: `Matériaux BTP - coté`
      }
    }
  ]
};

export default module_04_05_blocUpAndDownType1;
