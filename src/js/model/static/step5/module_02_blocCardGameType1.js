import moduleTypes from '../moduleTypes';
import { column1, column2, column3 } from './actors';
import button_down_right from '../../../../assets/img/icons/button-down-right.png';
import button_up_left from '../../../../assets/img/icons/button-up-left.png';

const module_02_blocCardGameType1 = {
  /*position: 6,*/
  modulType: moduleTypes.blocCardGameType1,
  firstDescription: {
    __html: `Ce jeu se déroule en deux temps à partir de cas réels: 
    1. Découvrez ce que fait l'acteur dont vous tirez la carte;
    2. Trouvez la carte « Besoins et Opérations » qui correspond au cas de cet acteur en faisant défiler les cartes grâce aux boutons  <div class="button-in-description left" style="background-image: url(${button_up_left})"></div><div class="button-in-description right" style="background-image: url(${button_down_right})"></div>.`,
  },
  /*noChapter: false,*/
  chapter: 'Jeu des acteurs des marchés financiers',
  duration: 3,
  title: 'Besoins et opérations des acteurs',
  game: [
    ...column1.actorsArray.map(actor => ({
      category: column1.name,
      ...actor,
      firstCard: {
        ...actor.firstCard,
        title: actor.title,
      },
    })),
    ...column2.actorsArray.map(actor => ({
      category: column2.name,
      ...actor,
      firstCard: {
        ...actor.firstCard,
        title: actor.title,
      },
    })),
    ...column3.actorsArray.map(actor => ({
      category: column3.name,
      ...actor,
      firstCard: {
        ...actor.firstCard,
        title: actor.title,
        help: actor.help,
      },
    })),
  ],
};

export default module_02_blocCardGameType1;
