import moduleTypes from '../moduleTypes';
import module_03_blocCardGameType2 from './module_03_blocCardGameType2';

const column1Actors = module_03_blocCardGameType2.game.category1.actors.map(
  actor => {
    if (
      actor.title === 'Enel' ||
      actor.title === 'Crédit agricole' ||
      actor.title === 'Carrefour'
    ) {
      actor.answer = true;
      return actor;
    } else {
      actor.answer = false;
      return actor;
    }
  }
);

const column2Actors = module_03_blocCardGameType2.game.category2.actors.filter(
  actor => actor.title === 'Compagnie financière tradition'
);

const column3Actors = module_03_blocCardGameType2.game.category2.actors.map(
  actor => {
    if (
      actor.title === 'Hsbc global asset management' ||
      actor.title === 'Axa'
    ) {
      actor.answer = true;
      return actor;
    } else {
      actor.answer = false;
      return actor;
    }
  }
);

const module_04_blocCardGameType3 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType3,
  firstDescription: {
    __html: `Qui inéragit avec qui ? Sélectionnez les acteurs manquants et validez quand tous ont été identifiés.`
  },
  /*noChapter: false,*/
  chapter: 'Jeu des acteurs des marchés financiers',
  duration: 3,
  title: 'Intéractions entre acteurs',
  game: {
    column1: {
      title: 'Émetteurs',
      actors: [...column1Actors]
    },
    column2: {
      title: 'Intermédiaires',
      actors: [...column2Actors]
    },
    column3: {
      title: 'Investisseurs',
      actors: [...column3Actors]
    }
  }
};

export default module_04_blocCardGameType3;