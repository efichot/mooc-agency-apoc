import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_08_04_blocQCMType3.png';

const choices = [
  {
    value: 'Finance',
    label: 'Finance'
  },
  {
    value: 'Informatique',
    label: 'Informatique'
  },
  {
    value: 'Industrie',
    label: 'Industrie'
  },
  {
    value: 'Conso. cyclique',
    label: 'Conso. cyclique'
  },
  {
    value: 'Matériaux',
    label: 'Matériaux'
  },
  {
    value: 'Énergie',
    label: 'Énergie'
  },
  {
    value: 'Santé',
    label: 'Santé'
  },
  {
    value: 'Conso. non cyclique',
    label: 'Conso. non cyclique'
  },
  {
    value: 'Services publics',
    label: 'Services publics'
  }
];

const module_08_04_blocQCMType3 = {
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

À partir des données fournies ci-dessous, identifiez les principaux choix sectoriels faits par le gérant du fonds actions C en sélectionnant la bonne réponse

    <img src="${image}" alt="extrait de fiche de reporting" />

    Quels sont les 3 secteurs ?`
  },
  questions: [
    {
      questionNumber: 1,
      title: `Auxquels le fonds est le plus exposé`,
      selects: [
        {
          selectNumber: 11,
          choices,
          answer: 'Finance'
        },
        {
          selectNumber: 12,
          choices,
          answer: 'Informatique'
        },
        {
          selectNumber: 13,
          choices,
          answer: 'Industrie'
        }
      ]
    },
    {
      questionNumber: 2,
      title: `Qui sont les plus sur-pondérés`,
      selects: [
        {
          selectNumber: 21,
          choices,
          answer: 'Finance'
        },
        {
          selectNumber: 22,
          choices,
          answer: 'Industrie'
        },
        {
          selectNumber: 23,
          choices,
          answer: 'Matériaux'
        }
      ]
    },
    {
      questionNumber: 3,
      title: `Qui sont les plus sous-pondérés`,
      selects: [
        {
          selectNumber: 31,
          choices,
          answer: 'Santé'
        },
        {
          selectNumber: 32,
          choices,
          answer: 'Conso. non cyclique'
        },
        {
          selectNumber: 33,
          choices,
          answer: 'Informatique'
        }
      ]
    },
    {
      questionNumber: 4,
      title: `A quel secteur appartiennent les 3 titres les plus surpondérés ?`,
      selects: [
        {
          selectNumber: 41,
          choices,
          answer: 'Finance'
        }
      ]
    },
    {
      questionNumber: 5,
      title: `Font-ils partie de l’indice de référence ?`,
      selects: [
        {
          selectNumber: 51,
          choices: [
            {
              value: 'Oui',
              label: 'Oui'
            },
            {
              value: 'Non',
              label: 'Non'
            }
          ],
          answer: 'Non'
        }
      ]
    }
  ],
  synthese: {
    firstDescription: {
      __html: `Le fonds actions C est un fonds géré selon un indice de référence (gestion benchmarkée). Sa composition reflète donc pour une part significative celle de son indice de référence, pour l’autre les choix faits par le gérant et mesurés par les sur et sous-pondérations du fonds par rapport à son indice. Le gérant a ainsi choisi au 31/03/2016 de surpondérer la Finance et les secteurs cycliques (Industrie, Matériaux) au détriment de secteurs défensifs comme la Santé, la Consommation non cyclique et même l’Informatique. Ces informations, croisées avec les plus fortes expositions (Finance, Informatique, Industrie), positionnent le fonds dans la perspective d’un environnement économique et financier porteur.`
    }
  }
};

export default module_08_04_blocQCMType3;
