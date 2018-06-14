import moduleTypes from '../moduleTypes';

const module_03_02_blocQCMType4 = {
  /*position: 6,*/
  modulType: moduleTypes.blocQCMType4,
  firstDescription: {
    __html: `À l'issue de cette transaction, vous avez échangé le titre "Action" ci-dessous encadré. 
Deux autres titres vous sont proposés.`
  },
  secondDescription: {
    __html: `Indiquez si les rubriques ci-dessous sont présentes dans les trois cartes « Action » ci-dessus et si leur contenu est bien strictement identique, puis validez. `
  },
  thirdDescription: {
    __html: `Toute action représente une part du capital d’une entreprise ; c’est un titre de propriété assorti d’un droit financier (le dividende) et d’un droit politique (le droit de vote), qui peut s’échanger et qui a une valeur (un prix ou un cours). 
    Pour avoir plus de détail sur les éléments de différenciation d’un titre « Action », passez la souris sur les rubriques concernées : droit de vote, dividende, cours ou prix.`
  },
  /*noChapter: false,*/
  chapter: 'Analyse comparative',
  duration: 2,
  name: 'Caractéristiques des actions',
  fields: {
    element1: 'Fraction de capital',
    element2: 'Titre de propriété',
    element3: 'Droit de vote',
    element4: 'Dividende',
    element5: 'Cours ou prix'
  },
  cards: [
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false
        }
      },
      cardsSet: [
        {
          title: 'Action spie batignolles cédée en mai 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value: 'en Assemblée Générale',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 0,35€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: 'de cession de 6,62€',
            transition: ''
          }
        },
        {
          title: 'Action Lafarge émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 2 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 2€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 16,65€",
            transition: ''
          }
        },
        {
          title: 'Action Pernod Ricard émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 10 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 1,32€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 26,70€",
            transition: ''
          }
        }
      ]
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false
        }
      },
      cardsSet: [
        {
          title: 'Action Lafarge émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 2 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 2€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 16,65€",
            transition: ''
          }
        },
        {
          title: 'Action Pernod Ricard émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 10 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 1,32€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 26,70€",
            transition: ''
          }
        },
        {
          title: 'Action Banca Monte dei Paschi échangée en décembre 2010',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value: 'en Assemblée Générale',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 0,0245€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 0,7€",
            transition: ''
          }
        }
      ]
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false
        }
      },
      cardsSet: [
        {
          title: 'Action Lafarge émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 2 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 2€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 16,65€",
            transition: ''
          }
        },
        {
          title: 'Action Pernod Ricard émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 10 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 1,32€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 26,70€",
            transition: ''
          }
        },
        {
          title: 'Action Banca Monte dei Paschi échangée en décembre 2010',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value: 'en Assemblée Générale',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 0,0245€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 0,7€",
            transition: ''
          }
        }
      ]
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false
        }
      },
      cardsSet: [
        {
          title: 'Action heidelberg cement émise en septembre 2009 ',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value: 'en Assemblée Générale',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 0,11€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 37€",
            transition: ''
          }
        },
        {
          title: 'Action Pernod Ricard émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 10 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 1,32€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 26,70€",
            transition: ''
          }
        },
        {
          title: 'Action Lafarge émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 2 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 2€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 16,65€",
            transition: ''
          }
        }
      ]
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false
        }
      },
      cardsSet: [
        {
          title: 'Action Pernod Ricard émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 10 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 1,32€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 26,70€",
            transition: ''
          }
        },
        {
          title: 'Action Lafarge émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 2 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 2€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 16,65€",
            transition: ''
          }
        },
        {
          title: 'Action spie batignolles cédée en mai 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value: 'en Assemblée Générale',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 0,35€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: 'de cession de 6,62€',
            transition: ''
          }
        }
      ]
    },
    {
      answers: {
        element1: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element2: {
          'Rubrique présente': true,
          'Contenu identique': true
        },
        element3: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element4: {
          'Rubrique présente': true,
          'Contenu identique': false
        },
        element5: {
          'Rubrique présente': true,
          'Contenu identique': false
        }
      },
      cardsSet: [
        {
          title: 'Action Banca Monte dei Paschi échangée en décembre 2010',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value: 'en Assemblée Générale',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 0,0245€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 0,7€",
            transition: ''
          }
        },
        {
          title: 'Action Lafarge émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 2 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 2€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 16,65€",
            transition: ''
          }
        },
        {
          title: 'Action Pernod Ricard émise en avril 2009',
          element1: {
            key: 'Fraction de capital',
            value: "de l'entreprise",
            transition: '='
          },
          element2: {
            key: 'Titre de propriété',
            value: 'détenu par un actionnaire',
            transition: '='
          },
          element3: {
            key: '1 droit de vote',
            value:
              'en Assemblée Générale (double pour une détention nominative d’au moins 10 ans)',
            transition: '+'
          },
          element4: {
            key: '1 dividende',
            value: 'fixé à 1,32€ lors de l’Assemblée Générale',
            transition: '='
          },
          element5: {
            key: '1 prix',
            value: "d'émission de 26,70€",
            transition: ''
          }
        }
      ]
    }
  ]
};

export default module_03_02_blocQCMType4;
