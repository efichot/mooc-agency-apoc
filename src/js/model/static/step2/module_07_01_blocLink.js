import moduleTypes from '../moduleTypes';
import pdf from '../../../../assets/img/step2/module_07_01_blocLink.pdf';

const module_07_01_blocLink = {
  /*position: 5,*/
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  modulType: moduleTypes.blocLink,
  noChapter: false,
  iconType: 'horloge',
  duration: 7,
  chapter: 'Analyse comparative ',
  name: 'Évaluation de la performance des fonds',
  firstDescription: {
    __html: `Des extraits de plusieurs fiches de reporting sont proposés à votre analyse.
    Pour trouver une définition, pensez au glossaire ou consultez la fiche annotée en vert du fonds actions B !`
  },
  link: pdf
};

export default module_07_01_blocLink;
