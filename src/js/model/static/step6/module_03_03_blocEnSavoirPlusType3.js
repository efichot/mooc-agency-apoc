import moduleTypes from '../moduleTypes';

const module_03_03_blocEnSavoirPlusType3 = {
  modulType: moduleTypes.blocEnSavoirPlusType3,
  /*linkWithBlocSubMenu1ButtonPosition: 2,*/
  noChapter: false,
  chapter: 'En savoir plus',
  duration: 2,
  title: "Principales catégories d'actions",
  grid: {
    columns: 3,
    rows: 4,
  },
  firstDescription: {
    __html: 'Pour plus de détail, passez la souris sur les différents catégories.',
  },
  cards: [
    {
      color: 'rgba(255,92,49,1.00)',
      hoverColor: 'rgba(255,92,49,1.00)',
      width: 200,
      index: 1,
      position: {
        column: 1,
        row: 1,
      },
      arrowFollowing: true,
      arrowRight: false,
      cardTitle: 'Action ordinaire',
      cardContent:
        'Titre de propriété représentant une partie du capital d’une entreprise, assorti d’un dividende et d’un droit de vote.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(249,166,141,1.00)',
      hoverColor: 'rgba(249,166,141,1.00)',
      width: 200,
      index: 2,
      position: {
        column: 1,
        row: 2,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: "Action à bon﻿(s) de souscription d'actions",
      cardContent:
        'Titre de propriété auquel est attaché un (ou plusieurs) bon(s) donnant droit de souscrire à un certain nombre d’actions ordinaires à un prix et durant une période fixés à l’avance, sans obligation d’exercice.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(255,92,49,1.00)',
      hoverColor: 'rgba(255,92,49,1.00)',
      width: 200,
      index: 3,
      position: {
        column: 1,
        row: 3,
      },
      arrowFollowing: true,
      arrowRight: false,
      cardTitle: 'Action de préférence',
      cardContent: 'Titre de propriété hybride dont les droits particuliers peuvent être financiers et/ou politiques.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(249,166,141,1.00)',
      hoverColor: 'rgba(249,166,141,1.00)',
      width: 200,
      index: 4,
      position: {
        column: 1,
        row: 4,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Action à dividende prioritaire',
      cardContent:
        'Titre de propriété donnant droit à un dividende qui est réglé avant tout versement aux autres actionnaires et qui est forfaitaire, déterminé en fonction d’une formule de valorisation incluant un % du chiffre d’affaires, voire limité.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(249,166,141,1.00)',
      hoverColor: 'rgba(249,166,141,1.00)',
      width: 200,
      index: 5,
      position: {
        column: 2,
        row: 4,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Action à droit de vote double',
      cardContent:
        'Titre de propriété qui donne à son détenteur un poids double dans les décisions votées en Assemblée Générale de l’entreprise. Depuis la loi Florange du 29 mars 2014, il est attribué d’office aux actionnaires des entreprises françaises cotées qui détiennent leurs actions depuis au moins deux ans, sauf si une décision contraire est adoptée par l’Assemblée Générale ou si les statuts prévoient déjà l’octroi de ce droit en faveur des actionnaires détenant leurs actions depuis une période déterminée.',
      cardSubTitle: 'cf. Glossaire',
    },
    {
      color: 'rgba(249,166,141,1.00)',
      hoverColor: 'rgba(249,166,141,1.00)',
      width: 200,
      index: 6,
      position: {
        column: 3,
        row: 4,
      },
      arrowFollowing: false,
      arrowRight: false,
      cardTitle: 'Action sans droit de vote',
      cardContent:
        'Titre de propriété dépourvu de droit de vote comme l’action à dividende prioritaire (ADP) ou le certificat d’investissement (CI), qui permettent de lever des capitaux sans interférence sur le fonctionnement politique de l’entreprise.',
      cardSubTitle: 'cf. Glossaire',
    },
  ],
};

export default module_03_03_blocEnSavoirPlusType3;
