import moduleTypes from '../moduleTypes';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';

const module_04_blocQCMType2 = {
  position: 1,
  modulType: moduleTypes.blocQCMType2,
  noChapter: false,
  chapter: `Questionnaire`,
  duration: 2,
  title: `Srri et objectifs d'investissement`,
  firstDescription: {
    __html: `Quatre fonds constitués de plusieurs actifs (actions, obligations, titres monétaires) vous sont proposés. Affectez à chacun le niveau de risque et de rendement (SRRI) qui lui correspond à l’aide du bouton  <div class="button-in-description" style="background-image: url(${button_down_right})"></div> et en fonction de plusieurs paramètres&nbsp;: 
    - la proportion d’actions indiquée rend-elle le fonds plus ou moins risqué&nbsp;? 
    - l’objectif d’investissement vise-t-il à encadrer ou limiter le risque du fonds&nbsp;?

    Pour plus de détail sur l’objectif d’investissement, passez la souris sur les fonds concernés, sélectionnez la réponse puis validez.
    En cas de doute, visionnez à nouveau la toute fin de la vidéo MODE D’EMPLOI DU DICI.
    Quel est le SRRI des fonds de type mixte ci-dessous&nbsp;?`,
  },
  questions: [
    {
      questionNumber: 1,
      title: `Fonds A`,
      description: `Réaliser une performance supérieure à son indice de référence constitué de 50% d’actions européennes (MSCI Europe) et 50% d’obligations d’État (Barclays Euro Aggregate Treasury 1-7 years)`,
      choices: [
        {
          value: 3,
          label: 3,
        },
        {
          value: 4,
          label: 4,
        },
        {
          value: 5,
          label: 5,
        },
        {
          value: 6,
          label: 6,
        },
      ],
      answer: 4,
    },
    {
      questionNumber: 2,
      title: `Fonds B`,
      description: `Rechercher la valorisation du capital par une gestion où la part des actions peut passer de 0 à 120%, et celle des obligations et titres monétaires de 0 à 100%`,
      choices: [
        {
          value: 3,
          label: 3,
        },
        {
          value: 4,
          label: 4,
        },
        {
          value: 5,
          label: 5,
        },
        {
          value: 6,
          label: 6,
        },
      ],
      answer: 6,
    },
    {
      questionNumber: 3,
      title: `Fonds C`,
      description: `Réaliser une performance annualisée de 5% sur 5 ans au-delà de l’indice monétaire (EONIA capitalisé) où la part des actions peut passer de 0 à 100% comme celle des obligations et titres monétaires`,
      choices: [
        {
          value: 3,
          label: 3,
        },
        {
          value: 4,
          label: 4,
        },
        {
          value: 5,
          label: 5,
        },
        {
          value: 6,
          label: 6,
        },
      ],
      answer: 5,
    },
    {
      questionNumber: 4,
      title: `Fonds D`,
      description: `Préserver à tout moment le capital à hauteur de 90% de la plus élevée des valeurs de part du fonds constatées`,
      choices: [
        {
          value: 3,
          label: 3,
        },
        {
          value: 4,
          label: 4,
        },
        {
          value: 5,
          label: 5,
        },
        {
          value: 6,
          label: 6,
        },
      ],
      answer: 3,
    },
  ],
  synthese: {
    firstDescription: {
      __html: `Les Fonds B et C peuvent tous deux voir la part des actions (actif le plus risqué) passer à 100% sans contrainte géographique. Ils ont donc un SRRI élevé, mais l’objectif d’investissement du Fonds C est encadré et chiffré en annualisé à 5% sur 5 ans au-delà de l’EONIA capitalisé, ce qui explique qu’il ait un SRRI de 5, tandis que le Fonds B a un SRRI de 6. Le Fonds A est investi en moyenne à 50% en actions de la zone Euro/Europe (moins risquées que les actions internationales) et à 50% en obligations et titres monétaires. Il présente un SRRI intermédiaire de 4.
      Le Fonds D garantissant à tout moment 90% de la plus élevée des valeurs liquidatives constatées, le risque de perte ne peut excéder 10%. Son SRRI est donc plus faible que celui des trois autres fonds qui sont tous totalement exposés aux fluctuations des marchés financiers sans protection.`,
    },
    title: 'Synthèse',
    secondDescription: {
      __html: `Retrouvez la fiche synthèse "Document d'information Clé pour l'investisseur" dans la bibliothèque.`,
    },
  },
};

export default module_04_blocQCMType2;
