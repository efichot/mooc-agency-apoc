import moduleTypes from '../moduleTypes';

const module_04_02_blocQCMType4 = {
  /*position: 6,*/
  modulType: moduleTypes.blocQCMType4,
  firstDescription: {
    __html: `À l'issue de cette transaction, vous avez échangé le titre "Action" ci-dessous encadré. 
Deux autres titres vous sont proposés.`,
  },
  secondDescription: {
    __html: `Indiquez si les rubriques ci-dessous sont présentes dans les trois cartes « Action » ci-dessus et si leur contenu est bien strictement identique, puis validez. `,
  },
  thirdDescription: {
    __html: `Toute obligation représente une part de dette à plus d’un an émise par une entreprise, une entité du secteur public ou un État ; c’est un titre de créance assorti d’une double obligation de rémunérer en versant un revenu et de rembourser le nominal à l’échéance, qui peut s’échanger et qui a un cours. 
Pour avoir plus de détail sur les éléments de différenciation d’un titre « Obligation », passez la souris sur les rubriques concernées : revenu, remboursement, cours.`,
  },
  /*noChapter: false,*/
  chapter: 'Analyse comparative',
  duration: 2,
  name: 'Caractéristiques des actions',
  fields: {
    element1: 'Fraction de dette',
    element2: 'Obligation de rémunérer et de rembourser',
    element3: 'Revenu',
    element4: 'Remboursement',
    element5: 'Cours',
  },
  cards: [
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
      },
      cardsSet: [
        {
          title: 'Obligation long terme État Allemand émise en janvier 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 3,75%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2020)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1€)',
            transition: '',
          },
        },
        {
          title: 'Obligation moyen terme État Allemand émise en janvier 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 3,75%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1€)',
            transition: '',
          },
        },
        {
          title: 'Obligation Pernod Ricard émise en mai 2009',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 7,0%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
      ],
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
      },
      cardsSet: [
        {
          title: 'Obligation moyen terme État Italien émise en février 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 4,25%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(février 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation long terme État Italien émise en février 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 4,5%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(février 2020)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation Banco Santander émise en octobre 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 3,5%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(octobre 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
      ],
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
      },
      cardsSet: [
        {
          title: 'Obligation Banco Santander émise en octobre 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 3,5%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(octobre 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation long terme État Italien émise en février 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 4,5%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(février 2020)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation Pernod Ricard émise en mai 2009',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 7,0%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
      ],
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
      },
      cardsSet: [
        {
          title: 'Obligation Carrefour émise en avril 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 4,0%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(avril 2020)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation moyen terme État Allemand émise en janvier 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 3,75%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1€)',
            transition: '',
          },
        },
        {
          title: 'Obligation Banco Santander émise en octobre 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 3,5%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(octobre 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
      ],
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true,
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false,
        },
      },
      cardsSet: [
        {
          title: 'Obligation Pernod Ricard émise en mai 2009',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 7,0%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation moyen terme État Italien émise en février 2010',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 4,25%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(février 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 1 000€)',
            transition: '',
          },
        },
        {
          title: 'Obligation Pernod Ricard émise en mai 2009',
          element1: {
            key: 'Fraction de dette',
            value: "de l'émetteur",
            transition: '=',
          },
          element2: {
            key: 'Obligation de rémunérer et de rembourser',
            value: '',
            transition: '=',
          },
          element3: {
            key: '1 revenu fixe annuel dénommé coupon,',
            value: 'de 7,0%',
            transition: '+',
          },
          element4: {
            key: "1 remboursement à l'échéance",
            value: '(janvier 2015)',
            transition: '=',
          },
          element5: {
            key: '1 cours de 100',
            value: '(exprimé en % de la valeur nominale soit 50 000€)',
            transition: '',
          },
        },
      ],
    },
  ],
};

export default module_04_02_blocQCMType4;
