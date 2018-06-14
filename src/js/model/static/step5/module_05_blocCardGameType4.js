import moduleTypes from '../moduleTypes';

const module_05_blocCardGameType4 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType4,
  firstDescription: {
    __html: `Qui inéragit avec qui ? Sélectionnez les acteurs manquants et validez quand tous ont été identifiés.`
  },
  /*noChapter: false,*/
  chapter: 'Schéma des acteurs de marchés',
  duration: 3,
  title: "Catégorie et sous-catégories d'acteurs",
  game: {
    column1: {
      title: 'Émetteurs',
      types: [
        {
          type: 1,
          name: 'États et collectivités publiques',
          explication:
            'Ils émettent des créances sur les marchés financiers pour couvrir leurs besoins de financement et renouveler les emprunts passés auprès des investisseurs ; en France, les collectivités se financent pour l’essentiel auprès des établissements bancaires, et n’ont recours que marginalement au marché primaire.'
        },
        {
          type: 2,
          name: 'Entreprises',
          explication:
            'En France, près de 80% du financement des entreprises et 90% de celui des petites et moyennes entreprises (PME) restent d’origine bancaire.'
        },
        {
          type: 3,
          name: 'Banques',
          explication:
            'Au même titre que les entreprises, elles émettent sur les marchés financiers pour leurs besoins de financement ; à travers la banque commerciale (ou banque de détail) qui collecte les ressources des particuliers et prête aux entreprises, elles ont en particulier recours au marché monétaire pour équilibrer ces flux.'
        }
      ],
      actors: [
        {
          title: 'Pernod ricard',
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
          ],
          type: 2
        },
        {
          title: 'État Allemand',
          subTitle: 'État',
          type: 1,
          list: [
            {
              __html:
                "Procède en janvier 2010 à une émission d’<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 10 ans de 24 milliards d’€ pour couvrir ses besoins de financement à long terme"
            },
            {
              __html:
                "Procède en janvier 2010 à une émission d’<em style='color: rgba(163,12,146,1.00)'>obligations</em> à 5 ans de 23 milliards d’€ pour couvrir ses besoins de financement à moyen terme"
            }
          ]
        },
        {
          title: 'Banco Santander',
          subTitle: 'Entreprise bancaire côtée en bourse',
          type: 3,
          list: [
            {
              __html:
                'S’est fortement développée hors d’Espagne par croissance interne et externe à l’international'
            },
            {
              __html:
                "Procède en octobre 2010 à une émission d’<em style='color: rgba(163,12,146,1.00)'>obligations</em> de 1 milliard d’€ dans le cadre de son activité de banque commerciale auprès des entreprises et des particuliers"
            }
          ]
        }
      ]
    },
    column2: {
      title: 'Intermédiaires',
      types: [
        {
          type: 1,
          name: "Entreprises d'investissement",
          explication:
            'Agréées par l’Autorité de Contrôle Prudentiel et de Résolution (ACPR), elles sont chargées de transmettre les ordres des acheteurs et des vendeurs sur les marchés financiers ; certaines se limitent à ce rôle, d’autres développent des services financiers complémentaires comme la gestion de portefeuilles de clients ou le conseil.'
        },
        {
          type: 2,
          name: 'Courtiers',
          explication:
            'Intermédiaires financiers entre les investisseurs et les marchés, ils proposent à leurs clients une plateforme de transactions et transmettent leurs ordres en contrepartie d’une rémunération ; ils sont particulièrement présents sur les marchés des dérivés et des taux.'
        },
        {
          type: 3,
          name: 'Banques',
          explication:
            'À travers la banque de financement et d’investissement, elles exercent de multiples activités de conseil, d’intermédiation et de montage pour des opérations de haut de bilan de grands clients (introductions en bourse, émissions de dette, fusions/acquisitions, prêts syndiqués…)'
        }
      ],
      actors: [
        {
          title: 'Compagnie financiere tradition',
          subTitle: 'Société de courtage cotée en Bourse',
          type: 2,
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
        {
          title: 'Crédit agricole CIB',
          subTitle: 'Banque de financement et d’investissement',
          type: 3,
          list: [
            {
              __html:
                'Intervient pour le compte de ses clients Lafarge et Spie Batignolles'
            },
            {
              __html:
                "Participe au placement des <em style='color: rgba(255,0,31,1.00)'>actions</em> émises par Lafarge en avril 2009"
            },
            {
              __html:
                'Participe au montage du fonds Spie Batignolles Actionnariat en mai 2009'
            }
          ]
        },
        {
          title: 'Crédit agricole Cheuvreux',
          subTitle: 'Entreprise d’investissement',
          type: 1,
          list: [
            {
              __html:
                'Transmet et exécute dans les meilleures conditions les ordres d’achat ou de vente passés par les investisseurs'
            },
            {
              __html:
                "Procède aux transactions sur les actions et les <span class='violet'>obligations </span> émises par Pernod Ricard en avril et mai 2009, les <em style='color: rgba(255,0,31,1.00)'>actions</em> émises par Heidelberg Cement en septembre 2009 et les <em style='color: rgba(255,0,31,1.00)'>actions</em> Banca Monte Dei Paschi présentes sur le marché"
            }
          ]
        }
      ]
    },
    column3: {
      title: 'Investisseurs',
      types: [
        {
          type: 1,
          name: 'Institutionnels',
          explication:
            'Acteurs déterminants des marchés financiers, ils comprennent banques, compagnies d’assurance, caisses de retraite, mutuelles, grandes entreprises.'
        },
        {
          type: 2,
          name: 'Particuliers',
          explication:
            'Ils peuvent passer leurs ordres d’achat et de vente en direct sur les marchés réglementés via les plateformes électroniques gérées par des intermédiaires financiers ou Euronext.'
        },
        {
          type: 3,
          name: "Sociétés de gestion d'actifs",
          explication:
            'Entreprises d’investissement agréées par l’Autorité des Marchés Financiers (AMF), elles gèrent des portefeuilles de valeurs mobilières pour le compte de tiers, dans le cadre de contraintes réglementaires et contractuelles, et dans l’objectif d’obtenir le meilleur rendement possible en fonction du risque choisi ; elles sont souvent en Europe filiales de groupes bancaires.'
        }
      ],
      actors: [
        {
          title: 'Bnp paribas asset management',
          type: 3,
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
        {
          title: 'Axa',
          subTitle: 'Entreprise du secteur de l’assurance',
          type: 1,
          list: [
            {
              __html:
                'Gère les sommes destinées à couvrir les dommages et la protection des biens des assurés en cas de sinistre'
            },
            {
              __html:
                "Investit 150 millions d’€ en <em style='color: rgba(163,12,146,1.00)'>obligations</em> émises par Pernod Ricard et Carrefour en mai 2009 et avril 2010"
            }
          ]
        },
        {
          title: 'Monsieur Martin',
          subTitle: 'Investisseur particulier',
          type: 2,
          list: [
            {
              __html: 'Gère  directement son épargne en Bourse'
            },
            {
              __html:
                "Investit en avril 2009 20 000 € en <em style='color: rgba(255,0,31,1.00)'>actions</em> Lafarge, car il anticipe, après la crise de 2008, une reprise de l’économie et le rebond de Lafarge qui devrait tirer parti de l’acquisition d’Orascom Cement et de son positionnement sur les pays émergents"
            }
          ]
        }
      ]
    }
  }
};

export default module_05_blocCardGameType4;
