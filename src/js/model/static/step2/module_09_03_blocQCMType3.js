import moduleTypes from '../moduleTypes';
import image from '../../../../assets/img/step2/module_09_03_blocQCMType3.png';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const choices = [
  {
    value: 'Sensibilité',
    label: 'Sensibilité',
  },
  {
    value: 'Notation',
    label: 'Notation',
  },
  {
    value: 'Taux de rendement',
    label: 'Taux de rendement',
  },
  {
    value: 'SPS',
    label: 'SPS',
  },
  {
    value: 'Spread',
    label: 'Spread',
  },
  {
    value: 'Nombre de lignes',
    label: 'Nombre de lignes',
  },
  {
    value: 'Volatilité',
    label: 'Volatilité',
  },
  {
    value: 'Ratio d’information',
    label: 'Ratio d’information',
  },
  {
    value: 'Ratio de Sharpe',
    label: 'Ratio de Sharpe',
  },
];

const module_09_03_blocQCMType3 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: false,
  noPopup: true,
  chapter: `En savoir plus`,
  duration: 2,
  title: `Risque et rendement des fonds obligataires`,
  firstDescription: {
    __html: `Comment choisir entre un fonds obligataire États et un fonds obligataire crédit (investi en obligations émises par des entreprises)&nbsp;? Sont-ils différents en terme de risque et de rendement&nbsp;?
    L’indicateur de SPS (Sensibilité Pondérée par le Spread) présente l’intérêt de mesurer l’exposition du fonds aux mouvements des taux d’intérêt (sensibilité) en fonction du risque pris sur les émetteurs (spread).
    Comparez les extraits proposés ci-dessous et analysez l’exposition des fonds obligataires A et B en sélectionnant les bonnes réponses grâce au bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div>.

    <img src="${image}" alt="extrait de fiche de reporting" />`,
  },
  questions: [
    {
      questionNumber: 1,
      maxWidth: 363,
      title: `Quels indicateurs permettent de distinguer très clairement les deux fonds&nbsp;?`,
      selects: [
        {
          selectNumber: 11,
          choices,
          answer: 'Taux de rendement',
        },
        {
          selectNumber: 12,
          choices,
          answer: 'Spread',
        },
        {
          selectNumber: 13,
          choices,
          answer: 'SPS',
        },
        {
          selectNumber: 14,
          choices,
          answer: 'Nombre de lignes',
        },
      ],
    },
  ],
  synthese: {
    firstDescription: {
      __html: `Les obligations émises par les États (fonds A) sont globalement perçues par les investisseurs comme financièrement plus sûres que celles émises par les entreprises (fonds B). Trois indicateurs ont donc un niveau clairement plus faible pour les premières que pour les secondes :
      - le taux de rendement exigé par les investisseurs qui est d’autant plus faible que le risque pris est faible,
      - le spread qui mesure le risque de l’émetteur par l’écart de rendement par rapport au taux sans risque de l’obligation allemande,
      - la SPS (sensibilité pondérée par le spread) qui mesure l’exposition du fonds aux mouvements des taux d’intérêt (sensibilité) en fonction du risque pris sur les émetteurs (spread).
      Le quatrième indicateur est le nombre de lignes qui est généralement plus faible dans un fonds obligataire États que dans un fonds obligataire crédit. Le marché des obligations d’État se caractérise en effet par un nombre plus limité d’émetteurs mais aussi par des besoins financiers et donc des montants émis beaucoup plus importants.`,
    },
  },
};

export default module_09_03_blocQCMType3;
