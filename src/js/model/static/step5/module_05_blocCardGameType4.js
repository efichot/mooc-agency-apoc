import moduleTypes from '../moduleTypes';
import button_finger from '../../../../assets/img/icons/button-finger.png';

import { column3, column1, column2, types } from './actors';

const actorsColumn1Etats = column1.actorsArray
  .filter(actor => actor.type === types.column1.etats)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));
const actorsColumn1Entreprises = column1.actorsArray
  .filter(actor => actor.type === types.column1.entreprises)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));
const actorsColumn1Banques = column1.actorsArray
  .filter(actor => actor.type === types.column1.banques)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));

const actorsColumn2Investisseurs = column2.actorsArray
  .filter(actor => actor.type === types.column2.investisseurs)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));
const actorsColumn2Courtiers = column2.actorsArray
  .filter(actor => actor.type === types.column2.courtiers)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));
const actorsColumn2Banques = column2.actorsArray
  .filter(actor => actor.type === types.column2.banques)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));

const actorsColumn3Institutionnels = column3.actorsArray
  .filter(actor => actor.type === types.column3.institutionnels)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type, help: actor.help }));
const actorsColumn3Particuliers = column3.actorsArray
  .filter(actor => actor.type === types.column3.particuliers)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));
const actorsColumn3Societes = column3.actorsArray
  .filter(actor => actor.type === types.column3.societes)
  .map(actor => ({ ...actor.firstCard, title: actor.title, type: actor.type }));

const module_05_blocCardGameType4 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType4,
  firstDescription: {
    __html: `Glissez successivement les cartes "Acteur" ci-dessous vers la droite dans la catégorie correspondante, à l'aide du bouton  <div class="button-in-description" style="background-image: url(${button_finger})"></div>. Seule la bonne réponse est acceptée. Pensez à fermer les pop-up !`,
  },
  /*noChapter: false,*/
  chapter: 'Schéma des acteurs de marchés',
  duration: 3,
  title: "Catégorie et sous-catégories d'acteurs",
  game: {
    column1: {
      title: column1.name,
      types: [
        {
          type: types.column1.etats,
          explanation: {
            title: types.column1.etats,
            subTitle: 'Cf. glossaire',
            description:
              'Ils émettent des créances sur les marchés financiers pour couvrir leurs besoins de financement et renouveler les emprunts passés auprès des investisseurs ; en France, les collectivités se financent pour l’essentiel auprès des établissements bancaires, et n’ont recours que marginalement au marché primaire.',
          },
        },
        {
          type: types.column1.entreprises,
          explanation: {
            title: types.column1.entreprises,
            subTitle: 'Cf. glossaire',
            description:
              'En France, près de 80% du financement des entreprises et 90% de celui des petites et moyennes entreprises (PME) restent d’origine bancaire.',
          },
        },
        {
          type: types.column1.banques,
          explanation: {
            title: types.column1.banques,
            subTitle: 'Cf. glossaire',
            description:
              'Au même titre que les entreprises, elles émettent sur les marchés financiers pour leurs besoins de financement ; à travers la banque commerciale (ou banque de détail) qui collecte les ressources des particuliers et prête aux entreprises, elles ont en particulier recours au marché monétaire pour équilibrer ces flux.',
          },
        },
      ],
      actors: [
        { ...actorsColumn1Entreprises[Math.floor(Math.random() * actorsColumn1Entreprises.length)] },
        { ...actorsColumn1Etats[Math.floor(Math.random() * actorsColumn1Etats.length)] },
        { ...actorsColumn1Banques[Math.floor(Math.random() * actorsColumn1Banques.length)] },
      ],
    },
    column2: {
      title: column2.name,
      types: [
        {
          type: types.column2.investisseurs,
          explanation: {
            title: types.column2.investisseurs,
            subTitle: 'Cf. glossaire',
            description:
              'Agréées par l’Autorité de Contrôle Prudentiel et de Résolution (ACPR), elles sont chargées de transmettre les ordres des acheteurs et des vendeurs sur les marchés financiers ; certaines se limitent à ce rôle, d’autres développent des services financiers complémentaires comme la gestion de portefeuilles de clients ou le conseil.',
          },
        },
        {
          type: types.column2.courtiers,
          explanation: {
            title: 'Courtiers (brokers en anglais)',
            subTitle: 'Cf. glossaire',
            description:
              'Intermédiaires financiers entre les investisseurs et les marchés, ils proposent à leurs clients une plateforme de transactions et transmettent leurs ordres en contrepartie d’une rémunération ; ils sont particulièrement présents sur les marchés des dérivés et des taux.',
          },
        },
        {
          type: types.column2.banques,
          explanation: {
            title: types.column2.banques,
            subTitle: 'Cf. glossaire',
            description:
              'À travers la banque de financement et d’investissement, elles exercent de multiples activités de conseil, d’intermédiation et de montage pour des opérations de haut de bilan de grands clients (introductions en bourse, émissions de dette, fusions/acquisitions, prêts syndiqués…)',
          },
        },
      ],
      actors: [
        { ...actorsColumn2Courtiers[Math.floor(Math.random() * actorsColumn2Courtiers.length)] },
        { ...actorsColumn2Banques[Math.floor(Math.random() * actorsColumn2Banques.length)] },
        { ...actorsColumn2Investisseurs[Math.floor(Math.random() * actorsColumn2Investisseurs.length)] },
      ],
    },
    column3: {
      title: column3.name,
      types: [
        {
          type: types.column3.institutionnels,
          explanation: {
            title: types.column3.institutionnels,
            subTitle: 'Cf. glossaire',
            description:
              'Acteurs déterminants des marchés financiers, ils comprennent banques, compagnies d’assurance, caisses de retraite, mutuelles, grandes entreprises.',
          },
        },
        {
          type: types.column3.particuliers,
          explanation: {
            title: types.column3.particuliers,
            subTitle: 'Cf. glossaire',
            description:
              'Ils peuvent passer leurs ordres d’achat et de vente en direct sur les marchés réglementés via les plateformes électroniques gérées par des intermédiaires financiers ou Euronext.',
          },
        },
        {
          type: types.column3.societes,
          explanation: {
            title: "Sociétés de gestion d'actifs (asset manager en anglais)",
            subTitle: 'Cf. glossaire',
            description:
              'Entreprises d’investissement agréées par l’Autorité des Marchés Financiers (AMF), elles gèrent des portefeuilles de valeurs mobilières pour le compte de tiers, dans le cadre de contraintes réglementaires et contractuelles, et dans l’objectif d’obtenir le meilleur rendement possible en fonction du risque choisi ; elles sont souvent en Europe filiales de groupes bancaires.',
          },
        },
      ],
      actors: [
        { ...actorsColumn3Societes[Math.floor(Math.random() * actorsColumn3Societes.length)] },
        { ...actorsColumn3Institutionnels[Math.floor(Math.random() * actorsColumn3Institutionnels.length)] },
        { ...actorsColumn3Particuliers[Math.floor(Math.random() * actorsColumn3Particuliers.length)] },
      ],
    },
  },
};

export default module_05_blocCardGameType4;
