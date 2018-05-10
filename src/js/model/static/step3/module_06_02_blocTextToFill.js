import moduleTypes from '../moduleTypes';

const module_06_02_blocTextToFill = {
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
        __html: `Le fonds B est investi en actions, obligations et produits monétaires, ce qui en fait un fonds `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`actions`, `obligations`, `monétaire`, `mixte`],
      answer: `mixte`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: `.

      Bien que la part des actifs risqués soit au 31 mars de `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`5.07%`, `94.93%`],
      answer: `94.93%`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: `, il a un SRRI de 3 et donc un profil de risque et de rendement `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`sans risque`, `peu risqué`, `plutôt risqué`],
      answer: `peu risqué`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: `. Ce profil s’explique par `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [
        `la zone géographique d’investissement`,
        `l’existence d’une garantie`
      ],
      answer: `l’existence d’une garantie`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `. 

      L’investisseur est assuré `
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`à l'échéance`, `à tout moment`],
      answer: `à tout moment`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: ` de ne pas perdre plus de 10% du capital investi, mais la garantie portant sur 90% `
      }
    },
    {
      position: 12,
      toFill: true,
      choices: [
        `du capital`,
        `de la performance`,
        `de la plus haute valeur liquidative`
      ],
      answer: `de la plus haute valeur liquidative`
    },
    {
      position: 13,
      toFill: false,
      content: {
        __html: `, il peut aussi, en fonction de la date d’investissement, bénéficier d’une garantie `
      }
    },
    {
      position: 14,
      toFill: true,
      choices: [`inférieure`, `supérieure`],
      answer: `supérieure`
    },
    {
      position: 15,
      toFill: false,
      content: {
        __html: ` puisque calculée sur une valeur liquidative historique. En fin de période, l’investisseur peut ainsi acquérir une part du fonds à 118,4 € et bénéficier d’une garantie de 112,67 €, soit `
      }
    },
    {
      position: 16,
      toFill: true,
      choices: [`90%`, `95%`, `100%`],
      answer: `95%`
    },
    {
      position: 17,
      toFill: false,
      content: {
        __html: ` du capital investi.`
      }
    }
  ],
  secondText: [
    {
      position: 1,
      toFill: false,
      content: {
        __html: `L’existence d’une garantie ou protection pour le fonds B implique qu’il s’agit d’un fonds `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`profilé`, `de performance absolue`, `structuré`],
      answer: `structuré`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: `.

      Le fonds est composé de différents OPC (Organismes de Placement Collectifs), ce qui en fait aussi un `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`fonds maître`, `fonds nourricier`, `fonds de fonds`],
      answer: `fonds de fonds`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: ` et lui permet d’être exposé à des `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`des actions`, `des obligations`, `des classes d'actif`],
      answer: `des classes d'actif`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: ` très diversifiées.`
      }
    }
  ]
};

export default module_06_02_blocTextToFill;
