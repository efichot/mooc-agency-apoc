import moduleTypes from '../moduleTypes';

const module_04_06_blocUpAndDownType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocUpAndDownType1,
  linkWithBlocSubMenu1ButtonPosition: 1,
  firstDescription: {
    __html: `Faites de même pour les portefeuilles précédemment classés sur l’axe horizontal du risque à l’aide du bouton. 
        En cas de doute, visionnez à nouveau la dernière minute de la vidéo ci-dessus. `
  },
  noChapter: false,
  chapter: 'Échelle de performance',
  duration: 1,
  name: 'performance des fonds actions',
  cards: [
    {
      color: 'white',
      startPosition: 1,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `fcpe spie batignolles`
        /*cardSubTitle: `BTP - non coté`,*/
      }
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: ` FONDS BNP PARIBAS ACTIONS EUROPE`
        /*cardSubTitle: `Consommation - coté`,*/
      }
    },
    {
      color: 'white',
      startPosition: 3,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `  PORTEFEUILLE DE MONSIEUR MARTIN `
        /*cardSubTitle: `Matériaux BTP - coté`,*/
      }
    }
  ]
};

export default module_04_06_blocUpAndDownType1;
