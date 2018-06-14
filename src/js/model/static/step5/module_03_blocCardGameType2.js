import moduleTypes from '../moduleTypes';

const module_03_blocCardGameType2 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType2,
  firstDescription: {
    __html: `Les trois acteurs di-desus ont des « Besoins et Opérations » différents ; ils appartiennent à trois catégories d'acteurs que vous allez analyser.module_02_blocCardGameType1.js
    Pour chaque question, sélectionnez la ou les bonnes(s) réponse(s) en vous aidant des informations contenues dans les cartes à faire défiler.`
  },
  /*noChapter: false,*/
  chapter: 'Questionnaire des acteurs',
  duration: 3,
  title: 'Catégorie des acteurs des marchés financiers',
  game: {
    title: 'Question 1',
    question:
      'Comment nomme-t-on les acteurs présents dans chacune des catégories ci-dessous ?',
    category1: {
      title: 'Catégorie 1',
      actors: [
        {
          title: 'État allemand',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Se financer à long terme'
            },
            {
              __html: 'Se financer à court terme'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 24 milliards d'euros en janvier 2010"
            },
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 23 milliards d'euros en janvier 2010"
            }
          ]
        },
        {
          title: 'Banco santander',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Financer les entreprises et les particuliers en Espagne et à l’international'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 1 milliards d'euros en octobre 2010"
            }
          ]
        },
        {
          title: 'Carrefour',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Se refinancer'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 1 milliards d'euros en avril 2010"
            }
          ]
        },
        {
          title: 'Crédit agricole',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Se refinancer à court terme'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission  de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 1.5 milliards d'euros le 27 mai 2009"
            }
          ]
        },
        {
          title: 'Enel',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Se refinancer à court terme via sa filiale financière ENEL Finance'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission  de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 500 millions d'euros le 20 mai 2009"
            }
          ]
        },
        {
          title: 'Heidelberg cement',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Réduire l’endettement suite à l’acquisition du groupe de matériaux de construction anglais Hanson PLC et au ralentissement économique des États-Unis et de l’Europe'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 2.3 milliards d'euros en septembre 2009"
            }
          ]
        },
        {
          title: 'État italien',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Se refinancer à long terme'
            },
            {
              __html: 'Se refinancer à moyen terme'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 23 milliards d'euros en février 2010"
            },
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 21 milliards d'euros en février 2010"
            }
          ]
        },
        {
          title: 'Lafarge',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Réduire l’endettement suite à l’acquisition du groupe cimentier égyptien Orascom Cement et au ralentissement économique des États-Unis et de l’Europe'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 1.5 milliards d'euros en avril 2009"
            }
          ]
        },
        {
          title: 'Lcl',
          subTitle: 'Non côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Financer son manque de liquidité au 29 mai 2009'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Emprunt <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 10 millions d’euros directement auprès de la banque Société Générale le 29 mai 2009"
            }
          ]
        },
        {
          title: 'Pernod Ricard',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Réduire l’endettement suite à l’acquisition du groupe suédois Vin & Spirit et au ralentissement économique des États-Unis et de l’Europe'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 1 milliard d’euros en avril 2009"
            },
            {
              __html:
                "Émission  d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 800 millions d'euros en mai 2009"
            }
          ]
        },
        {
          title: 'Spie batignolles',
          subTitle: 'Non côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                "Augmenter la part d'<em style='color: rgba(255,0,31,1.00)'>actions</em> Spie Batignolles réservée aux salariés via le Plan d’Épargne Entreprise"
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Cession de 3% des <em style='color: rgba(255,0,31,1.00)'>actions</em> détenues par la Financière Spie Batignolles en mai 2009"
            }
          ]
        },
        {
          title: 'Banca monte dei paschi',
          subTitle: 'Côtée',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Financer les entreprises et les particuliers en Italie'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Aucune nouvelle émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em>"
            }
          ]
        }
      ],
      actorType: [
        {
          choice: 'Émetteurs',
          answer: true
        },
        {
          choice: 'Acquéreurs',
          answer: false
        },
        {
          choice: 'Entrepreneurs',
          answer: false
        }
      ]
    },
    category3: {
      title: 'Catégorie 3',
      actors: [
        {
          title: 'ÉRAFP*',
          help:
            '*Établissement pour la Retraite Additionnelle de la Fonction Publique',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Investir les sommes destinées à la retraite additionnelle des fonctionnaires'
            },
            {
              __html: 'Se financer à court terme'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Achat d’<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 et 5 ans émises par les États allemand et italien en janvier et février 2010"
            },
            {
              __html:
                "Achat d’<em style='color: rgba(163,12,146,1.00)'>obligations</em> Banco Santander émises en octobre 2010"
            }
          ]
        },
        {
          title: 'Axa',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Investir les sommes destinées à couvrir les dommages et la protection des biens des assurés'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Achat d’<em style='color: rgba(163,12,146,1.00)'>obligations</em> Pernod Ricard et Carrefour émises en mai 2009 et avril 2010"
            }
          ]
        },
        {
          title: 'Hsbc global asset management',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Investir les souscriptions de ses clients dans le fonds HSBC Monétaire, soit 100 millions d’euros'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Achat des titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole et Enel en mai 2009"
            }
          ]
        },
        {
          title: 'Bnp paribas asset management',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Investir les souscriptions de ses clients dans le fonds BNP Paribas Actions Europe, soit 30 millions d’euros'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Achat d’<em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge, Pernod Ricard et Heidelberg Cement émises en avril et septembre 2009"
            },
            {
              __html:
                "Achat d’<em style='color: rgba(255,0,31,1.00)'>actions</em> Banca Monte Dei Paschi sur le marché"
            }
          ]
        },
        {
          title: 'Monsieur Martin',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Investir 20 000 €'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Achat d’<em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge émises en avril 2009"
            }
          ]
        },
        {
          title: 'Société Générale',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Investir son excédent de liquidité au 29 mai 2009'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em>  de 10 millions d’€ directement à la banque LCL le 29 mai 2009"
            }
          ]
        },
        {
          title: 'Amundi',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                "Investir l’épargne des salariés de Spie Batignolles en <em style='color: rgba(255,0,31,1.00)'>actions</em> de l’entreprise via le Plan d’Épargne Entreprise"
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Achat d’<em style='color: rgba(255,0,31,1.00)'>actions</em> Spie Batignolles cédées par la Financière Spie Batignolles en mai 2009"
            }
          ]
        }
      ],
      actorType: [
        {
          choice: 'Financeurs',
          answer: false
        },
        {
          choice: 'Gérants',
          answer: false
        },
        {
          choice: 'Investisseurs',
          answer: true
        }
      ]
    },
    category2: {
      title: 'Catégorie 2',
      actors: [
        {
          title: 'Crédit agricole cheuvreux',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                'Exécuter les ordres d’achat de Axa et BNP Paribas Asset Management'
            },
            {
              __html: 'Se financer à court terme'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Transaction sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Pernod Ricard"
            },
            {
              __html:
                "Transactions sur les <em style='color: rgba(255,0,31,1.00)'>actions</em> émises par Pernod Ricard et Heidelberg Cement et sur les <em style='color: rgba(255,0,31,1.00)'>actions</em> Banca Monte Dei Paschi"
            }
          ]
        },
        {
          title: 'Crédit agricole CIB',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                "Réaliser l’émission en <em style='color: rgba(255,0,31,1.00)'>actions</em> de Lafarge"
            },
            {
              __html:
                'Réaliser l’opération d’actionnariat salarié de Spie Batignolles'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Placement de l’émission en <em style='color: rgba(255,0,31,1.00)'>actions</em> de Lafarge"
            },
            {
              __html:
                'Montage de l’opération réservée aux salariés de Spie Batignolles'
            }
          ]
        },
        {
          title: 'Compagnie financière tradition',
          headList1: 'Besoins',
          list1: [
            {
              __html:
                "Placer les émissions <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de Crédit Agricole et Enel auprès de HSBC Asset Management"
            },
            {
              __html:
                "Placer l’émission <em style='color: rgba(163,12,146,1.00)'>obligataire</em> de Carrefour auprès de Axa"
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Transactions sur les titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole et Enel"
            },
            {
              __html:
                "Transaction sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Carrefour"
            }
          ]
        },
        {
          title: 'Oddo securities',
          help:
            '*Établissement pour la Retraite Additionnelle de la Fonction Publique',
          headList1: 'Besoins',
          list1: [
            {
              __html: 'Exécuter les ordres d’achat de l’ERAFP*'
            }
          ],
          headList2: 'Opérations',
          list2: [
            {
              __html:
                "Transactions sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par les États allemand et italien, et Banco Santander"
            }
          ]
        }
      ],
      actorType: [
        {
          choice: 'Négociateurs',
          answer: false
        },
        {
          choice: 'Intermédiaires',
          answer: true
        },
        {
          choice: 'Prestataires',
          answer: false
        }
      ]
    }
  }
};

export default module_03_blocCardGameType2;
