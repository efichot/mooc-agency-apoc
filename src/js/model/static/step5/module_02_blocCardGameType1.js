import moduleTypes from '../moduleTypes';

const column1 = 'Émetteurs';
const column2 = 'Investisseurs';
const column3 = 'Intermédiaires';

const module_02_blocCardGameType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType1,
  firstDescription: {
    __html: `Ce jeu se déroule en deux temps à partir de cas réels: 
    1. Découvrez ce que fait l'acteur dont vous tirez la casre;
    2. Trouvez la carte « Besoins et Opérations » qui correspond au cas de cet acteur en faisant défiler les cartes.`
  },
  /*noChapter: false,*/
  chapter: 'Jeu des acteurs des marchés financiers',
  duration: 3,
  title: 'Besoins et opérations des acteurs',
  game: [
    {
      type: column1,
      firstCard: {
        title: 'Spie batignolles',
        answerNumber: 1,
        subTitle: 'Entreprise du secteur du BTP non cotée en Bourse',
        list: [
          {
            __html:
              "Détenue à 93% par la Financière Spie Batignolles et 7% par les salariés via le fonds Spie Batignolles Actionnariat du Plan d'Epargne Entreprise"
          },
          {
            __html:
              "Procède en mai 2009 à une cession de 3% des <em style='color: rgba(255,0,31,1.00)'>actions</em> détenues par la Financière Spie Batignolles pour augmenter la part réservée aux salariés"
          }
        ]
      },
      secondCard: {
        answerNumber: 1,
        title1: 'Besoins',
        list1: [
          {
            __html:
              "Augmenter la part d'<em style='color: rgba(255,0,31,1.00)'>actions</em> réservée aux salariés"
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Cession d'<em style='color: rgba(255,0,31,1.00)'>actions</em> détenues par la société de contrôle"
          }
        ]
      },
      thirdCard: {
        subTitle: '(non cotée)',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Augmenter la part d'<em style='color: rgba(255,0,31,1.00)'>actions</em> Spie Batignolles réservée aux salariés via le Plan d'Epargne Entreprise"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Cession de 3% des <em style='color: rgba(255,0,31,1.00)'>actions</em>  détenues par la Financière Spie Batignolles en mai 2009"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Lafarge',
        answerNumber: 2,
        subTitle: 'Entreprise du secteur du BTP cotée en Bourse',
        list: [
          {
            __html:
              "A acquis en décembre 2007  le groupe cimentier égyptien Orascom Cement pour 8,8 milliards d'euros"
          },
          {
            __html:
              "Procède en avril 2009 à une émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 1,5 milliard d'euros pour réduire l’endettement dû à l’acquisition et au ralentissement économique des Etats-Unis et de l’Europe"
          }
        ]
      },
      secondCard: {
        answerNumber: 2,
        title1: 'Besoins',
        list1: [
          {
            __html:
              'Réduire l’endettement suite à une acquisition et un contexte économique défavorable'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              'Réduire l’endettement suite à l’acquisition du groupe cimentier égyptien Orascom Cement et au ralentissement économique des Etats-Unis et de l’Europe'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 1,5 milliards d'€ en avril 2009"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Heidelberg cement',
        answerNumber: 2,
        subTitle: 'Entreprise du secteur du BTP cotée en Bourse',
        list: [
          {
            __html:
              "A acquis en mai 2007 le groupe de matériaux de construction anglais Hanson PLC pour 11,7 milliards d'euros"
          },
          {
            __html:
              "Procède en septembre 2009 à une émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 2,3 milliards d'euros pour réduire l’endettement dû à l’acquisition et au ralentissement économique des Etats-Unis et de l’Europe"
          }
        ]
      },
      secondCard: {
        answerNumber: 2,
        title1: 'Besoins',
        list1: [
          {
            __html:
              'Réduire l’endettement suite à une acquisition et un contexte économique défavorable'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              'Réduire l’endettement suite à l’acquisition du groupe de matériaux de construction anglais Hanson PLC et au ralentissement économique des Etats-Unis et de l’Europe'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              'Ééduire l’endettement suite à l’acquisition du groupe de matériaux de construction anglais Hanson PLC et au ralentissement économique des Etats-Unis et de l’Europe'
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Pernod ricard',
        answerNumber: 3,
        subTitle:
          'Entreprise du secteur des biens de consommation cotée en Bourse',
        list: [
          {
            __html:
              "A acquis en avril 2008 le groupe suédois Vin & Spirit pour 5,6 milliards d'euros"
          },
          {
            __html:
              "Procède en avril 2009 à une émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 1 milliard d'euros pour réduire l’endettement dû à l’acquisition et au ralentissement économique des Etats-Unis et de l’Europe"
          },
          {
            __html:
              "Procède en mai 2009 à une émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 800 millions d'euros pour se refinancer"
          }
        ]
      },
      secondCard: {
        answerNumber: 3,
        title1: 'Besoins',
        list1: [
          {
            __html:
              'Réduire l’endettement suite à une acquisition et un contexte économique défavorable'
          },
          {
            __html: 'Se refinancer'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em>"
          },
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              'Réduire l’endettement suite à l’acquisition du groupe suédois Vin & Spirit et au ralentissement économique des Etats-Unis et de l’Europe'
          },
          {
            __html: 'Se refinancer'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(255,0,31,1.00)'>actions</em> de 1 milliard d'€ en avril 2009"
          },
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 800 millions d'€ en mai 2009"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Banca monte dei pashi',
        answerNumber: 4,
        subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
        list: [
          {
            __html:
              'Développe une activité de banque commerciale auprès des entreprises et des particuliers en Italie'
          },
          {
            __html:
              "Détient fin 2010 un portefeuille d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> italiennes de 24 milliards d'euros (soit 10% de son bilan et 160% de ses fonds propres)"
          }
        ]
      },
      secondCard: {
        answerNumber: 4,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Financer les entreprises et les particuliers'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html: 'Néant'
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: 'Financer les entreprises et les particuliers  en Italie'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html: 'Néant'
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Banco santander',
        answerNumber: 5,
        subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
        list: [
          {
            __html:
              "S’est fortement développée hors d'Espagne par croissance interne et externe à l’international"
          },
          {
            __html:
              "Procède en octobre 2010 à une émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em>  de 1 milliard d'euros  dans le cadre de son activité de  banque commerciale auprès des entreprises et des particuliers"
          }
        ]
      },
      secondCard: {
        answerNumber: 5,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Financer les entreprises et les particuliers'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              'Financer les entreprises et les particuliers  en Espagne et à l’international'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 1 milliard d'€ en octobre 2010"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Carrefour',
        answerNumber: 6,
        subTitle: 'Entreprise de distributinon côtée en bourse',
        list: [
          {
            __html:
              "Est devenue en terme de chiffre d'affaires le premier distributeur en Europe et le deuxième dans le monde après l’américain Walmart"
          },
          {
            __html:
              "Procède en avril 2010 à une émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 1 milliard d'euros pour se refinancer"
          }
        ]
      },
      secondCard: {
        answerNumber: 6,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Se refinancer'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
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
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 1 milliard d'€ en avril 2010"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'État Allemand',
        answerNumber: 7,
        list: [
          {
            __html:
              "Procède en janvier 2010 à une émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 24 milliards d'euros pour couvrir ses besoins de financement à long terme"
          },
          {
            __html:
              "Procède en janvier 2010 à une émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 23 milliards d'euros pour couvrir ses besoins de financement à moyen terme "
          }
        ]
      },
      secondCard: {
        answerNumber: 7,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à long terme'
          },
          {
            __html: 'Se financer à moyen terme'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans"
          },
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à long terme'
          },
          {
            __html: 'Se financer à moyen terme'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 24 milliard d'€ en janvier 2010"
          },
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 23 milliard d'€ en janvier 2010"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'État italien',
        answerNumber: 7,
        list: [
          {
            __html:
              "Procède en février 2010 à une émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 23 milliards d'euros pour couvrir ses besoins de financement à long terme"
          },
          {
            __html:
              "Procède en février 2010 à une émissions d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 21 milliards d'euros pour couvrir ses besoins de financement à moyen terme"
          }
        ]
      },
      secondCard: {
        answerNumber: 7,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à long terme'
          },
          {
            __html: 'Se financer à moyen terme'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans"
          },
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à long terme'
          },
          {
            __html: 'Se financer à moyen terme'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 23 milliard d'€ en janvier 2010"
          },
          {
            __html:
              "Émission d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 21 milliard d'€ en janvier 2010"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Enel',
        answerNumber: 8,
        subTitle: 'Entreprise du secteur électrique cotée en Bourse',
        list: [
          {
            __html:
              "Intervient sur le marché <em style='color: rgba(0,159,63,1.00)'>monétaire</em> pour des besoins de trésorerie à court terme  via sa filiale financière ENEL Finance"
          },
          {
            __html:
              "Procède le 20 mai 2009 à une émission <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 500 millions d'euros"
          }
        ]
      },
      secondCard: {
        answerNumber: 8,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à court terme'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              'Se financer à court terme via sa filiale financière ENEL Finance'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 500 millions d'€ le 20 mai 2009"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Credit agricole',
        answerNumber: 8,
        subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
        list: [
          {
            __html:
              "Intervient sur le marché <em style='color: rgba(0,159,63,1.00)'>monétaire</em> pour des besoins de trésorerie à court terme"
          },
          {
            __html:
              "Procède le 27 mai 2009 à une émission <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 1,5 milliard d'euros"
          }
        ]
      },
      secondCard: {
        answerNumber: 8,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à court terme'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: 'Se financer à court terme'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Émission de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> de 1,5 milliard d'€ le 27 mai 2009"
          }
        ]
      }
    },
    {
      type: column1,
      firstCard: {
        title: 'Lcl',
        answerNumber: 9,
        subTitle: 'Entreprise du secteur bancaire non cotée en Bourse',
        list: [
          {
            __html:
              'Intervient sur le marché interbancaire pour assurer au jour le jour l’adéquation entre ses ressources à placer et ses besoins à financer '
          },
          {
            __html:
              "Procède le 29 mai 2009 à un emprunt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d'€ auprès de la banque Société Générale "
          }
        ]
      },
      secondCard: {
        answerNumber: 9,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Financer son manque de liquidité au jour J'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Emprunt <em style='color: rgba(0,159,63,1.00)'>monétaire</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
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
              "Emprunt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d'€ auprès de la banque Société Générale le 29 mai 2009"
          }
        ]
      }
    },
    {
      type: column2,
      firstCard: {
        title: 'Societe generale',
        answerNumber: 10,
        subTitle: 'Entreprise du secteur bancaire cotée en Bourse',
        list: [
          {
            __html:
              'Intervient sur le marché interbancaire pour assurer au jour le jour l’adéquation entre ses ressources à placer et ses besoins à financer'
          },
          {
            __html:
              "Procède le 29 mai 2009 à un prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d'€ auprès de la banque LCL "
          }
        ]
      },
      secondCard: {
        answerNumber: 10,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Placer son excédent de liquidité au jour J'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html: "Prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: 'Placer son excédent de liquidité au 29 mai 2009'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Prêt <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de 10 millions d'€ à la banque LCL le 29 mai"
          }
        ]
      }
    },
    {
      type: column2,
      firstCard: {
        title: 'Amundi',
        answerNumber: 11,
        subTitle: "Société de gestion d'actifs cotée en Bourse",
        list: [
          {
            __html:
              'Gère le fonds Spie Batignolles Actionnariat pour le compte des salariés'
          },
          {
            __html:
              "Investit en <em style='color: rgba(255,0,31,1.00)'>actions</em> Spie Batignolles cédées en mai 2009 par la Financière Spie Batignolles"
          }
        ]
      },
      secondCard: {
        answerNumber: 11,
        title1: 'Besoins',
        list1: [
          {
            __html:
              "Investir l’épargne des salariés en <em style='color: rgba(255,0,31,1.00)'>actions</em> de l’entreprise"
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> existantes"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Investir l’épargne des salariés  de Spie Batignolles en <em style='color: rgba(255,0,31,1.00)'>actions</em> de l’entreprise via le Plan d'Epargne Entreprise"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> Spie Batignolles cédées par la Financière Spie Batignolles en mai 2009"
          }
        ]
      }
    },
    {
      type: column2,
      firstCard: {
        title: 'Monsieur martin',
        answerNumber: 12,
        subTitle: 'Investisseur particulier',
        list: [
          {
            __html: 'Gère  directement son épargne en Bourse '
          },
          {
            __html:
              "Investit en avril 2009 20 000 € en <em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge, car il anticipe, après la crise de 2008, une reprise de l’économie et le rebond de Lafarge qui devrait tirer parti de l’acquisition d'Orascom Cement et de son positionnement sur les pays émergents"
          }
        ]
      },
      secondCard: {
        answerNumber: 12,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Investir son épargne'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> nouvelles"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: 'Investir 20 000 euros'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge émises en avril 2009"
          }
        ]
      }
    },
    {
      type: column2,
      firstCard: {
        title: 'Bnp paribas asset management',
        answerNumber: 13,
        subTitle: "Société de gestion d'actifs non cotée en Bourse",
        list: [
          {
            __html:
              'Gère le fonds BNP Paribas Actions Europe pour le compte de ses clients'
          },
          {
            __html:
              "Investit 30 millions d'€ en <em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge, Pernod Ricard  et Heidelberg Cement émises en avril et septembre 2009, et en <em style='color: rgba(255,0,31,1.00)'>actions</em> Banca Monte Dei Paschi acquises sur le marché"
          }
        ]
      },
      secondCard: {
        answerNumber: 13,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Investir l’épargne des clients '
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> existantes"
          },
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> nouvelles"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Investir les souscriptions de ses clients dans le fonds BNP Paribas Actions Europe, soit 30 millions d'€"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge, Pernod Ricard et Heidelberg Cement émises en avril et septembre"
          }
        ]
      }
    },
    {
      type: column2,
      firstCard: {
        title: 'Erafp*',
        subTitle: 'Investisseur Institutionnel',
        answerNumber: 14,
        help:
          '*Établissement pour la Retraite Additionnelle de la Fonction Publique',
        list: [
          {
            __html:
              'Gère  les sommes destinées à la retraite additionnelle des fonctionnaires'
          },
          {
            __html:
              "Investit 800 millions d'€ en <em style='color: rgba(163,12,146,1.00)'>obligations</em> à long et moyen terme émises par les Etats allemand et italien en janvier et février 2010, et en <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Banco Santander en octobre 2010"
          }
        ]
      },
      secondCard: {
        answerNumber: 14,
        title1: 'Besoins',
        list1: [
          {
            __html:
              'Investir les sommes destinées à couvrir les besoins des bénéficiaires'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> nouvelles"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              'Investir les sommes destinées à la retraite additionnelle des fonctionnaires'
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Achat d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 et 5 ans émises par les Etats allemand et italien en janvier et février 2010"
          },
          {
            __html:
              "Achat d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> Banco Santander émises en octobre 2010"
          }
        ]
      }
    },
    {
      type: column2,
      firstCard: {
        title: 'Axa',
        subTitle: 'Entreprise du secteur de l’assurance cotée en Bourse',
        answerNumber: 15,
        list: [
          {
            __html:
              'Gère  les sommes destinées à couvrir les dommages et la protection des biens des assurés en cas de sinistre'
          },
          {
            __html:
              "Investit 150 millions d'€ en <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Pernod Ricard et Carrefour en mai 2009 et avril 2010"
          }
        ]
      },
      secondCard: {
        answerNumber: 15,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Investir l’épargne des clients '
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Achat de titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> nouvellement émis"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
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
              "Achat d'<em style='color: rgba(163,12,146,1.00)'>obligations</em> Pernod Ricard et Carrefour émises en mai 2009 et avril 2010"
          }
        ]
      }
    },
    {
      type: column3,
      firstCard: {
        title: 'Hsbc global asset management',
        answerNumber: 16,
        subTitle: "Société de gestion d'actifs non cotée en Bourse",
        list: [
          {
            __html:
              'Gère  le fonds  HSBC Monétaire pour le compte de ses clients'
          },
          {
            __html:
              "Investit 100 millions d'€ en titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole et Enel en mai 2009"
          }
        ]
      },
      secondCard: {
        answerNumber: 16,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Réaliser les opérations de ses clients'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html: "Placement d'une émission en actions"
          },
          {
            __html: 'Montage de l’opération réservée aux salariés'
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Investir les souscriptions de ses clients dans le fonds HSBC Monétaire, soit 100 millions d'€"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Achat des titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole et Enel en mai 2009"
          }
        ]
      }
    },
    {
      type: column3,
      firstCard: {
        title: 'Credit agricole cib',
        answerNumber: 16,
        subTitle:
          "Banque de financement et d'investissement non cotée en Bourse",
        list: [
          {
            __html:
              'Intervient pour le compte de ses clients Lafarge et Spie Batignolles'
          },
          {
            __html:
              "Participe au placement  des <em style='color: rgba(255,0,31,1.00)'>actions</em> émises par Lafarge en avril 2009"
          },
          {
            __html:
              'Participe au montage du fonds Spie Batignolles Actionnariat en mai 2009'
          }
        ]
      },
      secondCard: {
        answerNumber: 16,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Réaliser les opérations de ses clients'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Placement d'une émission en <em style='color: rgba(255,0,31,1.00)'>actions</em>"
          },
          {
            __html: 'Montage de l’opération réservée aux salariés'
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Réaliser l’émission en <em style='color: rgba(255,0,31,1.00)'>actions</em> de Lafarge"
          },
          {
            __html:
              "Réaliser l’opération d'actionnariat salarié de Spie Batignolles"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Placement de l’émission en <em style='color: rgba(255,0,31,1.00)'>actions</em> de Lafarge en avril 2009"
          },
          {
            __html:
              'Montage de l’opération réservée aux salariés de Spie Batignolles en mai 2009'
          }
        ]
      }
    },
    {
      type: column3,
      firstCard: {
        title: 'Oddo securities',
        subTitle: "Entreprise d'investissement non cotée en Bourse",
        answerNumber: 17,
        list: [
          {
            __html:
              "Transmet et exécute dans les meilleures conditions les ordres d'achat ou de vente passés par les investisseurs"
          },
          {
            __html:
              "Procède aux transactions sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par les Etats allemand, italien, et Banco Santander en janvier, février et octobre 2010"
          }
        ]
      },
      secondCard: {
        answerNumber: 17,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Exécuter les ordres des investisseurs'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Transactions sur le marché <em style='color: rgba(163,12,146,1.00)'>obligataire</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html: "Exécuter les ordres d'achat de l’ERAFP*"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Transactions sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par les Etats allemand et italien, et Banco Santander en janvier, février et octobre 2010"
          }
        ]
      }
    },
    {
      type: column3,
      firstCard: {
        title: 'Compagnie financiere tradition',
        subTitle: 'Société de courtage cotée en Bourse',
        answerNumber: 18,
        list: [
          {
            __html:
              "Sert d'intermédiaire pour une opération financière entre deux parties"
          },
          {
            __html:
              "Procède aux transactions sur les titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole et ENEL en mai 2009"
          },
          {
            __html:
              "Procède aux transactions sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Carrefour en avril 2010"
          }
        ]
      },
      secondCard: {
        answerNumber: 18,
        title1: 'Besoins',
        list1: [
          {
            __html:
              "Réaliser le placement de titres émis auprès d'investisseurs"
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Transactions sur le marché <em style='color: rgba(0,159,63,1.00)'>monétaire</em>"
          },
          {
            __html:
              "Transactions sur le marché <em style='color: rgba(163,12,146,1.00)'>obligataire</em>"
          }
        ]
      },
      thirdCard: {
        title: 'Compagnie financière tradition',
        subTitle: 'Société de courtage',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Placer les émissions <em style='color: rgba(0,159,63,1.00)'>monétaire</em> de Crédit Agricole et Enel auprès de HSBC Asset Management"
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
              "Transactions sur les titres <em style='color: rgba(0,159,63,1.00)'>monétaires</em> émis par Crédit Agricole et Enel en mai 2009"
          },
          {
            __html:
              "Transaction sur les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Carrefour "
          }
        ]
      }
    },
    {
      type: column3,
      firstCard: {
        title: 'Credit agricole cheuvreux',
        answerNumber: 19,
        subTitle: "Entreprise d'investissement non cotée en Bourse",
        list: [
          {
            __html:
              "Transmet et exécute dans les meilleures conditions les ordres d'achat ou de vente passés par les investisseurs"
          },
          {
            __html:
              "Procède aux transactions sur les <em style='color: rgba(255,0,31,1.00)'>actions</em> et les <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Pernod Ricard en avril et mai 2009, les <em style='color: rgba(255,0,31,1.00)'>actions</em> émises par Heidelberg Cement en septembre 2009 et les <em style='color: rgba(255,0,31,1.00)'>actions</em> Banca Monte Dei Paschi présentes sur le marché"
          }
        ]
      },
      secondCard: {
        answerNumber: 19,
        title1: 'Besoins',
        list1: [
          {
            __html: 'Exécuter les ordres des investisseurs'
          }
        ],
        title2: 'Opérations',
        list2: [
          {
            __html:
              "Transactions sur le marché <em style='color: rgba(163,12,146,1.00)'>obligataire</em>"
          },
          {
            __html:
              "Transactions sur le marché des <em style='color: rgba(255,0,31,1.00)'>actions</em>"
          }
        ]
      },
      thirdCard: {
        subTitle: '',
        headList1: 'Besoins',
        list1: [
          {
            __html:
              "Exécuter les ordres d'achat de Axa et BNP Paribas Asset Management"
          }
        ],
        headList2: 'Opérations',
        list2: [
          {
            __html:
              "Transactions sur les <em style='color: rgba(255,0,31,1.00)'>actions</em>  émises par Pernod Ricard et Heidelberg Cement en avril et septembre 2009, et sur les <em style='color: rgba(255,0,31,1.00)'>actions</em> Banca Monte Dei Paschi"
          }
        ]
      }
    }
  ]
};

export default module_02_blocCardGameType1;
