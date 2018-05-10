import moduleTypes from '../moduleTypes';

const module_04_02_blocTextToFill = {
  modulType: moduleTypes.blocTextToFill,
  noChapter: false,
  chapter: 'Texte à compléter',
  duration: 5,
  title: 'Commentaires de reporting',
  title2: 'Suite (en option)',
  description: {
    __html: `Fonds Obligataire B`
  },
  firstText: [
    {
      position: 1,
      toFill: false,
      content: {
        __html: `L’indice de référence BARCLAYS EURO-AGGREGATE CORPORATE indique que le fonds B est principalement investi en obligations `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`d'États`, `d'entreprise`],
      answer: `d'entreprise`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: ` de la zone euro. 

      Au 31 mars le fonds est plus exposé que son indice au secteur de `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`l'industrie`, `la finance`],
      answer: `la finance`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: ` et il a une petite part de diversification en obligations `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`d'États de la zone euro`, `d'États hors zone euro`],
      answer: `d'États hors zone euro`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: `. 

      C’est un fonds obligataire qui a un SRRI de 3 et donc un profil de risque et de rendement `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [`sans risque`, `modérément risqué`, `risqué`],
      answer: `modérément risqué`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `.

      S’il réalise une performance absolue sur 5 ans de`
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`29.07%`, `30.29%`, `-1.22%`],
      answer: `29.07%`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: `, sa performance relative reste `
      }
    },
    {
      position: 12,
      toFill: true,
      choices: [`supérieure`, `inférieure`],
      answer: `inférieure`
    },
    {
      position: 13,
      toFill: false,
      content: {
        __html: ` à celle de son indice de référence de `
      }
    },
    {
      position: 14,
      toFill: true,
      choices: [`29.07%`, `30.29%`, `-1.22%`],
      answer: `-1.22%`
    },
    {
      position: 15,
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
        __html: `La prise de risque mesurée par la Volatilité et la Tracking Error du fonds B `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`s'est accrue`, `a diminué`],
      answer: `s'est accrue`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: ` sur un an et s’est traduite par une `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`sur-performance`, `sous-performance`],
      answer: `sous-performance`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: ` par rapport à l’indice, même si cette dernière a tendance sur trois mois à `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`augmenter`, `se réduire`, `s'inverser`],
      answer: `se réduire`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: ` et sur un mois à `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [`augmenter`, `se réduire`, `s'inverser`],
      answer: `s'inverser`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `. 

Le niveau de sensibilité du fonds indique qu’en cas de hausse de 1% des taux d’intérêt, sa performance `
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`augmentera`, `baissera`],
      answer: `baissera`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: ` de près de 5%.

      Au 31 mars, le fonds est, en pourcentage de l’actif et en sensibilité, surpondéré sur le secteur `
      }
    },
    {
      position: 12,
      toFill: true,
      choices: [`industrie`, `finance`],
      answer: `finance`
    },
    {
      position: 13,
      toFill: false,
      content: {
        __html: ` ainsi que sur les émetteurs notés `
      }
    },
    {
      position: 14,
      toFill: true,
      choices: [`A`, `BBB`],
      answer: `BBB`
    },
    {
      position: 15,
      toFill: false,
      content: {
        __html: `; il est sous-pondéré sur le secteur `
      }
    },
    {
      position: 16,
      toFill: true,
      choices: [`industrie`, `finance`],
      answer: `industrie`
    },
    {
      position: 17,
      toFill: false,
      content: {
        __html: ` ainsi que sur les émetteurs notés `
      }
    },
    {
      position: 18,
      toFill: true,
      choices: [`A`, `BBB`],
      answer: `A`
    },
    {
      position: 19,
      toFill: false,
      content: {
        __html: `. En terme d’actif, c’est sur les obligations à 5 ans que son exposition est la plus `
      }
    },
    {
      position: 20,
      toFill: true,
      choices: [`forte`, `faible`],
      answer: `forte`
    },
    {
      position: 21,
      toFill: false,
      content: {
        __html: `, mais c’est sur les obligations à 7 ans que sa sensibilité est la plus `
      }
    },
    {
      position: 22,
      toFill: true,
      choices: [`forte`, `faible`],
      answer: `forte`
    },
    {
      position: 23,
      toFill: false,
      content: {
        __html: `.`
      }
    }
  ]
};

export default module_04_02_blocTextToFill;
