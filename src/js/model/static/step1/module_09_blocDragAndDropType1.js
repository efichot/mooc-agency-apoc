import moduleTypes from '../moduleTypes';
import img1 from '../../../../assets/img/step1/module_09_01.png';
import img2 from '../../../../assets/img/step1/module_09_02.png';
import img3 from '../../../../assets/img/step1/module_09_03.png';

const module_09_blocDragAndDropType1 = {
  /*position: 6.1,*/
  modulType: moduleTypes.blocDragAndDrop1,
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  firstDescription: {
    __html: `Classez sur l’axe horizontal, «&nbsp;de moins à plus de risque&nbsp;», les fonds ci-dessous à l’aide du bouton et en fonction de l’évolution plus ou moins régulière de leur performance, puis validez.`,
  },
  noChapter: false,
  chapter: 'Échelle de risque',
  duration: 5,
  title: 'Risque des fonds',
  cards: [
    {
      color: 'white',
      startPosition: 1,
      endPosition: 3,
      content: {
        isDraggable: true,
        cardTitle: `fonds action B`,
        image: img1,
        /*cardSubTitle: `BTP - non coté`,*/
        list: [`1 an : performance -14,58%`, `3 an : performance 28,49%`, `5 an : performance 27,32%`],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 2,
      endPosition: 2,
      content: {
        isDraggable: true,
        cardTitle: `fonds obligataire B`,
        image: img2,
        /*cardSubTitle: `BTP - non coté`,*/
        list: [`1 an : performance 1,15%`, `3 an : performance 12,77%`, `5 an : performance 29,07%`],
        legend: [],
      },
    },
    {
      color: 'white',
      startPosition: 3,
      endPosition: 1,
      content: {
        isDraggable: true,
        cardTitle: `fonds monétaire A`,
        image: img3,
        /*cardSubTitle: `BTP - non coté`,*/
        list: [`1 an : performance -0,33%`, `3 an : performance 0,12%%`, `5 an : performance 0,34%`],
        legend: [],
      },
    },
  ],
};

export default module_09_blocDragAndDropType1;
