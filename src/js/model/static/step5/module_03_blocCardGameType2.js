import moduleTypes from '../moduleTypes';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';
import button_up_left from '../../../../assets/img/icons/button-up-left.png';

import { column3, column1, column2 } from './actors';

const actorscolumn1 = [
  ...column1.actorsArray.map(actor => ({
    ...actor.thirdCard,
    title: actor.title,
  })),
];

const actorscolumn2 = [
  ...column2.actorsArray.map(actor => ({
    ...actor.thirdCard,
    title: actor.title,
  })),
];

const actorscolumn3 = [
  ...column3.actorsArray.map(actor => ({
    ...actor.thirdCard,
    title: actor.title,
    help: actor.help,
  })),
];

const module_03_blocCardGameType2 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType2,
  firstDescription: {
    __html: `Les trois acteurs di-desus ont des « Besoins et Opérations » différents ; ils appartiennent à trois catégories d'acteurs que vous allez analyser.
    Pour chaque question, sélectionnez la ou les bonnes(s) réponse(s) en vous aidant des informations contenues dans les cartes à faire défiler  grâce aux boutons  <div class="button-in-description left" style="background-image: url(${button_up_left})"></div><div class="button-in-description right" style="background-image: url(${button_down_right})"></div>. Pensez à fermer les pop-ups !`,
  },
  /*noChapter: false,*/
  chapter: 'Questionnaire des acteurs',
  duration: 3,
  title: 'Catégorie des acteurs des marchés financiers',
  styles: {
    gridAutoColumns: 220,
  },
  cards: {
    actorscolumn1,
    actorscolumn2,
    actorscolumn3,
  },
  game: [
    {
      title: { __html: 'Question 1' },
      steps: ['column1', 'column3', 'column2'],
      question: { __html: 'Comment nomme-t-on les acteurs présents dans chacune des catégories ci-dessous ?' },
      column1: {
        title: 'Catégorie 1',
        actorscolumn1,
        answers: [
          {
            choice: 'Émetteurs',
            isAnswer: true,
          },
          {
            choice: 'Acquéreurs',
            isAnswer: false,
          },
          {
            choice: 'Entrepreneurs',
            isAnswer: false,
          },
        ],
        popup: {
          title: undefined,
          subTitle: undefined,
          description: {
            __html:
              'Sont appelés émetteurs tous les acteurs économiques qui émettent ou ont émis des titres (cf. actions,obligations, titres monétaires) sur les marchés financiers.',
          },
        },
      },
      column3: {
        title: 'Catégorie 3',
        actorscolumn3,
        answers: [
          {
            choice: 'Financeurs',
            isAnswer: false,
          },
          {
            choice: 'Gérants',
            isAnswer: false,
          },
          {
            choice: 'Investisseurs',
            isAnswer: true,
          },
        ],
        popup: {
          title: undefined,
          subTitle: undefined,
          description: {
            __html:
              'Sont appelés investisseurs tous les acteurs économiques qui font des placements sur les marchés financiers, achètent des titres ou vendent ceux qu’ils ont achetés.',
          },
        },
      },
      column2: {
        title: 'Catégorie 2',
        actorscolumn2,
        answers: [
          {
            choice: 'Négociateurs',
            isAnswer: false,
          },
          {
            choice: 'Intermédiaires',
            isAnswer: true,
          },
          {
            choice: 'Prestataires',
            isAnswer: false,
          },
        ],
        popup: {
          title: undefined,
          subTitle: undefined,
          description: {
            __html:
              'Sont appelés intermédiaires tous les acteurs économiques dont la fonction est de permettre l’échange des titres entre émetteurs et investisseurs ou entre investisseurs.',
          },
        },
      },
    },
    {
      title: { __html: 'Question 2' },
      steps: ['column1'],
      question: { __html: 'Quelle(s) catégorie(s) de titres les entreprises ci-dessous peuvent-elles émettre ?' },
      column1: {
        title: 'Émetteurs',
        actorscolumn1,
        answers: [
          {
            choice: 'Actions',
            isAnswer: true,
          },
          {
            choice: 'Obligations',
            isAnswer: true,
          },
          {
            choice: 'Titres monétaires',
            isAnswer: true,
          },
        ],
        popup: {
          title: 'Marchés actions, obligataires et monétaires',
          subTitle: 'Cf. Glossaire',
          description: {
            __html:
              'Les entreprises, quel que soit leur secteur d’activité, peuvent émettre à la fois des actions, des obligations (cf. Pernod Ricard) et des titres monétaires(cf. Enel et Crédit Agricole) sur les différents marchés correspondants (marché actions, marché obligataire et marché monétaire). Les États (cf. Allemagne et Italie) n’ayant ni capital, ni propriétaires, ils ne peuvent pas en revanche émettre des actions.',
          },
        },
      },
    },
    {
      title: { __html: 'Question 3' },
      steps: ['column1'],
      question: { __html: 'Quel acteur ne procède à aucune opération financière ?' },
      column1: {
        title: 'Émetteurs',
        actorscolumn1,
        answers: [
          {
            choice: 'Banca monte dei paschi',
            isAnswer: true,
          },
          {
            choice: 'Lcl',
            isAnswer: false,
          },
          {
            choice: 'Spie Batignolles',
            isAnswer: false,
          },
        ],
        popup: {
          title: 'Marchés primaire et secondaire',
          subTitle: 'Cf. Glossaire',
          description: {
            __html:
              'Banca Monte Dei Paschi est cotée en Bourse mais ne procède, sur la période considérée, à aucune nouvelle émission de titres sur le marché financier dit primaire, ni à aucune cession de titres sur le marché financier dit secondaire. Les actions Banca Monte Dei Paschi achetées par BNP Paribas Asset Management sont dites existantes par opposition à nouvelles lors de l’émission ; elles sont achetées auprès d’autres investisseurs sur le marché secondaire.',
          },
        },
      },
    },
    {
      title: { __html: 'Question 4' },
      steps: ['column1'],
      question: { __html: 'Combien d’entreprises sont cotées ?' },
      column1: {
        title: 'Émetteurs',
        actorscolumn1,
        answers: [
          {
            choice: '8',
            isAnswer: true,
          },
          {
            choice: '4',
            isAnswer: false,
          },
          {
            choice: '2',
            isAnswer: false,
          },
        ],
        popup: {
          title: 'Marché réglementé',
          subTitle: 'Cf. Glossaire',
          description: {
            __html:
              'Banca Monte Dei Paschi, Carrefour, Crédit Agricole, Enel, Heidelberg Cement, Lafarge, Pernod Ricard et Banco Santander sont des entreprises cotées dont les titres (actions, obligations, titres monétaires) sont émis et s’échangent sur le marché coté dit marché réglementé où l’Autorité des Marchés Financiers (AMF), autorité publique française indépendante, veille à la protection de l’épargne investie dans les produits financiers, à l’information des investisseurs et au bon fonctionnement des marchés financiers.',
          },
        },
      },
    },
    {
      title: { __html: 'Question 5' },
      steps: ['column1'],
      question: { __html: 'Combien d’entreprises sont non cotées ?' },
      column1: {
        title: 'Émetteurs',
        actorscolumn1,
        answers: [
          {
            choice: '8',
            isAnswer: false,
          },
          {
            choice: '4',
            isAnswer: true,
          },
          {
            choice: '2',
            isAnswer: false,
          },
        ],
        popup: {
          title: 'Marché de gré à gré',
          subTitle: 'Cf. Glossaire',
          description: {
            __html:
              'LCL et Spie Batignolles sont des entreprises non cotées, ce qui ne les empêche pas de pouvoir émettre et échanger des titres (actions, obligations, titres monétaires) sur le marché non coté, dit marché de gré à gré, entre deux parties.',
          },
        },
      },
    },
    {
      title: { __html: 'Question 6' },
      steps: ['column2'],
      question: {
        __html:
          'Qui sert d’intermédiaire sur le marché monétaire entre Crédit Agricole, Enel et HSBC Asset Management ?',
      },
      column2: {
        title: 'Intermédiaires',
        actorscolumn2,
        answers: [
          {
            choice: 'Crédit agricole CIB',
            isAnswer: false,
          },
          {
            choice: 'Compagnie financière tradition',
            isAnswer: true,
          },
          {
            choice: 'Crédit agricole cheuvreux',
            isAnswer: false,
          },
        ],
        popup: {
          title: undefined,
          subTitle: undefined,
          description: {
            __html:
              "Compagnie Financière Tradition place les titres monétaires émis par Crédit Agricole et Enel auprès de HSBC Asset Management. Elle intervient pour cette transaction sur le marché réglementé et agit en tant que courtier. Crédit Agricole Cheuvreux ou Oddo Securities assurent le même type de fonction en tant qu'entreprises d'investissement agréées par l'Autorité de Contrôle Prudentiel et de Résolution (ACPR), tandis que Crédit Agricole CIB intervient pour ses clients en tant que banque de financement et d'investissement. ",
          },
        },
      },
    },
    {
      title: { __html: 'Question 7' },
      steps: ['column3'],
      question: { __html: "Quel investisseur réalise son opération monétaire directement auprès d'un autre acteur ?" },
      column3: {
        title: 'Investisseurs',
        actorscolumn3,
        answers: [
          {
            choice: 'Hsbc global asset management',
            isAnswer: false,
          },
          {
            choice: 'Société Générale',
            isAnswer: true,
          },
          {
            choice: 'Amundi',
            isAnswer: false,
          },
        ],
        popup: {
          title: 'Échange interbancaire',
          subTitle: 'Cf. Glossaire',
          description: {
            __html:
              "Société Générale place le 29 mai son excédent de liquidité en prêtant sans intermédiaire 10 millions d'€ directement à LCL. Cette opération est qualifiée d'échange interbancaire, transaction de gré à gré réservée aux banques qui s'échangent entre elles des actifs financiers de court terme (entre un jour et un an) au taux du marché interbancaire (prix de l'argent au jour le jour).",
          },
        },
      },
    },
    {
      title: { __html: 'Question 8' },
      steps: ['column3'],
      question: { __html: 'Qui peut être à la fois émetteur, intermédiaire et investisseur ?' },
      column1: {
        title: 'Émetteurs',
        actorscolumn1,
      },
      column3: {
        title: 'Investisseurs',
        actorscolumn3,
        answers: [
          {
            choice: 'Banques',
            isAnswer: true,
          },
          {
            choice: 'Collectivités locales',
            isAnswer: false,
          },
          {
            choice: 'Courtiers',
            isAnswer: false,
          },
        ],
        popup: {
          title: undefined,
          subTitle: undefined,
          description: {
            __html:
              'À travers leurs différents métiers, les banques mais aussi les assureurs peuvent intervenir sur les marchés financiers à la fois en tant qu’émetteur, investisseur et intermédiaire. La réglementation prévoit néanmoins la séparation de ces métiers en filiales juridiquement distinctes de façon à éviter les conflits d’intérêt (cf. muraille de Chine, dans un même groupe bancaire, entre la société de gestion qui gère pour compte de tiers et investit en titres, et la banque de financement et d’investissement qui conseille les émetteurs et place leurs titres auprès des investisseurs).',
          },
        },
      },
      column2: {
        title: 'Intermédiaires',
        actorscolumn2,
      },
    },
  ],
};

export default module_03_blocCardGameType2;
