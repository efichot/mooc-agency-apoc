import moduleTypes from '../moduleTypes';
import backgroundImage from '../../../../assets/img/step1/module_03.png';

const module_03_blocSimulator = {
  /*position: 3,*/
  noChapter: true,
  /*chapter: `simulateurs`,*/
  /*duration: 5,*/
  modulType: moduleTypes.blocVideo,
  name: `allocation d'actifs`,
  firstDescription: {
    __html: `Par allocation d'actifs, on entend la proportion d’actions, d’obligations et de titres monétaires qui composent
un fonds. 
Pour connaître celle qui correspond à votre profil d’investisseur, reportez ce dernier dans le simulateur 
ci-dessous.
En faisant varier votre durée de placement, vous verrez que plus elle s’allonge, plus la part des actions et obligations est importante. `
  },
  backgroundImage,
  secondDescription: {
    __html: `L’allocation d’actifs qui vous est proposée dépend à la fois de votre propension à prendre ou à ne pas prendre de risque (profil d’investisseur) et de votre horizon de placement. Plus votre horizon est éloigné, plus votre capacité à prendre du risque est forte et vous pouvez donc investir une part plus importante de votre épargne en obligations et en actions ; n’ayant pas besoin de liquidités à brève échéance, vous n’êtes pas contraint de sécuriser vos placements pour éviter d’avoir à les vendre au plus mauvais moment, en cas de baisse brutale des marchés.`
  },
  button: 'Démarrer la simulation',
  link: `http://caam.harvest.fr/simcaam/daa/enter.do`
};

export default module_03_blocSimulator;
