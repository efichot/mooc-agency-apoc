import moduleTypes from '../moduleTypes';
import img1 from '../../../../assets/img/step1/module_09_01.png';
import img2 from '../../../../assets/img/step1/module_09_02.png';
import img3 from '../../../../assets/img/step1/module_09_03.png';
import button_finger from '../../../../assets/img/icons/button-finger.png';

const module_09_blocDragAndDropType1 = {
  /*position: 6.1,*/
  modulType: moduleTypes.blocDragAndDrop1,
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  firstDescription: {
    __html: `Classez sur l’axe horizontal, «&nbsp;de moins à plus de risque&nbsp;», les fonds ci-dessous à l’aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div> et en fonction de l’évolution plus ou moins régulière de leur performance, puis validez.`,
  },
  noChapter: false,
  chapter: 'Échelle de risque',
  duration: 5,
  title: 'Risque des fonds',
  dropCardTitleStyles: {
    fontSize: '1rem',
    marginTop: 7,
  },
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
  explication: {
    title: 'Du moins au plus risqué',
    description: {
      __html: `La performance du Fonds Monétaire A est peu volatile et le fonds est donc peu risqué.
La performance du Fonds Obligataire B est plus volatile que celle du Fonds Monétaire A et le fonds est donc plus risqué.
La performance du Fonds Actions B est encore plus volatile. Le risque est fort de voir la valeur du fonds soit beaucoup baisser, soit beaucoup monter.
Cette hiérarchie des fonds en terme de risque est révélatrice de celle des marchés sur lesquels ils sont investis, à savoir que le marché monétaire est moins risqué que le marché obligataire, qui est lui-même moins risqué que celui des actions.`,
    },
  },
};

export default module_09_blocDragAndDropType1;
