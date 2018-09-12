import moduleTypes from '../moduleTypes';

const module_11_blocDragAndDropType2 = {
  /*position: 6,*/
  modulType: moduleTypes.blocDragAndDrop2,
  firstDescription: {
    __html: `Pour vous aider, les fonds proposés dans le PEG sont d’ores et déjà positionnés sur le schéma en fonction de leur risque et de leur durée de placement recommandée.

    fonction de leur risque et de leur durée de placement recommandée. Glissez à présent les fonds ci-dessous à leur place sur le schéma RISQUE/DURÉE à l’aide de leurs DICI et/ou fiches de reporting.`,
  },
  /*noChapter: false,*/
  chapter: 'Schéma des fonds ',
  duration: 5,
  title: 'Risque et durée des fonds de votre plan',
  grid: {
    columns: ['', 1, 2, 3, 4, 5, 6, 7],
    rows: ['+ de 8 ans', '8 ans', '+ de 5 ans', '5 ans', '4 ans', '+ de 3 ans', '3 ans', '1 an', '6 mois', '3 mois'],
    templateRows:  '60px 60px 60px 20px 60px 60px 20px 60px 60px 20px'
  },
  legend: [
    {
      legendColor: process.env.REACT_APP_OBLIGATION,
      legendText: 'obligataires',
    },
    {
      legendColor: process.env.REACT_APP_MONETAIRE,
      legendText: 'monétaires',
    },
    {
      legendColor: process.env.REACT_APP_ACTION,
      legendText: 'actions',
    },
    {
      legendColor: process.env.REACT_APP_TITRE,
      legendText: `titres de l'entreprise`,
    },
    {
      legendColor: process.env.REACT_APP_TITRESOLIDAIRE,
      legendText: 'titres solidaires',
    },
  ],
  verticalAxis: 'Durée de placement minimum recommandée',
  horizontalAxis: 'Risque',
  cards: [
    {
      startPosition: 1,
      isDraggable: true,
      endPosition: {
        row: 1,
        column: 6,
      },
      name: `Amundi label harmonie solidaire ESR`,
      pieData: [
        {
          name: 'obligataires',
          value: 8.33,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 16.67,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 75,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 2,
      isDraggable: true,
      endPosition: {
        row: 3,
        column: 7,
      },
      name: `Amundi label équilibre solidaire ESR`,
      pieData: [
        {
          name: 'obligataires',
          value: 10,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 45,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 45,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 3,
      isDraggable: true,
      endPosition: {
        row: 3,
        column: 5,
      },
      name: `Amundi convictions ESR`,
      pieData: [
        {
          name: 'obligataires',
          value: 0,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 83.33,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 16.67,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 4,
      isDraggable: true,
      endPosition: {
        row: 5,
        column: 4,
      },
      name: `Expertise Europe Optima`,
      pieData: [
        {
          name: 'obligataires',
          value: 0,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 75,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 25,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 5,
      isDraggable: true,
      endPosition: {
        row: 5,
        column: 6,
      },
      name: `CPR ES Croissance`,
      pieData: [
        {
          name: 'obligataires',
          value: 0,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 50,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 50,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 6,
      isDraggable: true,
      endPosition: {
        row: 6,
        column: 6,
      },
      name: `Amundi Label Monétaire ESR`,
      pieData: [
        {
          name: 'obligataires',
          value: 0,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 100,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 0,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 0,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      isDraggable: true,
      endPosition: {
        row: 2,
        column: 7,
      },
      name: `Groupe adp PEPS`,
      pieData: [
        {
          name: 'obligataires',
          value: 0,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 0,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 100,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 0,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      isDraggable: true,
      endPosition: {
        row: 8,
        column: 2,
      },
      name: `Amundi 3 mois ESR`,
      pieData: [
        {
          name: 'obligataires',
          value: 0,
          color: process.env.REACT_APP_OBLIGATION,
        },
        {
          name: 'monétaires',
          value: 0,
          color: process.env.REACT_APP_MONETAIRE,
        },
        {
          name: 'actions',
          value: 0,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 100,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 0,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
  ],
};

export default module_11_blocDragAndDropType2;
