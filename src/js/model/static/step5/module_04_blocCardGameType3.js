import moduleTypes from '../moduleTypes';
import { column3, column1, column2 } from './actors';

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
        title: column1.columnName,
        actors: [
          ...JSON.parse(JSON.stringify(column1.actorsArray))
            .map(actor => ({ ...actor.thirdCard, title: actor.title }))
            .map(actor => {
              actor.title === column1.actorsTitles.ENEL ||
              actor.title === column1.actorsTitles.CREDITAGRICOLE ||
              actor.title === column1.actorsTitles.CARREFOUR
                ? (actor.answer = true)
                : (actor.answer = false);
              return actor;
            }),
        ],
      },
      column2: {
        title: column2.columnName,
        actors: [
          ...JSON.parse(JSON.stringify(column2.actorsArray))
            .map(actor => ({ ...actor.thirdCard, title: actor.title }))
            .filter(actor => actor.title === column2.actorsTitles.CFT),
        ],
      },
      column3: {
        title: column3.columnName,
        actors: [
          ...JSON.parse(JSON.stringify(column3.actorsArray))
            .map(actor => ({ ...actor.thirdCard, title: actor.title, help: actor.help }))
            .map(actor => {
              actor.title === column3.actorsTitles.HSBC || actor.title === column3.actorsTitles.AXA
                ? (actor.answer = true)
                : (actor.answer = false);
              return actor;
            }),
        ],
      },
    },
    {
      column1: {
        title: column1.columnName,
        actors: [
          ...JSON.parse(JSON.stringify(column1.actorsArray))
            .map(actor => ({ ...actor.thirdCard, title: actor.title }))
            .map(actor => {
              actor.title === column1.actorsTitles.LAFARGE || actor.title === column1.actorsTitles.SPIE
                ? (actor.answer = true)
                : (actor.answer = false);
              return actor;
            }),
        ],
      },
      column2: {
        title: column2.columnName,
        actors: [
          ...JSON.parse(JSON.stringify(column2.actorsArray))
            .map(actor => ({ ...actor.thirdCard, title: actor.title }))
            .filter(actor => actor.title === column2.actorsTitles.CACIB),
        ],
      },
      column3: {
        title: column3.columnName,
        actors: [
          ...JSON.parse(JSON.stringify(column3.actorsArray))
            .map(actor => ({ ...actor.thirdCard, title: actor.title, help: actor.help }))
            .map(actor => {
              actor.title === column3.actorsTitles.BNP ||
              actor.title === column3.actorsTitles.AMUNDI ||
              actor.title === column3.actorsTitles.MARTIN
                ? (actor.answer = true)
                : (actor.answer = false);
              return actor;
            }),
        ],
      },
    },
  ],
};

export default module_04_blocCardGameType3;
