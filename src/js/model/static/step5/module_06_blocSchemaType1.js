import moduleTypes from '../moduleTypes';

import { column3, column1, column2, types } from './actors';

const module_06_blocSchemaType1 = {
  modulType: moduleTypes.blocSchemaType1,
  firstDescription: {
    __html: `Le schéma di-dessous synthétise l'organisation des marchés financiers.`,
  },
  noChapter: false,
  title: 'Synthèse',
  grid: {
    gridTemplateColumns: '8fr 1fr 4fr 1fr 4fr',
  },
  column1: {
    style: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: 'repeat(3, 40px 70px 70px 70px)',
    },
    cards: [
      {
        className: 'no-background',
        content: column1.name,
        style: {
          gridColumn: 1,
          gridRow: 1,
        },
      },
      {
        className: 'background',
        content: types.column1.etats,
        style: {
          gridColumn: '1 / 3',
          gridRow: 2,
        },
      },
      {
        className: 'background',
        content: types.column1.entreprises,
        style: {
          gridColumn: '1 / 3',
          gridRow: 3,
        },
      },
      {
        className: 'background',
        content: types.column1.banques,
        style: {
          gridColumn: '1 / 3',
          gridRow: 4,
        },
      },
      {
        className: 'no-background',
        content: column2.name,
        style: {
          gridColumn: 1,
          gridRow: 5,
        },
      },
      {
        className: 'arrow',
        style: {
          gridColumn: 2,
          gridRow: 5,
        },
      },
      {
        className: 'background',
        content: types.column2.investisseurs,
        style: {
          gridColumn: '1 / 3',
          gridRow: 6,
        },
      },
      {
        className: 'background',
        content: types.column2.courtiers,
        style: {
          gridColumn: '1 / 3',
          gridRow: 7,
        },
      },
      {
        className: 'background',
        content: types.column2.banques,
        style: {
          gridColumn: '1 / 3',
          gridRow: 8,
        },
      },
      {
        className: 'no-background',
        content: column3.name,
        style: {
          gridColumn: 1,
          gridRow: 9,
        },
      },
      {
        className: 'arrow',
        style: {
          gridColumn: 2,
          gridRow: 9,
          transform: 'rotate(180deg)',
        },
      },
      {
        className: 'background',
        content: types.column3.institutionnels,
        style: {
          gridColumn: '1 / 3',
          gridRow: 10,
        },
      },
      {
        className: 'background',
        content: types.column3.particuliers,
        style: {
          gridColumn: '1 / 3',
          gridRow: 11,
        },
      },
      {
        className: 'background',
        content: types.column3.societes,
        style: {
          gridColumn: '1 / 3',
          gridRow: 12,
        },
      },
    ],
  },
  column3: {
    style: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '70px 70px 30px 70px 70px',
    },
    cards: [
      {
        className: 'background',
        content: 'Marché coté',
        style: {
          gridRow: 1,
        },
      },
      {
        className: 'background',
        content: 'Réglementé',
        style: {
          gridRow: 2,
        },
      },
      {
        className: 'background',
        content: 'Marché non coté',
        style: {
          gridRow: 4,
        },
      },
      {
        className: 'background',
        content: 'de gré à gré',
        style: {
          gridRow: 5,
        },
      },
      {
        className: 'ou',
        content: 'ou',
        style: {
          gridRow: '1 / 3',
          backgroundColor: 'rgba(128,128,128,1.00)',
          color: 'var(--white)',
          height: 20,
          width: 35,
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          justifySelf: 'center',
          pointerEvents: 'none',
        },
      },
      {
        className: 'ou',
        content: 'ou',
        style: {
          gridRow: '4 / 6',
          backgroundColor: 'rgba(128,128,128,1.00)',
          color: 'var(--white)',
          height: 20,
          width: 35,
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          justifySelf: 'center',
          pointerEvents: 'none',
        },
      },
    ],
  },
  column5: {
    style: {
      gridTemplateColumns: '1fr',
      gridTemplateRows: '70px 70px 70px 70px',
    },
    cards: [
      {
        className: 'background',
        content: 'Actions',
        style: {
          gridRow: 1,
          backgroundColor: 'rgba(255,92,49,1.00)',
          color: 'var(--white)',
        },
      },
      {
        className: 'background',
        content: 'Obligataire',
        style: {
          gridRow: 2,
          backgroundColor: 'rgba(132,0,119,1.00)',
          color: 'var(--white)',
        },
      },
      {
        className: 'background',
        content: 'Monétaire',
        style: {
          gridRow: 3,
          backgroundColor: 'rgba(0,154,61,1.00)',
          color: 'var(--white)',
        },
      },
      {
        className: 'background',
        content: 'Dérivés',
        style: {
          gridRow: 4,
          backgroundColor: 'rgba(140,139,139,1.00)',
          color: 'var(--white)',
        },
      },
    ],
  },
};

export default module_06_blocSchemaType1;
