import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_08_05_blocQCMType3.png';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const choices = [
  {
    value: 'Italie',
    label: 'Italie',
  },
  {
    value: 'France',
    label: 'France',
  },
  {
    value: 'Allemagne',
    label: 'Allemagne',
  },
  {
    value: 'Espagne',
    label: 'Espagne',
  },
  {
    value: 'Belgique',
    label: 'Belgique',
  },
  {
    value: 'Pays-Bas',
    label: 'Pays-Bas',
  },
  {
    value: 'Autriche',
    label: 'Autriche',
  },
  {
    value: 'Finlande',
    label: 'Finlande',
  },
  {
    value: 'Irlande',
    label: 'Irlande',
  },
  {
    value: 'États-Unis',
    label: 'États-Unis',
  },
];

const module_08_05_blocQCMType3 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: true,
  noPopup: true,
  chapter: `Questionnaire`,
  duration: 2,
  lineHeight: 70,
  title: `En % de l’actif par secteur (pour les fonds actions)`,
  firstDescription: {
    __html: `La stratégie d’investissement du fonds actions est-elle défensive ou offensive ?

À partir des données fournies ci-dessous, identifiez les principaux choix sectoriels faits par le gérant du fonds actions C en sélectionnant la bonne réponse grâce au bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div>.

    <img src="${image}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Quels sont les 2 pays les plus surpondérés ?`,
      selects: [],
    },
    {
      questionNumber: 2,
      title: `En sensibilité`,
      selects: [
        {
          selectNumber: 21,
          choices,
          answer: 'Italie',
        },
        {
          selectNumber: 22,
          choices,
          answer: 'Espagne',
        },
      ],
    },
    {
      questionNumber: 3,
      title: `En % d'actif`,
      selects: [
        {
          selectNumber: 31,
          choices,
          answer: 'Italie',
        },
        {
          selectNumber: 32,
          choices,
          answer: 'Espagne',
        },
      ],
    },
    {
      questionNumber: 4,
      title: `Quels sont les 2 pays les plus sous-pondérés ?`,
      selects: [],
    },
    {
      questionNumber: 5,
      title: `En sensibilité`,
      selects: [
        {
          selectNumber: 51,
          choices,
          answer: 'Allemagne',
        },
        {
          selectNumber: 52,
          choices,
          answer: 'France',
        },
      ],
    },
    {
      questionNumber: 6,
      title: `En % d'actif`,
      selects: [
        {
          selectNumber: 61,
          choices,
          answer: 'Allemagne',
        },
        {
          selectNumber: 62,
          choices,
          answer: 'Belgique',
        },
      ],
    },
  ],
  synthese: {
    firstDescription: {
      __html: `En sensibilité et % d’actif, l’Italie et l’Espagne sont les États les plus surpondérés et l’Allemagne l’État le plus sous-pondéré. Quant à la France, elle occupe la 2ième place pour la sous-pondération en sensibilité, même si la Belgique est le 2ième pays le plus sous-pondéré en % d’actif.
      La répartition en % de l’actif n’est pas forcément révélatrice de l’exposition d’un fonds obligataire. Il faut aussi tenir compte de la sensibilité des titres aux mouvements des taux d’intérêts.
      La composition du fonds obligataire A au 31/03/2016 le rend donc plus sensible aux mouvements des taux d’intérêt italiens et espagnols, et moins sensible aux mouvements des taux d’intérêt allemands et français que son indice de référence.`,
    },
  },
};

export default module_08_05_blocQCMType3;
