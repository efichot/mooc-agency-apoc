import moduleTypes from '../moduleTypes';
import backgroundImage from '../../../../assets/img/step1/module_03.png';

const module_03_blocSimulator = {
  /* position: 3, */
  modulType: moduleTypes.blocVideo,
  noChapter: true,
  /* chapter: `simulateurs`, */
  /* duration: 5, */
  name: `allocation d'actifs`,
  firstDescription: {
    __html: `L’allocation d'actifs est la proportion des différents titres qui composent un fonds :

    - les actions représentent une portion de capital d’une entreprise et donnent droit à une rémunération (ou dividende) qui varie en fonction des résultats de l’entreprise et qui peut être nulle,
    - les obligations représentent une portion de dette à plus d’un an d’une entreprise, d’un État ou organisme public, et impliquent, sauf cas de faillite, une rémunération (ou intérêt) et un remboursement à l’échéance de cette dette qui sont connus à l’avance,
    - les titres monétaires sont de même nature que les obligations, mais à moins d’un an et donc beaucoup moins exposés au risque de faillite.

    Pour connaître l’allocation d’actifs qui correspond à votre profil d’épargnant, reportez ce dernier dans le simulateur ci-dessous.
    En faisant varier votre durée de placement, vous verrez que plus elle s’allonge, plus la part des actions et obligations est importante.
    `,
  },
  backgroundImage,
  backgroundColor: 'rgba(157,102,147,1.00)',
  secondDescription: {
    __html: `L’allocation d’actifs qui vous est proposée dépend à la fois de votre penchant naturel à prendre ou à ne pas prendre de risque (profil d’épargnant) et de votre horizon de placement.
    Plus votre horizon est éloigné, plus votre capacité à prendre du risque est forte. Vous pouvez donc placer une part plus importante de votre épargne en obligations et en actions; n’ayant pas besoin d’argent à brève échéance, vous n’êtes pas obligé de sécuriser vos placements pour éviter d’avoir à les vendre au plus mauvais moment, en cas de baisse brutale des marchés financiers.`,
  },
  button: 'Démarrer la simulation',
  link: `http://caam.harvest.fr/simcaam/daa/enter.do`,
};

export default module_03_blocSimulator;
