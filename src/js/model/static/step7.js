import moduleTypes from './moduleTypes';

const step7 = {
  linkStep: 7,
  title: 'Principes',
  /*------------------------------------*/
  /*MODULE 1*/
  /*------------------------------------*/
  module1: {
    position: 1,
    modulType: moduleTypes.blocVideo,
    name: `Vidéo Introductive`,
    firstDescription: {
      __html: `Découvrez l'étape 7 en visionnant la vidéo ci-dessous.`
    },
    videoUrl: 'https://player.vimeo.com/video/185672502',
    secondDescription: {
      __html: `L’ensemble des transactions sur lesquelles vous avez travaillé aux étapes 5 et 6, ont toutes eu lieu en 2009 et 2010:
      - d’avril 2009 à septembre 2009 pour les actions, 
      - de janvier 2010 à octobre 2010 pour les obligations, 
      - et en mai 2009 pour les titres de créance négociables. 

      Nous vous proposons de quitter 2009-2010 pour faire un bond de 2 ans à 2 ans et demi dans le temps et vous projeter en octobre 2011.`
    }
  },
  /*------------------------------------*/
  /*MODULE 2*/
  /*------------------------------------*/
  module2: {
    position: 2,
    modulType: moduleTypes.blocDivider
  },
  /*------------------------------------*/
  /*MODULE 3*/
  /*------------------------------------*/
  module3: {
    position: 3,
    modulType: moduleTypes.blocVideo,
    name: `Contexte économique`,
    firstDescription: {
      __html: `Découvrez ce qui s’est passé dans le monde et sur les marchés financiers durant cette période en visionnant 
      la vidéo ci-dessous. Soyez attentif à la façon dont les différentes zones géographiques réagissent aux événements. 
      Cette vidéo vous permettra d'évaluer le risque des différents titres dans les séquences suivantes. `
    },
    videoUrl: 'https://player.vimeo.com/video/185882827',
    secondDescription: {
      __html: `Dans ce contexte économique décrit dans la vidéo ci-dessus, qu’est-il advenu des titres qui ont été échangés
      en 2009 et 2010 ?`
    }
  },
  /*------------------------------------*/
  /*MODULE 4*/
  /*------------------------------------*/
  module4: {
    position: 4,
    modulType: moduleTypes.blocSubMenu1,
    description: `Choisissez le marché financier (actions, obligations, monétaire) sur lequel vous souhaitez d’abord travailler :`,
    buttons: [
      {
        position: 1,
        type: 'ButtonPrimary',
        name: 'Entrer sur le marché actions',
        color: 'rgba(255,97,35,1.00)',
        action: 'showMarketActions'
      },
      {
        position: 2,
        type: 'ButtonPrimary',
        name: 'Entrer sur le marché obligataire',
        color: 'rgba(131,0,125,1.00)',
        action: 'showMarketObligatary'
      },
      {
        position: 3,
        type: 'ButtonPrimary',
        name: 'Entrer sur le marché monétaire',
        color: 'rgba(0,156,44,1.00)',
        action: 'showMarketMonetary'
      }
    ]
  },
  /*------------------------------------*/
  /*MODULE 5*/
  /*------------------------------------*/
  module5: {
    position: 5,
    linkWithBlocSubMenu1ButtonPosition: 1,
    modulType: moduleTypes.blocDescription,
    description: `Parmi les actions qui ont été échangées en 2009, lesquelles vous semblent les plus risquées à la lumière de ce qui s’est passé jusqu’en octobre 2011 ? Quels émetteurs sont à votre avis les plus exposés, en terme géographique et en terme de secteur d'activité, aux événements retracés dans la vidéo ci-dessus ? `
  },
  /*------------------------------------*/
  /*MODULE 6*/
  /*------------------------------------*/
  module6: {
    position: 6,
    modulType: moduleTypes.blocDragAndDrop1,
    linkWithBlocSubMenu1ButtonPosition: 1,
    firstDescription: {
      __html: `Classez sur l’axe horizontal, « de moins à plus de risque », les entreprises ci-dessous en fonction de plusieurs paramètres : 
      - pour être moins sensible au marché boursier, vaut-il mieux être cotée ou non ? 
      - l’activité et la stratégie de l’entreprise résistent-elles plus ou moins bien à la crise ? 
      - ses ventes se concentrent-elles sur une zone géographique plus ou moins touchée par la crise ? 

      Puis validez. En cas de doute sur la façon dont l’Europe, les États-Unis et les pays émergents ont réagi à la crise, visionnez à nouveau la 2ième partie de la vidéo intitulée CONTEXTE ÉCONOMIQUE.`
    },
    chapter: 'Échelle de risque',
    duration: 4,
    title: 'Risque des titres actions',
    cards: [
      {
        color: 'white',
        startPosition: 4,
        endPosition: 3,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 1
        },
        content: {
          isDraggable: true,
          cardTitle: `spie batignolles`,
          cardSubTitle: `BTP - non coté`,
          list: [
            `Evaluée à dire d’expert une fois par an sous le contrôle du commissaire aux comptes et de l’AMF (données comptables de l’entreprise et décote liée à la faible liquidité des titres)`,
            `Très bon carnet de commandes pour 2010 et 2011`,
            `Répartition des ventes (100% en France)`
          ],
          legend: [
            {
              legendColor: `rgba(111,151,73,1.00)`,
              legendText: `35% - Construction`
            },
            {
              legendColor: `rgba(111,151,73,1.00)`,
              legendText: `26% - Travaux publics`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `20% - Génie civile et fondations`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `13% - Énergie et aménagement`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `6% - Immobilier et concessions`
            }
          ]
        }
      },
      {
        color: 'white',
        startPosition: 1,
        endPosition: 4,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 2
        },
        content: {
          isDraggable: true,
          cardTitle: `PERNOD RICARD`,
          cardSubTitle: `Consommation - coté`,
          list: [
            `Numéro 2 mondial des vins et spiritueux positionné plutôt sur le haut de gamme`,
            `Répartition des ventes après acquisition du groupe suédois Vin & Spirit présent en Europe et Amérique du Nord`
          ],
          legend: [
            {
              legendColor: `rgba(111,151,73,1.00)`,
              legendText: `34% - Europe hors France`
            },
            {
              legendColor: `rgba(132,182,81,1.00)`,
              legendText: `28% - Amériques`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `28% - Asie et reste du monde`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `10% - France`
            }
          ]
        }
      },
      {
        color: 'white',
        startPosition: 3,
        endPosition: 2,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 3
        },
        content: {
          isDraggable: true,
          cardTitle: `LAFARGE`,
          cardSubTitle: `Matériaux BTP - coté`,
          list: [
            `Stratégie axée sur le ciment (57% des ventes) et les marchés émergents`,
            `Répartition des ventes après acquisition du cimentier Orascom Cement présent en Egypte, Irak, Algérie, Corée du Sud, Pakistan, Espagne, Turquie`
          ],
          legend: [
            {
              legendColor: `rgba(111,151,73,1.00)`,
              legendText: `32% - Europe de l'Ouest`
            },
            {
              legendColor: `rgba(132,182,81,1.00)`,
              legendText: `22% - Amérique du Nord`
            },
            {
              legendColor: `rgba(132,182,81,1.00)`,
              legendText: `21% - Bassin méditerranéen`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `11% - Asie`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `9% - Europe de l'Est`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `5% - Amérique Latine`
            }
          ]
        }
      },
      {
        color: 'white',
        startPosition: 2,
        endPosition: 1,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 4
        },
        content: {
          isDraggable: true,
          cardTitle: `BANCA MONTE DEI PASCHI`,
          cardSubTitle: ` Banque - cotée`,
          list: [
            `Principalement implantée en Toscane, dans le centre et le nord-est de l’Italie`,
            `Bilan et fonds propres constitués d’obligations de l’État italien à hauteur de respectivement 10% et 160%`,
            `Répartition du résultat net`
          ],
          legend: [
            {
              legendColor: `rgba(138,196,84,1.00)`,
              legendText: `100% - Italie`
            }
          ]
        }
      },
      {
        color: 'white',
        startPosition: 5,
        endPosition: 5,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 5
        },
        content: {
          isDraggable: true,
          cardTitle: `HEIDELBERG CEMENT`,
          cardSubTitle: `Matériaux BTP - coté`,
          list: [
            `Stratégie d’intégration verticale (61% des ventes en bétons, granulats , matériaux et services)`,
            `Répartition des ventes après acquisition du groupe de matériaux Hanson Plc présent en Amérique du Nord, Royaume-Uni, Australie-Asie et Europe continentale`
          ],
          legend: [
            {
              legendColor: `rgba(111,151,73,1.00)`,
              legendText: `50% - Europe/Asie Centrale`
            },
            {
              legendColor: `rgba(132,182,81,1.00)`,
              legendText: `28% - Amérique du Nord`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `20% - Asie/Afrique/Australie`
            },
            {
              legendColor: `rgba(191,219,177,1.00)`,
              legendText: `2% - Services`
            }
          ]
        }
      }
    ]
  },
  /*------------------------------------*/
  /*MODULE 7*/
  /*------------------------------------*/
  module7: {
    position: 7,
    linkWithBlocSubMenu1ButtonPosition: 2,
    modulType: moduleTypes.blocDescription,
    description: `Parmi les obligations qui ont été échangées en 2010, lesquelles vous semblent les plus risquées à la lumière de ce qui s’est passé jusqu’en octobre 2011 et en tenant compte du niveau initial de notation de l’émetteur par les agences de notation? `
  },
  /*------------------------------------*/
  /*MODULE 8*/
  /*------------------------------------*/
  module8: {
    position: 8,
    modulType: moduleTypes.blocEnSavoirPlusType1,
    linkWithBlocSubMenu1ButtonPosition: 2,
    chapter: 'En savoir plus',
    duration: 2,
    title: `Agences de Notation`,
    firstDescription: {
      __html: `Pour plus de détail, passez la souris sur les différents termes et consultez le TABLEAU DES NOTATIONS ci-dessous.

              TABLEAU DES NOTATIONS 
              <a href="/notations _ long_terme.pdf">Notations à long terme </a>
              Fichier pdf`
    },
    cards: [
      {
        color: 'rgba(131,0,125,1.00)',
        hoverColor: 'rgba(185,120,182,1.00)',
        startPosition: 1,
        arrowFollowing: true,
        cardTitle: 'Agences de Notation',
        cardContent: `Elles évaluent la capacité d’un emprunteur (État, collectivité locale ou entreprise) à rembourser le capital et les intérêts de ses dettes à un instant et sur une période donnés. Pour les obligations (dettes à plus d’un an), elles émettent des notes de crédit à long terme de A à D selon leur propre échelle. Une note composée d’un ou plusieurs A indique un risque de non-remboursement plus faible qu’une note composée d’un ou plusieurs C ; elle évolue en fonction de l’augmentation ou la diminution du risque de crédit.`,
        cardSubTitle: `cf. Glossaire`
      },
      {
        color: 'rgba(185,120,182,1.00)',
        hoverColor: 'rgba(185,120,182,1.00)',
        startPosition: 2,
        arrowFollowing: false,
        cardTitle: 'Fitch',
        cardContent: `Fondée par John Knowles Fitch en 1913 à New York, elle appartient au groupe américain Hearst Corporation (80%) et au groupe français Fimalac (20%).`,
        cardSubTitle: `cf. Glossaire`
      },
      {
        color: 'rgba(185,120,182,1.00)',
        hoverColor: 'rgba(185,120,182,1.00)',
        startPosition: 3,
        arrowFollowing: false,
        cardTitle: `Standard and Poor's (S&P)`,
        cardContent: ` Elle est issue de la fusion de deux agences créées en 1916 et 1922 et appartient au groupe McGraw-Hill spécialisé dans les publications scientifiques et financières.`,
        cardSubTitle: `cf. Glossaire`
      },
      {
        color: 'rgba(185,120,182,1.00)',
        hoverColor: 'rgba(185,120,182,1.00)',
        startPosition: 4,
        arrowFollowing: false,
        cardTitle: `Moody's`,
        cardContent: `Créée en 1909 par John Moody, journaliste financier reconverti, elle a pour principal actionnaire la société Berkshire Hathaway, holding du milliardaire américain Warren Buffet.`,
        cardSubTitle: `cf. Glossaire`
      }
    ]
  },
  /*------------------------------------*/
  /*MODULE 9*/
  /*------------------------------------*/

  module9: {
    position: 9,
    modulType: moduleTypes.blocDragAndDrop1,
    linkWithBlocSubMenu1ButtonPosition: 2,
    firstDescription: {
      __html: `Classez sur l’axe horizontal, « de moins à plus de risque », les obligations d’État ci-dessous en fonction de plusieurs paramètres : 
                  - la visibilité est-elle meilleure à 5 ou 10 ans ? 
                  - quel État est le mieux noté et le plus solide dans le contexte économique décrit ? 

                Puis validez. En cas de doute, visionnez à nouveau la 2ième partie de la vidéo intitulée CONTEXTE ÉCONOMIQUE.`
    },
    chapter: 'Échelle de risque',
    duration: 3,
    title: `Risque des obligations d'état`,
    cards: [
      {
        color: 'white',
        startPosition: 1,
        /*endPosition: 3,*/
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 1
        },
        content: {
          isDraggable: false,
          cardTitle: `état allemand`,
          /*cardSubTitle: `BTP - non coté`,*/
          list: [
            `Noté en 2010 AAA par les agences Fitch et S&P, Aa2 par Moody’s`,
            `Après la chute d’activité de fin 2008-début 2009, rebond de l’économie dans un contexte de politique monétaire et fiscale accommodante, de reconstitution des stocks et de reprise des exportations notamment vers l’Asie `,
            `Aggravation du déficit de 0 à 3,3% du PIB en 2009 sous l’effet des mesures de soutien à l’économie (infrastructures, santé)`
          ],
          legend: []
        }
      },
      {
        color: 'white',
        startPosition: 2,
        endPosition: 3,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 2
        },
        content: {
          isDraggable: true,
          cardTitle: `obligation état allemand`,
          cardSubTitle: `5 ans - 3,75%`,
          list: [
            `Émise en janvier 2010 et remboursée en janvier 2015`,
            `Cours de 100 (exprimé en % de la valeur nominale, soit 1 €)`,
            `Montant total de 23 milliards d’€ pour couvrir les besoins de financement à moyen terme de l’État allemand`
          ],
          legend: []
        }
      },
      {
        color: 'white',
        startPosition: 3,
        endPosition: 1,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 3
        },
        content: {
          isDraggable: true,
          cardTitle: `obligation état allemand`,
          cardSubTitle: `10 ans - 3,75%`,
          list: [
            `Émise en janvier 2010 et remboursée en janvier 2020`,
            `Montant total de 24 milliards d’€ pour couvrir les besoins de financement à long terme de l’État allemand`
          ],
          legend: []
        }
      },
      {
        color: 'white',
        startPosition: 4,
        /*endPosition: 3,*/
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 4
        },
        content: {
          isDraggable: false,
          cardTitle: `état italien`,
          /*cardSubTitle: `BTP - non coté`,*/
          list: [
            `Noté en 2010 AA-, A+ et Aa2 par les agences Fitch, S&P et Moody’s`,
            `Chute de 5% du PIB en 2009 en raison de la baisse des exportations (-19% en volume), très orientées vers la zone euro (44% vs 2% vers la Chine), et de la demande intérieure (-12% en volume pour les investissements)`,
            `Fort impact sur le déficit qui passe de 2,7 à 5,3% du PIB en 2009 sous l’effet des mesures de soutien à l’économie (infrastructures, santé)`
          ],
          legend: []
        }
      },
      {
        color: 'white',
        startPosition: 5,
        endPosition: 4,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 5
        },
        content: {
          isDraggable: true,
          cardTitle: `obligation état italien`,
          cardSubTitle: `5 ANS - 4,25%`,
          list: [
            `Émise en février 2010 et remboursée en février 2015`,
            `Cours de 100 (exprimé en % de la valeur nominale, soit 1 000 €)`,
            `Montant total de 21,35 milliards d’€ pour couvrir les besoins de financement à moyen terme de l’État italien`
          ],
          legend: []
        }
      },
      {
        color: 'white',
        startPosition: 6,
        endPosition: 2,
        currentPosition: {
          dragStartOrEnd: 'start',
          position: 6
        },
        content: {
          isDraggable: true,
          cardTitle: `obligation état italien`,
          cardSubTitle: `5 ANS - 4,5%`,
          list: [
            `Émise en février 2010 et remboursée en février 2020`,
            `Cours de 100 (exprimé en % de la valeur nominale, soit 1 000 €)`,
            `Montant total de 22,66 milliards d’€ pour couvrir les besoins de financement à moyen terme de l’État italien`
          ],
          legend: []
        }
      }
    ]
  }
  /*------------------------------------*/
  /*MODULE 10*/
  /*------------------------------------*/
  /*------------------------------------*/
  /*MODULE 11*/
  /*------------------------------------*/
  /*------------------------------------*/
  /*MODULE 12*/
  /*------------------------------------*/
  /*------------------------------------*/
  /*MODULE 13*/
  /*------------------------------------*/
  /*------------------------------------*/
  /*MODULE 14*/
  /*------------------------------------*/
};

export default step7;
