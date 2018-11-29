import moduleTypes from '../moduleTypes';
import backgroundImage from '../../../../assets/img/step1/module_02.png';

const module_02_blocSimulator = {
  /* position: 3, */
  modulType: moduleTypes.blocVideo,
  noChapter: false,
  chapter: `simulateurs`,
  duration: 5,
  name: `Profils d'investisseur`,
  firstDescription: {
    __html: `Déterminez votre profil d’investisseur en répondant aux questions proposées dans le simulateur ci-dessous.
    À la fin de la simulation, pensez à refermer la fenêtre ouverte pour revenir au parcours&nbsp;!`,
  },
  backgroundImage,
  backgroundColor: 'rgba(255,255,255,1.00)',
  /* secondDescription: {
    __html: ``
  }, */
  button: 'Démarrer la simulation',
  link: `http://caam.harvest.fr/endyvesDpi/`,
};

export default module_02_blocSimulator;
