import moduleTypes from '../moduleTypes';
import dropCard6 from '../../../../assets/img/step4/dropCard6.png';

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
    rows: ['', '5 ans et plus', '', '4 ans', '', '3 ans', '1 an', '6 mois', ''],
    templateRows: '55px 55px 80px 55px 55px 55px 55px 80px 55px',
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
      droppedCardStyle: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      endPosition: {
        row: 3,
        column: 4,
      },
      name: `ADP Diversifié prudent`,
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
          value: 25,
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
      droppedCardStyle: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      endPosition: {
        row: 3,
        column: 5,
      },
      name: `ADP Diversifié dynamique`,
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
          value: 67,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 33,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 3,
      isDraggable: true,
      droppedCardStyle: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      endPosition: {
        row: 3,
        column: 6,
      },
      name: `Amundi label actions solidaire ESR`,
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
          value: 90,
          color: process.env.REACT_APP_ACTION,
        },
        {
          name: `titres de l'entreprise`,
          value: 0,
          color: process.env.REACT_APP_TITRE,
        },
        {
          name: 'titres solidaires',
          value: 10,
          color: process.env.REACT_APP_TITRESOLIDAIRE,
        },
      ],
    },
    {
      startPosition: 4,
      isDraggable: true,
      droppedCardStyle: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      endPosition: {
        row: 3,
        column: 7,
      },
      name: `ADP actionnariat salarié`,
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
      droppedCardStyle: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      endPosition: {
        row: 3,
        column: 8,
      },
      name: `ADP Obligations`,
      pieData: [
        {
          name: 'obligataires',
          value: 33,
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
          value: 66,
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
      droppedCardStyle: {
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'space-around',
      },
      name: `Amundi Trésorerie ESR`,
      background: dropCard6,
    },
  ],
};

export default module_11_blocDragAndDropType2;
