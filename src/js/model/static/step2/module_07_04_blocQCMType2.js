import moduleTypes from '../moduleTypes';
import image1 from '../../../../assets/img/step2/module_07_04_blocQCMType2_1.png';
import image2 from '../../../../assets/img/step2/module_07_04_blocQCMType2_2.png';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const module_07_04_blocQCMType2 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: true,
  noPopup: true,
  chapter: `Questionnaire`,
  duration: 2,
  title: `Performances comparées `,
  firstDescription: {
    __html: `Peut-on perdre de l’argent en investissant dans un fonds monétaire&nbsp;?

    À partir des données fournies ci-dessous, analysez la performance des fonds monétaire court terme et monétaire en sélectionnant les bonnes réponses grâce au bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div>.

    FONDS A
    <img src="${image1}" alt="extrait de fiche de reporting" />

    FONDS B
    <img src="${image2}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Depuis quand la performance absolue est-elle négative pour...`,
      answer: 'no-question',
    },
    {
      questionNumber: 2,
      title: `Le fonds monétaire court terme (A)&nbsp;?`,
      choices: [
        {
          value: '1 mois',
          label: '1 mois',
        },
        {
          value: '3 mois',
          label: '3 mois',
        },
        {
          value: '1 an',
          label: '1 an',
        },
        {
          value: '3 ans',
          label: '3 ans',
        },
        {
          value: '5 ans',
          label: '5 ans',
        },
      ],
      answer: '1 an',
    },
    {
      questionNumber: 3,
      title: `Le fonds monétaire (B)`,
      choices: [
        {
          value: '1 mois',
          label: '1 mois',
        },
        {
          value: '3 mois',
          label: '3 mois',
        },
        {
          value: '1 an',
          label: '1 an',
        },
        {
          value: '3 ans',
          label: '3 ans',
        },
        {
          value: '5 ans',
          label: '5 ans',
        },
      ],
      answer: '1 mois',
    },
    {
      questionNumber: 4,
      title: `Depuis quand la performance de l’indice de référence de ces deux fonds est-elle négative&nbsp;?`,
      choices: [
        {
          value: '1 mois',
          label: '1 mois',
        },
        {
          value: '3 mois',
          label: '3 mois',
        },
        {
          value: '1 an',
          label: '1 an',
        },
        {
          value: '3 ans',
          label: '3 ans',
        },
        {
          value: '5 ans',
          label: '5 ans',
        },
      ],
      answer: '1 an',
    },
    {
      questionNumber: 5,
      title: `Comment s’explique la différence de performance en faveur du fonds monétaire&nbsp;?`,
      choices: [
        {
          value: "Par l'indice de référence",
          label: "Par l'indice de référence",
        },
        {
          value: 'Par la durée des titres détenus',
          label: 'Par la durée des titres détenus',
        },
      ],
      answer: 'Par la durée des titres détenus',
    },
  ],
  synthese: {
    firstDescription: {
      __html: `Le fonds monétaire est investi à hauteur de près de 75% en titres d'une durée (ou maturité) supérieure à 90 jours, tandis que le fonds monétaire court terme l’est à hauteur de près de 60% en titres d'une durée (ou maturité) inférieure à 90 jours (cf. répartition par maturité en page 2 de la fiche de reporting). La capacité du fonds monétaire à pouvoir en partie s’investir en titres obligataires lui permet de dégager une performance positive à un moment où le taux des titres monétaires est en territoire négatif (cf. indice de référence Eonia). Sa performance ne devient négative qu’à partir du dernier mois, alors que celles du fonds monétaire court terme et de l’indice le sont déjà depuis un an.`,
    },
  },
};

export default module_07_04_blocQCMType2;
