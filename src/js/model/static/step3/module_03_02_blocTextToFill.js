import moduleTypes from '../moduleTypes';

const module_03_02_blocTextToFill = {
  modulType: moduleTypes.blocTextToFill,
  noChapter: false,
  chapter: 'Texte à compléter',
  duration: 5,
  title: 'Commentaires de reporting',
  title2: 'Suite (en option)',
  description: {
    __html: `Fonds Actions D`
  },
  firstText: [
    {
      position: 1,
      toFill: false,
      content: {
        __html: `Le fonds D investit sur les titres des PME (Petites et Moyennes Entreprises) et ETI (Entreprises de Taille Intermédiaire) innovantes et entrepreneuriales de la zone euro et relève ainsi d’une gestion de `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`croissance ou growth`, `valeur ou value`],
      answer: `croissance ou growth`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: ` mais aussi d’une gestion `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`sectorielle`, `thématique`],
      answer: `thématique`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: `. C’est un fonds actions qui a un SRRI de 6 et donc un profil de risque et de rendement `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`sans risque`, `peu risqué`],
      answer: `peu risqué`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: `.

      Le fonds réalise sur 5 ans + 80,77% de performance `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [`absolue`, `relative`],
      answer: `absolue`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `. Sa meilleure performance`
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`glissante`, `calendaire`],
      answer: `calendaire`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: ` depuis 2006 a été réalisée en `
      }
    },
    {
      position: 12,
      toFill: true,
      choices: [`2015`, `2013`, `2009`],
      answer: `2015`
    },
    {
      position: 13,
      toFill: false,
      content: {
        __html: `, soit `
      }
    },
    {
      position: 14,
      toFill: true,
      choices: [`36.84%`, `68.76%`, `33.95%`],
      answer: `36.84%`
    },
    {
      position: 15,
      toFill: false,
      content: {
        __html: ` et sa moins bonne en `
      }
    },
    {
      position: 16,
      toFill: true,
      choices: [`2011`, `2008`, `2007`],
      answer: `2008`
    },
    {
      position: 17,
      toFill: false,
      content: {
        __html: `, soit `
      }
    },
    {
      position: 18,
      toFill: true,
      choices: [`-3.01%`, `-19.85%`, `-49.20%`],
      answer: `-49.20%`
    },
    {
      position: 19,
      toFill: false,
      content: {
        __html: `.

      Au 31 mars l’exposition la plus importante du fonds est, en terme sectoriel, `
      }
    },
    {
      position: 20,
      toFill: true,
      choices: [`l'industrie`, `la santé`, `l'informatique`],
      answer: `l'industrie`
    },
    {
      position: 21,
      toFill: false,
      content: {
        __html: ` qui fait partie des secteurs `
      }
    },
    {
      position: 22,
      toFill: true,
      choices: [`défensifs`, `cycliques`],
      answer: `cycliques`
    },
    {
      position: 23,
      toFill: false,
      content: {
        __html: ` et en terme géographique `
      }
    },
    {
      position: 24,
      toFill: true,
      choices: [`la France`, `l'Allemagne`, `l'Italie`],
      answer: `la France`
    },
    {
      position: 25,
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
        __html: `Sans indice de référence ni garantie, le fonds D applique une gestion `
      }
    },
    {
      position: 2,
      toFill: true,
      choices: [`active`, `passive`],
      answer: `active`
    },
    {
      position: 3,
      toFill: false,
      content: {
        __html: ` qui est qualifiée de `
      }
    },
    {
      position: 4,
      toFill: true,
      choices: [`non-benchmarkée`, `indicielle`, `structurée`],
      answer: `non-benchmarkée`
    },
    {
      position: 5,
      toFill: false,
      content: {
        __html: `. Il utilise une approche `
      }
    },
    {
      position: 6,
      toFill: true,
      choices: [`qualitative`, `quantitative`],
      answer: `qualitative`
    },
    {
      position: 7,
      toFill: false,
      content: {
        __html: `, tout en maîtrisant le risque pris comme le montre sur plusieurs années le niveau de `
      }
    },
    {
      position: 8,
      toFill: true,
      choices: [`volatilité`, `Ratio de Sharpe`, `délai de recouvrement`],
      answer: `volatilité`
    },
    {
      position: 9,
      toFill: false,
      content: {
        __html: `.

      Le risque pris a été générateur de performance sur l’ensemble des périodes comme le montre le niveau positif du`
      }
    },
    {
      position: 10,
      toFill: true,
      choices: [`volatilité`, `Ratio de Sharpe`, `délai de recouvrement`],
      answer: `Ratio de Sharpe`
    },
    {
      position: 11,
      toFill: false,
      content: {
        __html: `.`
      }
    }
  ]
};

export default module_03_02_blocTextToFill;
