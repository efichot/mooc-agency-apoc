import moduleTypes from '../moduleTypes';

const module_05_02_blocTextToFill = {
  modulType: moduleTypes.blocTextToFill,
  noChapter: false,
  chapter: 'Texte à compléter',
  duration: 5,
  title: 'Commentaires de reporting',
  title2: 'Suite (en option)',
  description: {
    __html: `Fonds Monétaire B`
  },
  firstText: [
    {
      position: 1,
      toFill: false,
      content: {
        __html: `L’indice de référence EONIA CAPITALISÉ indique que le fonds B est principalement investi en `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`actions`, `obligations`, `produits monétaires`],
      answer: `produits monétaires`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: `.

      Sur toutes les périodes, la Maturité Moyenne Pondérée du fonds est d’au plus `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`90 jours`, `3 mois`, `6 mois`],
      answer: `6 mois`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: ` et sa Durée de Vie Moyenne Pondérée d’au plus `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`9 mois`, `12 mois`, `2 ans`],
      answer: `12 mois`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: `. 

      Au 31 mars la répartition par maturité montre que les titres détenus ayant une durée de vie résiduelle comprise entre 397 jours et 2 ans représentent `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [`21.32%`, `33.58%`, `19.83%`],
      answer: `19.83%`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `du fonds. Il s’agit donc d’ un fonds `
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`monétaire court terme`, `monétaire`],
      answer: `monétaire`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: `.`
      }
    }
  ],
  secondText: [
    {
      position: 1,
      toFill: false,
      content: {
        __html: `Quelle que soit la période, la performance relative du fonds B est `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`positive`, `négative`, `neutre`],
      answer: `négative`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: `, même si sa performance absolue est sur le dernier mois de `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`-0.04%`, `-0.29%`, `0.25%`],
      answer: `0.25%`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: `. Il tire parti de la baisse des taux d’intérêt du fait de sa légère `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`volatilité`, `sensibilité`, `notation`],
      answer: `sensibilité`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: `.Ces résultats expliquent le niveau élevé `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [
        `de la Durée de Vie Moyenne pondérée`,
        `du ratio de Sharpe`,
        `du nombre d’émetteurs`
      ],
      answer: `du ratio de Sharpe`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `.

      Le niveau de 1 du SRRI est confirmé par le niveau faible `
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`du nombre de lignes`, `de la notation`, `de la volatilité`],
      answer: `du nombre de lignes`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: `. En cas de hausse des taux d’intérêt, le fonds sera peu impacté du fait de`
      }
    },
    {
      position: 12,
      toFill: true,
      choices: [`sa volatilité`, `sa sensibilité`, `son SRRI`],
      answer: `son SRRI`
    },
    {
      position: 13,
      toFill: false,
      content: {
        __html: `.`
      }
    }
  ]
};

export default module_05_02_blocTextToFill;
