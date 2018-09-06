import moduleTypes from '../moduleTypes';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';
import button_up_left from '../../../../assets/img/icons/button-up-left.png';

const module_05_06_blocUpAndDownType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocUpAndDownType1,
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  firstDescription: {
    __html: `À la lumière de ce qui s’est réellement passé, déplacez sur l’axe vertical ci-dessous, «&nbsp;de moins à plus de performance&nbsp;», les obligations d’État précédemment classées sur l’axe horizontal du risque à l’aide des boutons  <div class="button-in-description left" style="background-image: url(${button_up_left})"></div><div class="button-in-description right" style="background-image: url(${button_down_right})"></div>, puis validez. 
En cas de doute, visionnez à nouveau le début de la vidéo ci-dessus.`,
  },
  noChapter: false,
  chapter: 'Échelle de performance',
  duration: 1,
  name: "performance des titres  d'état",
  cards: [
    {
      color: 'white',
      startPosition: 1,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `Allemagne (5 ans)`,
        /*cardSubTitle: `BTP - non coté`,*/
      },
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `Italie (5 ans)`,
        /*cardSubTitle: `Consommation - coté`,*/
      },
    },
    {
      color: 'white',
      startPosition: 3,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `Allemagne (10 ans)`,
        /*cardSubTitle: `Matériaux BTP - coté`,*/
      },
    },
    {
      color: 'white',
      startPosition: 4,
      endPosition: 4,
      content: {
        isDraggable: true,
        cardTitle: `Italie (10 ans)`,
        /*cardSubTitle: `Matériaux BTP - coté`,*/
      },
    },
  ],
};

export default module_05_06_blocUpAndDownType1;
