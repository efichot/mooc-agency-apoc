import moduleTypes from '../moduleTypes';
import { actorscolumn3, actorscolumn1, actorscolumn2 } from './module_03_blocCardGameType2';

const module_04_blocCardGameType3 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType3,
  firstDescription: {
    __html: `Qui intéragit avec qui ? Sélectionnez les acteurs manquants et validez quand tous ont été identifiés.`,
  },
  /*noChapter: false,*/
  chapter: 'Jeu des acteurs des marchés financiers',
  duration: 3,
  title: 'Intéractions entre acteurs',
  game: [
    {
      column1: {
        title: 'Émetteurs',
        actors: [
          ...JSON.parse(JSON.stringify(actorscolumn1)).map(actor => {
            if (actor.title === 'Enel' || actor.title === 'Crédit agricole' || actor.title === 'Carrefour') {
              actor.answer = true;
              return actor;
            } else {
              actor.answer = false;
              return actor;
            }
          }),
        ],
      },
      column2: {
        title: 'Intermédiaires',
        actors: [...actorscolumn2.filter(actor => actor.title === 'Compagnie financière tradition')],
      },
      column3: {
        title: 'Investisseurs',
        actors: [
          ...JSON.parse(JSON.stringify(actorscolumn3)).map(actor => {
            if (actor.title === 'Hsbc global asset management' || actor.title === 'Axa') {
              actor.answer = true;
              return actor;
            } else {
              actor.answer = false;
              return actor;
            }
          }),
        ],
      },
    },
    {
      column1: {
        title: 'Émetteurs',
        actors: [
          ...JSON.parse(JSON.stringify(actorscolumn1)).map(actor => {
            if (actor.title === 'Lafarge' || actor.title === 'Spie batignolles') {
              actor.answer = true;
              return actor;
            } else {
              actor.answer = false;
              return actor;
            }
          }),
        ],
      },
      column2: {
        title: 'Intermédiaires',
        actors: [...actorscolumn2.filter(actor => actor.title === 'Crédit agricole CIB')],
      },
      column3: {
        title: 'Investisseurs',
        actors: [
          ...JSON.parse(JSON.stringify(actorscolumn3)).map(actor => {
            if (
              actor.title === 'Bnp paribas asset management' ||
              actor.title === 'Amundi' ||
              actor.title === 'Monsieur Martin'
            ) {
              actor.answer = true;
              return actor;
            } else {
              actor.answer = false;
              return actor;
            }
          }),
        ],
      },
    },
  ],
};

export default module_04_blocCardGameType3;
