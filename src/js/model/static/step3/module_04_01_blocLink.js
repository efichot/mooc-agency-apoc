import moduleTypes from '../moduleTypes';
import pdf from '../../../../assets/img/step3/module_04_01_blocLink.pdf';

const module_04_01_blocLink = {
  /*position: 5,*/
  /*linkWithBlocSubMenu1ButtonPosition: 1,*/
  modulType: moduleTypes.blocLink,
  noChapter: true,
  firstDescription: {
    __html: `Pour vous permettre de compléter le commentaire de reporting ci-dessous, téléchargez la fiche du fonds qui vous est proposée.`
  },
  link: pdf,
  buttonName: 'Fiche fonds obligataire'
};

export default module_04_01_blocLink;
